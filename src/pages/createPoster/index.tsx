import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./style";
import { Sidebar } from "@/components/createPoster/Sidebar";
import { ChatPanel } from "@/components/createPoster/ChatPanel";
import { PosterPreview } from "@/components/createPoster/PosterPreview";
import { QUESTIONS, SIZE_PRESETS } from "../../lib/constants";
import { useGeneratePoster } from "@/hooks/usePoster";
import type {
  DisplayMode,
  MenuKey,
  Message,
  PosterState,
} from "../../types/types";

type LocationState = { posterSrc?: string } | null;

export default function Create() {
  const location = useLocation();
  const initialPosterSrc = (location.state as LocationState)?.posterSrc;
  const [presetPosterSrc, setPresetPosterSrc] = useState<string | undefined>(initialPosterSrc);
  const hasPreset = !!initialPosterSrc;
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [activeMenu, setActiveMenu] = useState<MenuKey>("ai");
  const [posterState, setPosterState] = useState<PosterState>(
    hasPreset ? "ready" : "locked"
  );
  const [displayMode, setDisplayMode] = useState<DisplayMode>("poster");
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [posterTitle, setPosterTitle] = useState<string>("");
  const [posterSubtitle, setPosterSubtitle] = useState<string>("");

  const posterImgRef = useRef<HTMLImageElement | null>(null);
  const snsImgRef = useRef<HTMLImageElement | null>(null);
  const messagesWrapperRef = useRef<HTMLDivElement | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sizeKey, setSizeKey] = useState<keyof typeof SIZE_PRESETS>("poster");
  const { w: canvasW, h: canvasH } = SIZE_PRESETS[sizeKey];

  const generatePosterMutation = useGeneratePoster();

  const handleSuggestClick = () => {
    if (displayMode === "sns") {
      window.open(
        "https://www.instagram.com/p/DQs7Mtak00c/?igsh=bmxueW02NjV0MnZn",
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }
    if (posterState !== "ready") {
      toast.info("질문을 완료하고 시안이 준비된 후 사용해 주세요.");
      return;
    }
    setDisplayMode("sns");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // 사용자 답변 저장
    setUserAnswers((prev) => [...prev, inputValue.trim()]);

    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, type: "ai", content: QUESTIONS[nextIndex] },
        ]);
      } else {
        // 모든 질문 완료 - API 호출
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            type: "ai",
            content: "입력해 주셔서 감사합니다. 시안을 준비하고 있어요!",
          },
        ]);
        setPosterState("loading");

        // 사용자 답변을 API 요청 형식으로 변환
        const allAnswers = [...userAnswers, inputValue.trim()];
        const requestData = {
          storeName: allAnswers[0] || "",
          serviceName: allAnswers[1] || "",
          category: allAnswers[2] || "",
          targetAudience: allAnswers[3] || "",
        };

        // API 호출
        generatePosterMutation.mutate(requestData, {
          onSuccess: (response) => {
            setPresetPosterSrc(response.url);
            setPosterTitle(response.title);
            setPosterSubtitle(response.subtitle);
            setPosterState("ready");
            toast.success("포스터가 생성되었습니다!");
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now() + 2,
                type: "ai",
                content: `포스터가 완성되었습니다!\n제목: ${response.title}\n부제: ${response.subtitle}`,
              },
            ]);
          },
          onError: (error: any) => {
            setPosterState("locked");
            console.error("Poster generation error:", error);

            let errorMessage = "포스터 생성에 실패했습니다.";

            // 에러 타입별 메시지
            if (error.code === 'ERR_NETWORK' || error.message?.includes('ERR_EMPTY_RESPONSE')) {
              errorMessage = "서버와 연결할 수 없습니다. 백엔드 서버를 확인해주세요.";
            } else if (error.code === 'ECONNABORTED') {
              errorMessage = "요청 시간이 초과되었습니다. 잠시 후 다시 시도해주세요.";
            } else if (error.response) {
              errorMessage = error.response.data?.message || `서버 에러: ${error.response.status}`;
            }

            toast.error(errorMessage);
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now() + 2,
                type: "ai",
                content: `죄송합니다. ${errorMessage}\n\n입력하신 정보:\n- 가게명: ${requestData.storeName}\n- 서비스명: ${requestData.serviceName}\n- 카테고리: ${requestData.category}\n- 타겟: ${requestData.targetAudience}`,
              },
            ]);
          },
        });
      }
    }, 1000);

    setInputValue("");
  };

  useEffect(() => {
    if (!hasPreset && messages.length === 0) {
      setMessages([{ id: Date.now(), type: "ai", content: QUESTIONS[0] }]);
    }
  }, []);

  useEffect(() => {
    const el = messagesWrapperRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const downloadPoster = async () => {
    const imgEl =
      displayMode === "sns" ? snsImgRef.current : posterImgRef.current;
    if (!imgEl) return;
    const naturalW = imgEl.naturalWidth;
    const naturalH = imgEl.naturalHeight;
    if (!naturalW || !naturalH) return;

    const canvas = document.createElement("canvas");
    canvas.width = canvasW;
    canvas.height = canvasH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const scale = Math.max(canvasW / naturalW, canvasH / naturalH);
    const drawW = naturalW * scale;
    const drawH = naturalH * scale;
    const dx = (canvasW - drawW) / 2;
    const dy = (canvasH - drawH) / 2;
    ctx.drawImage(imgEl, dx, dy, drawW, drawH);

    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `poster-${sizeKey}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleMenuClick = (key: MenuKey) => {
    setActiveMenu(key);
    if (key === "download") {
      if (posterState !== "ready") {
        toast.info("질문을 모두 완료한 후 다운로드할 수 있어요.");
        return;
      }
      setTimeout(downloadPoster, 0);
    }
  };

  const handleSizeSelect = (key: keyof typeof SIZE_PRESETS) => {
    setSizeKey(key);
  };

  return (
    <S.Container>
      <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      <S.SizePanel visible={activeMenu === "size"}>
        <S.SizeOption
          active={sizeKey === "16x9"}
          onClick={() => handleSizeSelect("16x9")}
        >
          16:9
        </S.SizeOption>
        <S.SizeOption
          active={sizeKey === "4x5"}
          onClick={() => handleSizeSelect("4x5")}
        >
          4:5
        </S.SizeOption>
        <S.SizeOption
          active={sizeKey === "a4" || sizeKey === "poster"}
          onClick={() => handleSizeSelect("a4")}
        >
          A4
        </S.SizeOption>
      </S.SizePanel>
      <S.MainContent>
        <S.ChatContainer>
          <ChatPanel
            messages={messages}
            inputValue={inputValue}
            onChange={setInputValue}
            onSubmit={handleSubmit}
            messagesWrapperRef={messagesWrapperRef}
          />
        </S.ChatContainer>
        <S.Spacer />
        <PosterPreview
          canvasW={canvasW}
          canvasH={canvasH}
          displayMode={displayMode}
          posterState={posterState}
          posterImgRef={posterImgRef}
          snsImgRef={snsImgRef}
          onSuggestClick={handleSuggestClick}
          posterSrc={presetPosterSrc}
          posterTitle={posterTitle}
          posterSubtitle={posterSubtitle}
        />
      </S.MainContent>
    </S.Container>
  );
}

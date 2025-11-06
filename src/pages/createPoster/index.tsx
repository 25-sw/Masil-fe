import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./style";
import { Sidebar } from "@/components/createPoster/Sidebar";
import { ChatPanel } from "@/components/createPoster/ChatPanel";
import { PosterPreview } from "@/components/createPoster/PosterPreview";
import { QUESTIONS, SIZE_PRESETS } from "../../lib/constants";
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
  const [presetPosterSrc] = useState<string | undefined>(initialPosterSrc);
  const hasPreset = !!presetPosterSrc;
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [activeMenu, setActiveMenu] = useState<MenuKey>("ai");
  const [posterState, setPosterState] = useState<PosterState>(
    hasPreset ? "ready" : "locked"
  );
  const [displayMode, setDisplayMode] = useState<DisplayMode>("poster");

  const posterImgRef = useRef<HTMLImageElement | null>(null);
  const snsImgRef = useRef<HTMLImageElement | null>(null);
  const messagesWrapperRef = useRef<HTMLDivElement | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sizeKey, setSizeKey] = useState<keyof typeof SIZE_PRESETS>("poster");
  const { w: canvasW, h: canvasH } = SIZE_PRESETS[sizeKey];

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

    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, type: "ai", content: QUESTIONS[nextIndex] },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            type: "ai",
            content: "입력해 주셔서 감사합니다. 시안을 준비하고 있어요!",
          },
        ]);
        setPosterState("loading");
        setTimeout(() => setPosterState("ready"), 5000);
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
        />
      </S.MainContent>
    </S.Container>
  );
}

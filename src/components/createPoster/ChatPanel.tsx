import {
  type FormEvent,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "@/pages/createPoster/style";
import type { Message } from "@/types/types";

type Props = {
  messages: Message[];
  inputValue: string;
  onChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  messagesWrapperRef: RefObject<HTMLDivElement | null>;
};

export function ChatPanel({
  messages,
  inputValue,
  onChange,
  onSubmit,
  messagesWrapperRef,
}: Props) {
  const [typedMap, setTypedMap] = useState<Record<number, string>>({});
  const typingTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const lastAI = [...messages].reverse().find((m) => m.type === "ai");
    if (!lastAI) return;
    if (typedMap[lastAI.id] === lastAI.content) return;

    const startIndex = (typedMap[lastAI.id] ?? "").length;
    if (startIndex >= lastAI.content.length) return;

    const typeNext = (index: number) => {
      const nextText = lastAI.content.slice(0, index);
      setTypedMap((prev) => ({ ...prev, [lastAI.id]: nextText }));
      const el = messagesWrapperRef.current;
      if (el) el.scrollTop = el.scrollHeight;

      if (index <= lastAI.content.length) {
        typingTimerRef.current = window.setTimeout(
          () => typeNext(index + 1),
          60
        );
      }
    };

    typeNext(startIndex + 1);

    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, [messages]);
  return (
    <S.ChatPanel>
      <S.MessagesWrapper ref={messagesWrapperRef}>
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.type === "ai" ? (
              <S.AIMessage>
                <S.MessageBubble isAI>
                  {typedMap[msg.id] ?? msg.content}
                </S.MessageBubble>
              </S.AIMessage>
            ) : (
              <S.UserMessage>
                <S.MessageBubble>{msg.content}</S.MessageBubble>
              </S.UserMessage>
            )}
          </div>
        ))}
      </S.MessagesWrapper>

      <S.InputForm onSubmit={onSubmit}>
        <S.InputWrapper>
          <S.ChatInput
            value={inputValue}
            onChange={(e) => onChange(e.target.value)}
            placeholder="수정하고 싶은 부분을 말해주세요!"
          />
          <S.SendButton type="submit" disabled={!inputValue.trim()}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path
                d="M21 2L10 13M21 2L14 21L10 13M21 2L2 9L10 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </S.SendButton>
        </S.InputWrapper>
      </S.InputForm>
    </S.ChatPanel>
  );
}

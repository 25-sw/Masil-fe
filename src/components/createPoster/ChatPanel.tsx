import { type FormEvent, type RefObject } from "react";
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
  return (
    <S.ChatPanel>
      <S.MessagesWrapper ref={messagesWrapperRef}>
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.type === "ai" ? (
              <S.AIMessage>
                <S.MessageBubble isAI>{msg.content}</S.MessageBubble>
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
            placeholder="답변을 입력해 주세요"
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

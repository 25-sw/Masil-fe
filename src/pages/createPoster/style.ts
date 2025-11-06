import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 78px);
  background: #fafafa;
  position: relative;
`;

export const Sidebar = styled.aside`
  width: 140px;
  background: #fff;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.04);
  z-index: 10;
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#000" : "#a1a1a1")};
  transition: all 0.2s ease;
  padding: 8px;
  border-radius: 8px;

  &:first-of-type {
    margin: 0 14px;
  }

  &:hover {
    color: #0c8948;
    background: #f5f5f5;
  }

  ${({ active }) =>
    active &&
    `
    background: #f0fdf4;
  `}
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const MenuText = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0;
  padding: 40px 140px 40px 80px;
  overflow: hidden;
`;

export const Spacer = styled.div`
  flex: 0 0 120px;
  height: 1px;
`;

export const CanvasArea = styled.div<{
  w: number;
  h: number;
  square?: boolean;
}>`
  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;
  border-radius: ${({ square }) => (square ? 0 : 20)}px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const EmptyCanvas = styled.div`
  color: #d9d9d9;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LockOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: #e0e0e0;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const LockMessage = styled.div`
  padding: 10px 14px;
  border-radius: 8px;
  background: #e9e9e9;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const SkeletonOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  overflow: hidden;
  background: #dcdcdc;
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 70%;
    left: -70%;
    background: linear-gradient(
      90deg,
      rgba(220, 220, 220, 0) 0%,
      rgba(255, 255, 255, 0.95) 50%,
      rgba(220, 220, 220, 0) 100%
    );
    animation: ${shimmer} 1.4s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40%;
    left: -40%;
    background: linear-gradient(
      90deg,
      rgba(220, 220, 220, 0) 0%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(220, 220, 220, 0) 100%
    );
    animation: ${shimmer} 1.6s ease-in-out infinite;
    animation-delay: 0.2s;
  }
`;

export const ChatContainer = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-left: 0;
  transform: translateX(-30px);
`;

export const ChatPanel = styled.div`
  width: 342px;
  height: 656px;
  background: #fff;
  border: 1px solid #9b9b9b;
  border-radius: 10px;
  position: relative;
`;

export const MessagesWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 24px;
  bottom: 90px;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  overflow-y: auto;
`;

export const AIMessage = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const UserMessage = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MessageBubble = styled.div<{ isAI?: boolean }>`
  max-width: 275px;
  padding: 11px;
  background: ${({ isAI }) => (isAI ? "#0c8948" : "#fff")};
  color: ${({ isAI }) => (isAI ? "#fff" : "#282828")};
  border: ${({ isAI }) => (isAI ? "none" : "1px solid #9b9b9b")};
  border-radius: ${({ isAI }) =>
    isAI ? "10px 10px 10px 0" : "10px 10px 0 10px"};
  font-size: 18px;
  line-height: 1.4;
  word-wrap: break-word;
`;

export const InputForm = styled.form`
  width: 310px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ChatInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 13px 50px 13px 20px;
  border: 1px solid #9b9b9b;
  border-radius: 30px;
  font-size: 14px;
  outline: none;
  background: #fff;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, sans-serif;

  &::placeholder {
    color: #d9d9d9;
  }

  &:focus {
    border-color: #0c8948;
    box-shadow: 0 0 0 2px rgba(12, 137, 72, 0.1);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const SendButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 23px;
  height: 23px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0c8948;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SuggestionButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 12px;
  z-index: 4;
  width: 133px;
  height: 45px;
  border: none;
  border-radius: 7px;
  background: #0c8948;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    filter: brightness(0.95);
  }
`;

export const PosterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SizePanel = styled.div<{ visible?: boolean }>`
  position: absolute;
  left: 150px;
  top: 280px;
  width: 91px;
  height: 218px;
  border-radius: 10px;
  background: #d9d9d9;
  padding: 11px 9px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  gap: 11px;
  z-index: 20;
`;

export const SizeOption = styled.button<{ active?: boolean }>`
  width: 73px;
  height: 58px;
  border-radius: 10px;
  background: #fff;
  border: ${({ active }) =>
    active ? "2px solid #0c8948" : "1px solid #e5e5e5"};
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px rgba(12, 137, 72, 0.12) inset;
  }
`;

// Instagram Feed Styles
export const InstagramFeed = styled.div`
  width: 100%;
  max-width: 468px;
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const FeedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #efefef;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: 2px solid white;
  box-shadow: 0 0 0 1px #dbdbdb;
`;

export const UserNameText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #262626;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const FeedImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const FeedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
`;

export const ActionLeft = styled.div`
  display: flex;
  gap: 16px;
`;

export const ActionIcon = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

export const Caption = styled.div`
  padding: 0 16px 16px;
`;

export const CaptionUser = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
`;

export const CaptionText = styled.span`
  font-size: 14px;
  color: #262626;
  line-height: 1.5;
  margin-left: 6px;
`;

export const CaptionTitle = styled.div`
  font-size: 14px;
  color: #262626;
  line-height: 1.5;
  margin-top: 4px;
  font-weight: 500;
`;

export const CaptionSubtitle = styled.div`
  font-size: 14px;
  color: #737373;
  line-height: 1.5;
  margin-top: 2px;
`;

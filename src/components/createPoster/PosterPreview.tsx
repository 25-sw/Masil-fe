import * as S from "@/pages/createPoster/style";
import posterImage from "@/assets/poster.svg";
import type { DisplayMode, PosterState } from "@/types/types";
import type { RefObject } from "react";

type Props = {
  canvasW: number;
  canvasH: number;
  displayMode: DisplayMode;
  posterState: PosterState;
  posterImgRef: RefObject<HTMLImageElement | null>;
  snsImgRef: RefObject<HTMLImageElement | null>;
  onSuggestClick: () => void;
  posterSrc?: string;
  posterTitle?: string;
  posterSubtitle?: string;
};

export function PosterPreview({
  canvasW,
  canvasH,
  displayMode,
  posterState,
  posterImgRef,
  snsImgRef,
  onSuggestClick,
  posterSrc,
  posterTitle,
  posterSubtitle,
}: Props) {
  const isSNS = displayMode === "sns";
  const posterSrcToUse = posterSrc ?? posterImage;

  return (
    <S.PosterColumn>
      <S.CanvasArea w={canvasW} h={canvasH} square={isSNS}>
        {!isSNS ? (
          <>
            {posterState === "ready" && (
              <S.PosterImage
                ref={posterImgRef}
                src={posterSrcToUse}
                alt="포스터 미리보기"
              />
            )}
            {posterState === "locked" && (
              <S.LockOverlay>
                <S.LockMessage>질문에 답변을 완료해주세요!</S.LockMessage>
              </S.LockOverlay>
            )}
            {posterState === "loading" && <S.SkeletonOverlay />}
          </>
        ) : (
          <S.InstagramFeed>
            <S.FeedHeader>
              <S.UserInfo>
                <S.UserAvatar>👤</S.UserAvatar>
                <S.UserNameText>UserName</S.UserNameText>
              </S.UserInfo>
              <S.MoreButton>⋮</S.MoreButton>
            </S.FeedHeader>

            <S.FeedImageContainer>
              <S.FeedImage
                ref={snsImgRef}
                src={posterSrcToUse}
                alt="SNS 미리보기"
              />
            </S.FeedImageContainer>

            <S.ActionBar>
              <S.ActionLeft>
                <S.ActionIcon>♡</S.ActionIcon>
                <S.ActionIcon>💬</S.ActionIcon>
                <S.ActionIcon>✈</S.ActionIcon>
              </S.ActionLeft>
            </S.ActionBar>

            {(posterTitle || posterSubtitle) && (
              <S.Caption>
                <S.CaptionUser>UserName</S.CaptionUser>
                {posterTitle && <S.CaptionTitle>{posterTitle}</S.CaptionTitle>}
                {posterSubtitle && <S.CaptionSubtitle>{posterSubtitle}</S.CaptionSubtitle>}
              </S.Caption>
            )}
          </S.InstagramFeed>
        )}
        <S.SuggestionButton
          type="button"
          onClick={onSuggestClick}
          aria-label={isSNS ? "SNS 업로드" : "문구 추천"}
        >
          <span>{isSNS ? "SNS 업로드" : "문구 추천"}</span>
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M17 7.33404L1 7.33404L17 7.33404ZM10.1429 13.6681L17 7.33404L10.1429 13.6681ZM10.1429 1L17 7.33404L10.1429 1Z"
              fill="white"
            />
            <path
              d="M17 7.33404L0.999999 7.33404M17 7.33404L10.1429 13.6681M17 7.33404L10.1429 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.SuggestionButton>
      </S.CanvasArea>
    </S.PosterColumn>
  );
}

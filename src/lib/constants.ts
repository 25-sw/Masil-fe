export const QUESTIONS = [
  "가게나 브랜드 이름이 무엇인가요?",
  "홍보할 제품이나 서비스는 무엇인가요?",
  "이번 포스터의 목적은 무엇인가요? (예: 이벤트, 신제품, 할인)",
  "포스터를 볼 주 대상 고객은 누구인가요? (예: 연령대, 성별, 관심사)",
] as const;

export const SIZE_PRESETS: Record<
  string,
  { label: string; w: number; h: number }
> = {
  poster: { label: "포스터(기본)", w: 465, h: 657 },
  square: { label: "1:1", w: 657, h: 657 },
  "4x5": { label: "4:5", w: 526, h: 657 },
};

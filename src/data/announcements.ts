import type { Announcement } from '@/types/announcement';
import { Region, RelatedInstitution, IndustryType, SupportTarget } from '@/types/announcement';

const titles = [
  '광주투자액셀러레이팅(G-IN Next Level) 11기 참여 모집',
  '소상공인 디지털 전환 지원사업',
  '청년창업 육성 프로그램',
  '소상공인 혁신성장 지원금',
  '지역특화 창업 지원사업',
  '전통시장 활성화 지원금',
  '외식업 경쟁력 강화 사업',
  '스마트 상점 구축 지원',
  '온라인 판로개척 지원사업',
  '소상공인 시설개선 지원금',
  '1인 창업 지원사업',
  '재창업 패키지 지원',
  '여성기업 특화 지원사업',
  '장애인 창업 지원금',
  '귀농귀촌 창업 지원',
  '프랜차이즈 가맹점 지원',
  '지역상권 활성화 사업',
  '공유경제 비즈니스 지원',
  '친환경 녹색가게 지원',
  '배달플랫폼 수수료 지원',
  '스마트공장 구축 지원사업',
  '소상공인 경영개선 컨설팅',
  '글로벌 수출 지원금',
  '문화예술 창업 지원',
  '사회적기업 육성사업',
  '예비창업자 교육 프로그램',
  '소상공인 마케팅 지원',
  '지식재산권 출원 지원',
  '기술혁신 R&D 지원금',
  '소상공인 공동구매 지원',
  '온라인쇼핑몰 구축 지원',
  '소상공인 임대료 지원',
  '노후상가 리모델링 지원',
  '스타트업 육성 프로그램',
  '중소기업 정책자금 융자',
  '소상공인 세무회계 지원',
  '배송시스템 구축 지원',
  '소상공인 보증서 발급 지원',
  '해외진출 기업 육성사업',
  '소상공인 자금 긴급 지원',
  '청년 일자리 창출 지원금',
  '소상공인 안전설비 지원',
  '지역맞춤형 창업 지원',
  '소상공인 홍보마케팅 지원',
  '전통시장 현대화 사업',
  '소상공인 디자인 개발 지원',
  '골목상권 활성화 지원금',
  '소상공인 법률자문 지원',
  '중소기업 해외마케팅 지원',
  '소상공인 에너지 절감 지원',
];

export const mockAnnouncements: Announcement[] = Array.from({ length: 100 }, (_, i) => {
  const startMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const startDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  const endMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const endDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');

  const organizations = Object.values(RelatedInstitution);
  const regions = Object.values(Region);
  const industries = Object.values(IndustryType);
  const supportTargets = Object.values(SupportTarget);

  const org = organizations[Math.floor(Math.random() * organizations.length)];
  const region = regions[Math.floor(Math.random() * regions.length)];
  const ind = industries[Math.floor(Math.random() * industries.length)];

  const numCategories = Math.floor(Math.random() * 3) + 1;
  const categories: SupportTarget[] = [];
  for (let j = 0; j < numCategories; j++) {
    const target = supportTargets[Math.floor(Math.random() * supportTargets.length)];
    if (!categories.includes(target)) {
      categories.push(target);
    }
  }

  return {
    id: i + 1,
    title: `2025년 ${titles[i % titles.length]}`,
    period: `접수 기간 2025.${startMonth}.${startDay}.~2025.${endMonth}.${endDay}.`,
    organization: org,
    region: region,
    industry: ind,
    categories: categories,
  };
});

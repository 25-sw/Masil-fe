export const Region = {
  SEOUL: '서울',
  BUSAN: '부산',
  DAEGU: '대구',
  INCHEON: '인천',
  GWANGJU: '광주',
  DAEJEON: '대전',
  ULSAN: '울산',
  SEJONG: '세종',
  GYEONGGI: '경기',
  GANGWON: '강원',
  CHUNGBUK: '충북',
  CHUNGNAM: '충남',
  JEONBUK: '전북',
  JEONNAM: '전남',
  GYEONGBUK: '경북',
  GYEONGNAM: '경남',
  JEJU: '제주',
} as const;

export type Region = typeof Region[keyof typeof Region];

export const SupportTarget = {
  SMALL_BUSINESS_OWNER: '소상공인',
  SMALL_ENTERPRISE: '소공인',
  TRADITIONAL_MARKET: '전통시장',
  PROSPECTIVE_ENTREPRENEUR: '예비창업자',
  CLOSED_SMALL_BUSINESS_OWNER: '소상공인(폐업)',
  ETC: '기타',
} as const;

export type SupportTarget = typeof SupportTarget[keyof typeof SupportTarget];

export const RelatedInstitution = {
  EMPLOYMENT_LABOR: '고용노동부',
  SCIENCE_TECH: '과기부',
  LAND_TRANSPORT: '국토교통부',
  FINANCIAL_INSTITUTION: '금융기관',
  SMES_MINISTRY: '중기부',
  OTHER: '그 외 기관',
} as const;

export type RelatedInstitution = typeof RelatedInstitution[keyof typeof RelatedInstitution];

export const IndustryType = {
  AGRICULTURE_FORESTRY_FISHERIES: '농업, 임업 및 어업',
  MINING: '광업',
  MANUFACTURING: '제조업',
  ELECTRICITY_GAS_AIR_CONDITIONING: '전기, 가스, 증기 및 공기 조절 공급업',
  WATER_WASTE_MANAGEMENT: '수도, 하수 및 폐기물 처리, 원료 재생업',
  CONSTRUCTION: '건설업',
  WHOLESALE_RETAIL: '도매 및 소매업',
  TRANSPORT_STORAGE: '운수 및 창고업',
  ACCOMMODATION_FOOD: '숙박 및 음식점업',
  INFORMATION_COMMUNICATION: '정보통신업',
  FINANCE_INSURANCE: '금융 및 보험업',
  REAL_ESTATE: '부동산업',
  PROFESSIONAL_SCIENTIFIC_TECHNICAL: '전문, 과학 및 기술 서비스업',
  FACILITY_MANAGEMENT_RENTAL: '사업시설 관리, 사업 지원 및 임대 서비스업',
  PUBLIC_ADMIN_SOCIAL_SECURITY: '공공 행정, 국방 및 사회보장 행정',
  EDUCATION: '교육 서비스업',
  HEALTH_SOCIAL_WORK: '보건업 및 사회복지 서비스업',
  ARTS_SPORTS_RECREATION: '예술, 스포츠 및 여가관련 서비스업',
  ASSOCIATION_REPAIR_OTHER_SERVICES: '협회 및 단체, 수리 및 기타 개인 서비스업',
  HOUSEHOLD_EMPLOYMENT_PRODUCTION: '가구내 고용활동 및 달리 분류되지 않은 자가소비 생산활동',
  INTERNATIONAL_ORGANIZATION: '국제 및 외국기관',
} as const;

export type IndustryType = typeof IndustryType[keyof typeof IndustryType];

export interface Announcement {
  id: number;
  title: string;
  period: string;
  organization: RelatedInstitution;
  region: Region;
  industry: IndustryType;
  categories: SupportTarget[];
}

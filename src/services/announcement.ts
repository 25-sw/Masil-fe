import { customAxios } from '@/lib/customAxios';

export interface AnnouncementResponse {
  pbancSn: number | null;
  pbancId: string | null;
  pbancGubun: string;
  pbancNm: string;
  rcrtTypeCdNm: string;
  aplyPd: string;
  bizType: string;
  regionNm: string | null;
  departNm: string;
  regDt: string;
  aplyPsbltySe: string;
  hstgNm: string | null;
}

export interface AnnouncementParams {
  industryList?: string[];
  regionList?: string[];
  relatedInstitutionList?: string[];
  supportTargetList?: string[];
}

export async function getAnnouncements(params: AnnouncementParams) {
  const queryParams = new URLSearchParams();
  
  if (params.industryList?.length) {
    params.industryList.forEach(item => queryParams.append('industryList', item));
  }
  if (params.regionList?.length) {
    params.regionList.forEach(item => queryParams.append('regionList', item));
  }
  if (params.relatedInstitutionList?.length) {
    params.relatedInstitutionList.forEach(item => queryParams.append('relatedInstitutionList', item));
  }
  if (params.supportTargetList?.length) {
    params.supportTargetList.forEach(item => queryParams.append('supportTargetList', item));
  }

  const response = await customAxios.get<AnnouncementResponse[]>(
    `/notifications?${queryParams.toString()}`
  );
  return response.data;
}

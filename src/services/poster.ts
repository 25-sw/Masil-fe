import { customAxios } from '@/lib/customAxios';

export interface GeneratePosterRequest {
  storeName: string;
  serviceName: string;
  category: string;
  targetAudience: string;
}

export interface GeneratePosterResponse {
  title: string;
  subtitle: string;
  url: string;
}

export async function generatePoster(data: GeneratePosterRequest) {
  const response = await customAxios.post<GeneratePosterResponse>(
    '/posters',
    data,
    {
      timeout: 60000,
    }
  );
  return response.data;
}

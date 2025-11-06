import { useMutation } from '@tanstack/react-query';
import { generatePoster, type GeneratePosterRequest } from '@/services/poster';

export const useGeneratePoster = () => {
  return useMutation({
    mutationFn: (data: GeneratePosterRequest) => generatePoster(data),
    retry: false,
  });
};

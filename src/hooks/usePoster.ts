import { useMutation, useQuery } from '@tanstack/react-query';
import { generatePoster, getMyPosters, type GeneratePosterRequest } from '@/services/poster';

export const useGeneratePoster = () => {
  return useMutation({
    mutationFn: (data: GeneratePosterRequest) => generatePoster(data),
    retry: false,
  });
};

export const useMyPosters = () => {
  return useQuery({
    queryKey: ['myPosters'],
    queryFn: getMyPosters,
  });
};

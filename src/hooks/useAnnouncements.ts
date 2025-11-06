import { useQuery } from '@tanstack/react-query';
import { getAnnouncements, type AnnouncementParams } from '@/services/announcement';

export const useAnnouncements = (params: AnnouncementParams) => {
  return useQuery({
    queryKey: ['announcements', params],
    queryFn: () => getAnnouncements(params),
  });
};

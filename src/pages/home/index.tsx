import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useAnnouncements } from '@/hooks/useAnnouncements';

export default function Home() {
  const userName = '유정';
  const navigate = useNavigate();

  const { data: announcements = [], isLoading } = useAnnouncements({});

  const posters = [
    '/posters/poster1.png',
    '/posters/poster2.png',
    '/posters/poster3.png',
  ];

  const moveToCreatePoster = () => {
    navigate('/create');
  };

  const recentAnnouncements = announcements.slice(0, 4);

  return (
    <S.Wrapper>
      <S.HeroSection>
        <S.HeroBackground>
          <img src="/backgrounds/mainBg.png" alt="" />
        </S.HeroBackground>
        <S.HeroContent>
          <S.HeroTitle>
            {userName}님의 가게, <span>AI가 예쁘게 제작해 드릴게요</span>
          </S.HeroTitle>
          <S.HeroSubtitle>가게의 이야기를 담아 포스터로 제작해드려요</S.HeroSubtitle>
          <S.CreateButton onClick={moveToCreatePoster}>
            포스터 제작하기
            <img src="/arrows/arrow-right.svg" alt="" />
          </S.CreateButton>
        </S.HeroContent>
      </S.HeroSection>

      <S.ContentSection>
        <S.AnnouncementSection>
          <S.SectionTitle>지금 어떤 혜택을 받을 수 있는지 알아보세요!</S.SectionTitle>
          {isLoading ? (
            <S.AnnouncementGrid>
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                공고를 불러오는 중...
              </div>
            </S.AnnouncementGrid>
          ) : recentAnnouncements.length === 0 ? (
            <S.AnnouncementGrid>
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                등록된 공고가 없습니다.
              </div>
            </S.AnnouncementGrid>
          ) : (
            <S.AnnouncementGrid>
              {recentAnnouncements.map((announcement) => (
                <S.AnnouncementCardWrapper key={announcement.pbancSn}>
                  <S.AnnouncementTitle>{announcement.pbancNm}</S.AnnouncementTitle>
                  <S.AnnouncementPeriod>{announcement.aplyPd}</S.AnnouncementPeriod>
                  <S.Categories>
                    {announcement.rcrtTypeCdNm?.split('/').map((category, index) => (
                      <S.Category key={index}>{category.trim()}</S.Category>
                    ))}
                  </S.Categories>
                </S.AnnouncementCardWrapper>
              ))}
            </S.AnnouncementGrid>
          )}
        </S.AnnouncementSection>

        <S.PosterSection>
          <S.PosterSectionTitle>내 포스터</S.PosterSectionTitle>
          <S.PosterGrid>
            {posters.map((poster, index) => (
              <S.PosterCard key={index}>
                <img src={poster} alt={`포스터 ${index + 1}`} />
              </S.PosterCard>
            ))}
            <S.AddPosterCard onClick={moveToCreatePoster}>
              <S.PlusIcon>+</S.PlusIcon>
            </S.AddPosterCard>
          </S.PosterGrid>
        </S.PosterSection>
      </S.ContentSection>
    </S.Wrapper>
  );
}
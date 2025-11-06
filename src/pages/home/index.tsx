import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface Announcement {
  id: number;
  title: string;
  period: string;
  categories: string[];
}

export default function Home() {
  const userName = '유정';
  const navigate = useNavigate();

  const recentAnnouncements: Announcement[] = [
    {
      id: 1,
      title: '2025년 광주투자액셀러레이팅(G-IN Next Level) 11기 참여 모집',
      period: '접수 기간 2025.04.02.~2025.04.06.',
      categories: ['소상공인', '예비창업자'],
    },
    {
      id: 2,
      title: '2025년 광주투자액셀러레이팅(G-IN Next Level) 11기 참여 모집',
      period: '접수 기간 2025.04.02.~2025.04.06.',
      categories: ['소상공인', '예비창업자'],
    },
    {
      id: 3,
      title: '2025년 광주투자액셀러레이팅(G-IN Next Level) 11기 참여 모집',
      period: '접수 기간 2025.04.02.~2025.04.06.',
      categories: ['소상공인', '예비창업자'],
    },
    {
      id: 4,
      title: '2025년 광주투자액셀러레이팅(G-IN Next Level) 11기 참여 모집',
      period: '접수 기간 2025.04.02.~2025.04.06.',
      categories: ['소상공인', '예비창업자'],
    },
  ];

  const posters = [
    '/posters/poster1.png',
    '/posters/poster2.png',
    '/posters/poster3.png',
  ];

  const moveToCreatePoster = () => {
    navigate('/create');
  }

  return (
    <S.Wrapper>
      <S.HeroSection>
        <S.HeroBackground>
          <img src="/backgrounds/mainBackground.svg" alt="" />
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
          <S.AnnouncementGrid>
            {recentAnnouncements.map((announcement) => (
              <S.AnnouncementCardWrapper key={announcement.id}>
                <S.AnnouncementTitle>{announcement.title}</S.AnnouncementTitle>
                <S.AnnouncementPeriod>{announcement.period}</S.AnnouncementPeriod>
                <S.Categories>
                  {announcement.categories.map((category) => (
                    <S.Category key={category}>{category}</S.Category>
                  ))}
                </S.Categories>
              </S.AnnouncementCardWrapper>
            ))}
          </S.AnnouncementGrid>
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
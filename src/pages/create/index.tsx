import * as S from './style';

export default function Create() {
  const posters = [
    '/posters/poster1.png',
    '/posters/poster2.png',
    '/posters/poster3.png',
    '/posters/poster4.png',
    '/posters/poster5.png',
    '/posters/poster6.png',
    '/posters/poster7.png',
  ];

  const handleNext = () => {
    // 여기에 코드 짜면 될 듯
  }

  return (
    <S.Wrapper>
      <S.Title>AI를 사용해 새로운 홍보 포스터 만들기</S.Title>

      <S.PosterGrid>
        <S.AddPosterCard onClick={handleNext}>
          <S.PlusIcon>+</S.PlusIcon>
        </S.AddPosterCard>

        {posters.map((poster, index) => (
          <S.PosterCard key={index}>
            <img src={poster} alt={`포스터 ${index + 1}`} />
          </S.PosterCard>
        ))}
      </S.PosterGrid>
    </S.Wrapper>
  );
}

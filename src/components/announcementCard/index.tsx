import * as S from './style';

interface AnnouncementCardProps {
  pbancSn?: number | null;
  pbancId?: string | null;
  title?: string;
  period?: string;
  categories?: string[];
}

export default function AnnouncementCard({
  pbancSn,
  pbancId,
  title = '2025년 광주투자액셀러레이팅(G-IN Next Level) 11기 참여 모집',
  period = '접수 기간 2025.04.02.~2025.04.06.',
  categories = ['소상공인', '예비창업자']
}: AnnouncementCardProps) {
  const handleClick = () => {
    if (pbancSn) {
      window.open(`https://www.sbiz24.kr/#/pbanc/${pbancSn}`, '_blank');
    } else if (pbancId) {
      window.open(`https://www.sbiz24.kr/#/extldPbanc/${pbancId}`, '_blank');
    }
  };

  return (
    <S.CardContainer onClick={handleClick} clickable={!!(pbancSn || pbancId)}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDate>{period}</S.CardDate>
      <S.Categories>
        {categories.map((category, index) => (
          <S.Category key={index}>
            <S.greenPerson src="/greenPerson.svg" alt="Green Person" />
            {category}
          </S.Category>
        ))}
      </S.Categories>
    </S.CardContainer>
  );
}
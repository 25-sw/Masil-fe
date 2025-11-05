import * as S from './style'

export default function AnnouncementCard() {
  const title = '2025년 광주투자액셀러레이팅(G-IN Next Level) 11기 참여 모집';
  const date = '접수 기간 2025.04.02.~2025.04.06.';
  const categories = ['소상공인', '예비창업자'];
  return (
    <S.CardContainer>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDate>{date}</S.CardDate>
      <S.Categories>
        {categories.map((category, index) => (
          <S.Category key={index}>
            <S.greenPerson src="/greenPerson.svg" alt="Green Person" />
            <div>{category}</div>
          </S.Category>
        ))}
      </S.Categories>
    </S.CardContainer>
  )
}
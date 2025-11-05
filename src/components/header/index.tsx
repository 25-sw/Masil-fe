import * as S from './style'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const isLoggedIn = true;
  const name = '홍길동';
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate('/');
  }

  return (
    <S.HeaderContainer>
      <S.Logo src="/logo.svg" alt="Logo" onClick={moveToHome} />
      <S.NavList>
        <S.NavItem href="/create">AI 제작</S.NavItem>
        <S.NavItem href="/announcement">공고</S.NavItem>
        <S.NavItem href="/my">내 가게</S.NavItem>
      </S.NavList>
      {isLoggedIn ? (
        <S.UserWrapper>
          <S.UserName>안녕하세요. <span>{name}</span>님</S.UserName>
          <S.UserAvatar src="/user-avatar.svg" alt="User Avatar" />
        </S.UserWrapper>
      ) : (
        <S.LoginButton>로그인</S.LoginButton>
      )}
    </S.HeaderContainer>
  )
}
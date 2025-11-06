import { useState } from 'react';
import { toast } from 'react-toastify';
import * as S from './style';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import LoginModal from '@/components/loginModal';
import SignupModal from '@/components/signupModal';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const { isLoggedIn, accountId, logout } = useAuthStore();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleLogout = () => {
    logout();
    toast.info('로그아웃되었습니다.');
    navigate('/');
  };

  const switchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const switchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <S.HeaderContainer>
      <S.Logo src="/logo.svg" alt="Logo" onClick={() => navigate('/')} />
      <S.NavList>
        <S.NavItem onClick={() => navigate('/create')} isActive={isActive('/create')}>
          AI 제작
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/announcement')} isActive={isActive('/announcement')}>
          공고
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/my')} isActive={isActive('/my')}>
          내 가게
        </S.NavItem>
      </S.NavList>
      {isLoggedIn ? (
        <S.UserWrapper>
          <S.UserName>
            안녕하세요. <span>{accountId}</span>님
          </S.UserName>
          <S.UserAvatar src="/user-avatar.svg" alt="User Avatar" />
          <S.LoginButton onClick={handleLogout}>로그아웃</S.LoginButton>
        </S.UserWrapper>
      ) : (
        <S.LoginButton onClick={() => setShowLoginModal(true)}>로그인</S.LoginButton>
      )}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} onSwitchToSignup={switchToSignup} />
      )}
      {showSignupModal && (
        <SignupModal onClose={() => setShowSignupModal(false)} onSwitchToLogin={switchToLogin} />
      )}
    </S.HeaderContainer>
  );
}
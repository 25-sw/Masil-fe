import { useState } from 'react';
import { toast } from 'react-toastify';
import * as S from './style';
import { useLogin } from '@/hooks/useAuth';
import { useAuthStore } from '@/store/authStore';

interface LoginModalProps {
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export default function LoginModal({ onClose, onSwitchToSignup }: LoginModalProps) {
  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginMutation = useLogin();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!accountId || !password) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    loginMutation.mutate(
      { accountId, password },
      {
        onSuccess: (data) => {
          setAccessToken(data.accessToken);
          toast.success('로그인되었습니다!');
          onClose();
        },
        onError: (error: any) => {
          const errorMessage = error.response?.data?.message || '로그인에 실패했습니다.';
          toast.error(errorMessage);
          setError(errorMessage);
        },
      }
    );
  };

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.ModalTitle>로그인</S.ModalTitle>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            placeholder="아이디"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
          />
          <S.Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <S.Button type="submit" disabled={loginMutation.isPending}>
            {loginMutation.isPending ? '로그인 중...' : '로그인'}
          </S.Button>
        </S.Form>
        <S.SwitchText>
          계정이 없으신가요?{' '}
          <S.SwitchButton onClick={onSwitchToSignup}>회원가입</S.SwitchButton>
        </S.SwitchText>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
}

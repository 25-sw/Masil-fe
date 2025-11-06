import { useState } from 'react';
import { toast } from 'react-toastify';
import * as S from './style';
import { useSignup } from '@/hooks/useAuth';

interface SignupModalProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignupModal({ onClose, onSwitchToLogin }: SignupModalProps) {
  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const signupMutation = useSignup();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!accountId || !password || !passwordConfirm || !name) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    signupMutation.mutate(
      { accountId, password, name },
      {
        onSuccess: () => {
          toast.success('회원가입이 완료되었습니다! 로그인해주세요.');
          onSwitchToLogin();
        },
        onError: (error: any) => {
          const errorMessage = error.response?.data?.message || '회원가입에 실패했습니다.';
          toast.error(errorMessage);
          setError(errorMessage);
        },
      }
    );
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.Title>회원가입</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.InputGroup>
            <S.Label>아이디</S.Label>
            <S.Input
              type="text"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              placeholder="아이디를 입력하세요"
            />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>이름</S.Label>
            <S.Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요"
            />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
            />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>비밀번호 확인</S.Label>
            <S.Input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="비밀번호를 다시 입력하세요"
            />
          </S.InputGroup>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <S.Button type="submit" disabled={signupMutation.isPending}>
            {signupMutation.isPending ? '회원가입 중...' : '회원가입'}
          </S.Button>
        </S.Form>
        <S.SwitchText>
          이미 계정이 있으신가요?{' '}
          <S.SwitchButton onClick={onSwitchToLogin}>로그인</S.SwitchButton>
        </S.SwitchText>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
}

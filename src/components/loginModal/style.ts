import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  width: 400px;
  max-width: 90%;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 30px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #0c8948;
  }

  &::placeholder {
    color: #b9b9b9;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: #0c8948;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background: #0a793f;
  }

  &:disabled {
    background: #d7d7d7;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 13px;
  margin-top: -8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: #9b9b9b;
  cursor: pointer;
  padding: 4px 8px;

  &:hover {
    color: #3e3e3e;
  }
`;

export const SwitchText = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #666;
`;

export const SwitchButton = styled.span`
  color: #0c8948;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

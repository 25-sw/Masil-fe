import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  width: 400px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #333;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0c8948;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #0c8948;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #0a793f;
  }

  &:disabled {
    background-color: #d7d7d7;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 13px;
  margin: 0;
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

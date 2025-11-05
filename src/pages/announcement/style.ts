import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 91px 100px 60px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 1.2;
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const FilterDropdown = styled.div`
  position: relative;
`;

export const FilterButton = styled.button`
  background: white;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #b9b9b9;
  cursor: pointer;

  span {
    font-size: 14px;
  }

  &:hover {
    border-color: #0c8948;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  z-index: 10;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  color: #3e3e3e;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
    color: #0c8948;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #cfcfcf;
  margin: 30px 0;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 28px 21px;
  margin-bottom: 60px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const PageArrow = styled.button<{ disabled?: boolean }>`
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? '#d7d7d7' : '#9b9b9b')};
  font-size: 14px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  
  &:hover {
    color: ${({ disabled }) => (disabled ? '#d7d7d7' : '#3e3e3e')};
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const PageNumber = styled.button<{ active?: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? '500' : '400')};
  color: ${({ active }) => (active ? '#3e3e3e' : '#9b9b9b')};
  position: relative;

  ${({ active }) =>
    active &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: -4px;
      right: -4px;
      height: 1.5px;
      background: #3e3e3e;
    }
  `}

  &:hover {
    color: #3e3e3e;
  }
`;
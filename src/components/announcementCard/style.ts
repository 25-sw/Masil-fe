import styled from '@emotion/styled';

export const CardContainer = styled.div`
  border: 2px solid #F3F4F6;
  border-radius: 10px;
  padding: 16px;
  max-width: 300px;
  width: max-content;
`;

export const CardTitle = styled.h3`
  margin-bottom: 8px;
`;

export const CardDate = styled.p`
  font-size: 16px;
  color: #555;
`;

export const Categories = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 1rem;
`;

export const Category = styled.span`
  background-color: #F0F0F0;
  border-radius: 10px;
  padding: 0.5rem 0.7rem;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const greenPerson = styled.img`
  width: 24px;
  height: 24px;
`;
import styled from '@emotion/styled';

export const CardContainer = styled.div`
  border: 2px solid #F3F4F6;
  border-radius: 10px;
  padding: 15px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
`;

export const CardTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #3e3e3e;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardDate = styled.p`
  font-size: 12px;
  margin: 8px 0;
`;

export const Categories = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Category = styled.span`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 5px 8px;
  font-size: 10px;
  color: #000;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const greenPerson = styled.img`
  width: 10px;
  height: 10px;
`;
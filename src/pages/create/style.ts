import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 91px 100px 60px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #000;
`;

export const PosterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 224px);
  gap: 60px;
  margin-bottom: 24px;
`;

export const PosterCard = styled.div`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const AddPosterCard = styled.div`
  border: 2px solid #b9b9b9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #0c8948;
    transform: translateY(-2px);
  }
`;

export const PlusIcon = styled.div`
  font-size: 100px;
  color: #0c8948;
  font-weight: 500;
  font-family: 'SF Pro';
`;

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  background: white;
`;

export const HeroSection = styled.div`
  width: 100%;
  background: linear-gradient(to right, #09ac2c, #03560e);
  position: relative;
  overflow: hidden;
`;

export const HeroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  padding: 3rem 4rem;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-size: 35px;
  font-weight: 700;
  color: white;
  line-height: 1.4;

  span {
    color: white;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: #ececec;
  line-height: 1.4;
  letter-spacing: -0.1px;
  margin-bottom: 30px;
`;

export const CreateButton = styled.button`
  width: 200px;
  height: 43px;
  border: 2px solid white;
  border-radius: 40px;
  background: transparent;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  img {
    width: 23px;
    height: 23px;
  }
`;

export const ContentSection = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 100px;
`;

export const SectionTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  color: #000;
  margin-bottom: 30px;
`;

export const AnnouncementSection = styled.div`
  padding: 122px 0 60px;
`;

export const AnnouncementGrid = styled.div`
  display: flex;
  gap: 21px;
  overflow-x: auto;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d7d7d7;
    border-radius: 3px;
  }
`;

export const AnnouncementCardWrapper = styled.div`
  width: 250px;
  height: 140px;
  background: #f4f4f4;
  border-radius: 10px;
  padding: 15px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const AnnouncementTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #3e3e3e;
  line-height: 1.4;
  letter-spacing: -0.056px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
`;

export const AnnouncementPeriod = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #0c8948;
  line-height: 1.4;
  letter-spacing: -0.048px;
  margin-bottom: 8px;
`;

export const Categories = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;

export const Category = styled.span`
  background: white;
  color: #084a28;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 100px;
  height: 25px;
  display: flex;
  align-items: center;
  line-height: 1.4;
  letter-spacing: -0.04px;
`;

export const PosterSection = styled.div`
  padding: 0 0 60px;
`;

export const PosterSectionTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
  margin-bottom: 30px;
`;

export const PosterGrid = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

export const PosterCard = styled.div`
  width: 224px;
  height: 312px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AddPosterCard = styled.div`
  width: 224px;
  height: 312px;
  border: 2px solid #b9b9b9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
  flex-shrink: 0;

  &:hover {
    border-color: #0c8948;
    transform: translateY(-4px);
  }
`;

export const PlusIcon = styled.div`
  font-size: 100px;
  color: #0c8948;
  font-weight: 500;
  line-height: 1;
`;

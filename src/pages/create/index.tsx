import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useMyPosters } from "@/hooks/usePoster";

export default function Create() {
  const navigate = useNavigate();
  const { data: myPosters = [] } = useMyPosters();

  const handleNext = () => {
    navigate("/createPoster");
  };

  const handleSelectPoster = (posterSrc: string) => {
    navigate("/createPoster", { state: { posterSrc } });
  };

  return (
    <S.Wrapper>
      <S.Title>AI를 사용해 새로운 홍보 포스터 만들기</S.Title>

      <S.PosterGrid>
        <S.AddPosterCard onClick={handleNext}>
          <S.PlusIcon>+</S.PlusIcon>
        </S.AddPosterCard>

        {myPosters.map((poster) => (
          <S.PosterCard
            key={poster.id}
            onClick={() => handleSelectPoster(poster.fileName)}
            style={{ cursor: "pointer" }}
          >
            <img src={poster.fileName} alt={`포스터 ${poster.id}`} />
          </S.PosterCard>
        ))}
      </S.PosterGrid>
    </S.Wrapper>
  );
}

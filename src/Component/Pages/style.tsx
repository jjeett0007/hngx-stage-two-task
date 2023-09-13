import styled from "styled-components";

export const Wrappers = styled.div`
  display: flex;
`;

export const SideNavigation = styled.div`
  width: 280px;
  height: 89vh;
  border: 1px solid black;
  border-radius: 0px 40px 40px 0px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 728px) {
    display: none;
  }
`;

export const LogoArea = styled.div`
  width: 100%;
  height: 5vh;
  border: 1px solid black;
`;

export const NavArea = styled.div`
  width: 100%;
  height: 30vh;
  border: 1px solid black;
`;

export const EarnArea = styled.div`
  width: 100%;
  height: 30vh;
  border: 1px solid black;
`;

export const LogOutArea = styled.div`
  width: 100%;
  height: 5vh;
  border: 1px solid black;
`;

//

export const MovieWrapper = styled.div`
  width: 100%;
  height: 86vh;
  border: 1px solid red;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  overflow: scroll;
`;

export const ScrollWrapper = styled.div`
  width: 100%;
`;

export const YoutubePlay = styled.div`
  width: 95%;
  border-radius: 10px;
  border: 1px solid yellow;
  height: 450px;
  margin-bottom: 30px;
`;

export const MovieInfo = styled.div`
  width: 95%;
  height: 350px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MovieInfoTitle = styled.div`
  width: 62%;
  height: 100%;
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieInfoTitleTwo = styled.div`
  width: 35%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleHeader = styled.div`
  width: 100%;
  height: 35px;
  border: 1px solid red;
`;

export const TitleDescription = styled.div`
  width: 100%;
  height: 90px;
  border: 1px solid red;
`;

export const TitleActor = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid red;
`;

export const TitleRated = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid red;
`;

export const RatedShowTime = styled.div`
  width: 100%;
  height: 37%;
  border: 1px solid black;
`;

export const OtherMovies = styled.div`
  width: 100%;
  height: 58%;
  border: 1px solid black;
`;

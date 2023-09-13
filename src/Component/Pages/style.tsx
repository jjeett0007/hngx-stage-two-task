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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MovieInfoTitle = styled.div`
  width: 62%;
  height: 100%;
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
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 18px;
      font-weight: 700;
    }
  }

  span {
    width: 80px;
    height: 100%;
    border: 1px solid #f8e7eb;
    border-radius: 20px;
    color: #b91c1c;
    font-family: Poppins;
    font-size: 15px;
  }
`;

export const TitleDescription = styled.div`
  width: 100%;
  height: 90px;

  p {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const TitleActor = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;

    p {
      color: black;
      font-size: 18px;
      font-weight: 600;
      margin-right: 10px;
    }

    span {
      color: #b91c1c;
      font-weight: 600;
      font-size: 18px;
    }
  }
`;

export const TitleRated = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid red;

  div {
    width: 35%;
    height: 100%;
    border-radius: 15px;
    background-color: #b91c1c;
  }
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

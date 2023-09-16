import styled from "styled-components";
import LogoImage from "../../asset/Untitled.png";

export const Wrappers = styled.div`
  display: flex;

  @media (max-width: 728px) {
    flex-direction: column-reverse;
  }
`;

export const SideNavigation = styled.div`
  width: 210px;
  height: 89vh;
  /* border: 1px solid black; */
  border-radius: 0px 40px 40px 0px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 728px) {
    /* position: absolute; */
    flex-direction: row;
    width: 100%;
    height: auto;
    padding: 2px;
  }
`;

export const LogoArea = styled.div`
  width: auto;
  height: 5vh;
  /* border: 1px solid black; */
  display: flex;
  gap: 10px;
  margin-left: 10px;

  img {
    width: 5vh;
    height: 5vh;
  }

  div {
    width: auto;
    height: auto;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 728px) {
      display: none;
    }

    p {
      color: #333;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
    }
  }
`;

export const NavArea = styled.div`
  width: auto;
  height: 40vh;

  @media (max-width: 728px) {
    display: flex;
    flex-direction: row;
    height: auto;
    margin-right: 20px;
  }

  div {
    width: auto;
    height: auto;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  img {
    width: 6vh;
    height: 6vh;
  }

  p {
    color: #666;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;

    @media (max-width: 728px) {
      display: none;
    }
  }
`;

export const EarnArea = styled.div`
  width: 100%;
  height: 30vh;
`;

export const LogOutArea = styled.div`
  width: 100%;
  height: 5vh;

  @media (max-width: 728px) {
    display: none;
  }
`;

//

export const MovieWrapper = styled.div`
  width: 100%;
  height: 86vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  @media (max-width: 728px) {
    margin-top: 20px;
    padding: 5px;
  }
`;

export const ScrollWrapper = styled.div`
  width: 100%;
`;

export const ScrollBbar = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  gap: 20px;

  @media (max-width: 728px) {
    flex-direction: column;
  }
`;

export const YoutubePlay = styled.div`
  width: 95%;
  border-radius: 10px;
  /* border: 1px solid yellow; */
  height: 450px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 728px) {
    height: 250px;
  }

  iframe {
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export const MovieInfo = styled.div`
  width: 95%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 728px) {
    width: 98%;
    height: 60vh;
    /* border: 2px solid green; */
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    gap: 20px;
  }
`;

export const MovieInfoTitle = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 3px solid green; */

  @media (max-width: 728px) {
    width: 98%;
    height: auto;
    /* border: 3px solid black; */
  }
`;

export const MovieInfoTitleTwo = styled.div`
  width: 30%;
  height: 37vh;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 728px) {
    width: 100%;
    height: auto;
  }
`;

export const TitleHeader = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 10px;
  /* border: 2px solid red; */

  @media (max-width: 728px) {
    display: none;
  }

  div {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    /* border: 1px solid black; */

    @media (max-width: 728px) {
      flex-direction: column;
      height: auto;
    }

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

    @media (max-width: 728px) {
      height: auto;
      padding: 20px;
    }
  }
`;

export const MobileTitleDisplay = styled.div`
  display: none;
  @media (max-width: 728px) {
    display: block;
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;

    div {
      width: auto;
      height: 20px;
      display: flex;
      align-items: center;
      gap: 20px;

      p {
        font-size: 16px;
        font-weight: 700;
      }

      span {
        font-size: 16px;
        font-weight: 700;
        color: red;
      }
    }
  }
`;

export const TitleDescription = styled.div`
  width: 100%;
  height: auto;

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
      margin-right: 10px;
    }
  }
`;

export const TitleRated = styled.div`
  width: 100%;
  height: 40px;
  /* border: 1px solid red; */

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
  /* border: 1px solid black; */
`;

export const OtherMovies = styled.div`
  width: 100%;
  height: 58%;
  border: 1px solid black;
`;

export const StarRated = styled.div`
  width: auto;
  height: 30px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;

  span {
    font-weight: 700;
    font-size: 18px;
  }

  p {
    font-size: 18px;
    color: #9a969692;
    font-weight: 700;
  }

  div {
    width: 20px;
    height: 20px;
    background-image: url(${LogoImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

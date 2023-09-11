import styled from "styled-components";
import LogoImage from "../../asset/movie.png";

export const MainWrapper = styled.div`
  width: auto;
  height: 87vh;

  @media (max-width: 728px) {
    height: 30vh;
  }
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  background-image: url("https://s3-alpha-sig.figma.com/img/154e/382f/b7e8be84d7248b8b9812172cad1cd0c9?Expires=1695600000&Signature=OsNLaMa8CnSNnQeUuaSqQc4ItYP-nbUj0fcZVpScVICd8NzZdIEz80MJBNhEju2IQOUMxTFuDw4FavRj8rGqkBK6uLeq0vJG~Y-EPhP~LInckDsnzuQ5Y2BdrMTWOqkPaFdDAPmQXSLpWteihqFaB2f2VQGC6Za5gHu7t3hq62C0X21qB-8H7osPvHdFmh0c-B881mmDx6JQCfpUQRzNHAjMxdvS~LrFQthLfxQb29n8J4z25KNx4cSOzRDCMXJaP0gpPcPRXMYrFdz-nbt~yFJLM37b1YLKasT2gd5K2x6nxGQWVPlwAafWCDzo3TzVihPSl0FiwjfkbBREka5jUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
`;

export const HeaderComp = styled.div`
  width: auto;
  height: 10vh;
  border: 2px solid black;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 728px) {
    height: 4vh;
    padding: 10px;
  }
`;

export const Logo = styled.div`
  width: 150px;
  height: 50px;
  background-image: url(${LogoImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 728px) {
    width: 80px;
  }
`;

export const SearchComp = styled.div`
  width: 500px;
  height: 30px;
  border: 2px solid white;
  border-radius: 10px;

  @media (max-width: 728px) {
    width: 150px;
  }
`;

export const HamburgerMenu = styled.div`
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-top: auto;
    margin-bottom: auto;
  }

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #be123c;
  }

  @media (max-width: 728px) {
    width: 80px;
    height: 30px;

    p {
      color: white;
      font-size: 10px;
      font-weight: 700;
    }

    div {
      width: 30px;
      height: 30px;
    }
  }
`;

export const SlideContent = styled.div`
  width: auto;
  height: 70vh;
  border: 2px solid black;
  margin-top: 20px;
  padding: 50px;
`;

export const ContentDetails = styled.div``;

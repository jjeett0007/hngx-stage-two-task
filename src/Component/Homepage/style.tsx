import styled from "styled-components";
import LogoImage from "../../asset/movie.png";

export const MainWrapper = styled.div`
  width: auto;
  height: 87vh;

  @media (max-width: 728px) {
    height: 35vh;
    border: 1px solid red;
  }
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://s3-alpha-sig.figma.com/img/154e/382f/b7e8be84d7248b8b9812172cad1cd0c9?Expires=1695600000&Signature=OsNLaMa8CnSNnQeUuaSqQc4ItYP-nbUj0fcZVpScVICd8NzZdIEz80MJBNhEju2IQOUMxTFuDw4FavRj8rGqkBK6uLeq0vJG~Y-EPhP~LInckDsnzuQ5Y2BdrMTWOqkPaFdDAPmQXSLpWteihqFaB2f2VQGC6Za5gHu7t3hq62C0X21qB-8H7osPvHdFmh0c-B881mmDx6JQCfpUQRzNHAjMxdvS~LrFQthLfxQb29n8J4z25KNx4cSOzRDCMXJaP0gpPcPRXMYrFdz-nbt~yFJLM37b1YLKasT2gd5K2x6nxGQWVPlwAafWCDzo3TzVihPSl0FiwjfkbBREka5jUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
`;

export const HeaderComp = styled.div`
  width: auto;
  height: 10vh;
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
  height: 60vh;
  margin-top: 20px;
  padding: 20px;
  padding-left: 100px;
  display: flex;
  align-items: center;

  @media (max-width: 728px) {
    padding: 2px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    height: 65%;
  }
`;

export const ContentDetails = styled.div`
  width: 320px;
  height: auto;
  padding: 10px;

  h1 {
    color: white;
    font-size: 50px;

    @media (max-width: 728px) {
      margin: auto;
      font-size: 20px;
    }
  }

  div {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;

    @media (max-width: 728px) {
      width: 80%;
    }

    span {
      color: white;
      margin-left: 20px;
    }

    div:first-child {
      width: 200px;

      @media (max-width: 728px) {
        width: 140px;
      }

      div {
        width: 80px;
        height: 100%;
        background-image: url("https://s3-alpha-sig.figma.com/img/a423/5182/5bf071206cd1f384cc337b8867ae5aeb?Expires=1695600000&Signature=GmjlYRtN7Bn0a000PlFfH7~PSPUqhjlmeVjeG78xahYPVsdYtx9OB4Xw~McOajU0VJdzWV~kOb9Y7BxuYGt9nLl4j3fa13J0CV-jFgkZYrbsnLqCsatzsp-GOBePlv11WtoU0Y-VyqcucOgQ4WtWOpm-CRHRxt6dyYhRTWnHDK6jTdwq450LeJJDrlGIXs7UR48IWEjn4CLtl-yFzrYzqgaEJFc4hhkYaRWHEHA5zq~9PMSRfatf1FMdVUmSY-f4dRF~XYj82h7PF5RCazgn8p-k6cF5zKaAZwg5mDRFcAa6L4dnBpVqub5ELdMya7wD4MgJe1KfHFUR-ipYPNEGEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @media (max-width: 728px) {
          width: 80px;
          height: 90%;
        }
      }
    }

    div:last-child {
      margin-left: 10px;
      width: 200px;

      div {
        width: 60px;
        height: 100%;
        background-image: url("https://s3-alpha-sig.figma.com/img/8e6d/4012/82ace228929a9068f3eb189a3ea549a7?Expires=1695600000&Signature=qF~QGIuW0LhKdlzuXcioKGCczJNvscvmmfw3pgAXSbQ52prxwI9-Xim4eWdhQiBWp9IJmdhPMWUEd6h1hTVX0MZMfjSzN7KGWIg~K6crB4ucKBB2kGenYomk~GvlnFGnNQeNR5cNJtpRx8ZP0PQCYmdhLkay5A5nZJyxnpXAggdswF0osy6Fjkt9YG81WFkdC0A~mRZEtFm5SfDi-yi-PryjCvHBFC-TwQwloT-~aPsEOEzQYsuiiCK9ub32hslNLXDrRNTQNT~fVbndRlX8bIIhhjPLQtzp~b7pFAiJdAat~0~U2nLFTMMCbpeOHUy-9W4hSYpoHwKVxwVyQG8xZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        @media (max-width: 728px) {
          width: 30px;
          height: 90%;
        }
      }
    }
  }

  p {
    color: white;
    font-size: 14px;
    font-weight: 700;

    @media (max-width: 728px) {
      font-size: 9px;
    }
  }

  button {
    width: 120px;
    height: 35px;
    border-radius: 7px;
    color: white;
    background-color: #be123c;
    border: none;
    display: flex;

    @media (max-width: 728px) {
      width: 100px;
      height: 30px;
    }
  }
`;

export const MovieWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 40px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieArea = styled.div`
  width: 95%;
  height: auto;
  border: 1px solid black;
  padding: 10px;
`;

export const Featuredheader = styled.div`
  width: auto;
  height: 5vh;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-weight: 600;
    color: black;
    line-height: 0px;
  }

  div {
    font-weight: 600;
    font-size: 16px;
  }
`;

export const FeaturedNsearcMovei = styled.div`
  width: auto;
  height: 10vh;
  padding: 10px;
  border: 1px solid blue;
`;

export const MovieCard = styled.div`
  width: 250px;
  height: 500px;
  border: 1px solid black;
`;

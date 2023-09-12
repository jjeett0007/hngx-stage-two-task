import styled from "styled-components";
import LogoImage from "../../asset/movie.png";

interface PropsArgs {
  customBg?: any;
}

export const MainWrapper = styled.div`
  width: auto;
  height: 87vh;

  @media (max-width: 728px) {
    height: 35vh;
  }
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
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
  height: 35px;
  border: 2px solid blue;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 80%;
    height: 10px;
    padding: 10px;
    background: none;
    border: none;
    color: yellow;
  }

  div{
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 728px) {
    width: 150px;
    height: 20px;
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
    display: flex;
    align-items: center;
    justify-content: center;
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

export const SlideWrappper = styled.div`
  @media (max-width: 728px) {
    border: 5px solid blue;
    height: 30vh;
    overflow: hidden;
  }
`;

export const SlideContent = styled.div<PropsArgs>`
  width: 100vw;
  height: 80vh;
  margin-top: 20px;
  padding: 20px;
  padding-left: 100px;
  display: flex;
  align-items: center;
  background-image: ${({ customBg }) =>
    customBg
      ? `url(${customBg})`
      : 'url("https://s3-alpha-sig.figma.com/img/154e/382f/b7e8be84d7248b8b9812172cad1cd0c9?Expires=1695600000&Signature=OsNLaMa8CnSNnQeUuaSqQc4ItYP-nbUj0fcZVpScVICd8NzZdIEz80MJBNhEju2IQOUMxTFuDw4FavRj8rGqkBK6uLeq0vJG~Y-EPhP~LInckDsnzuQ5Y2BdrMTWOqkPaFdDAPmQXSLpWteihqFaB2f2VQGC6Za5gHu7t3hq62C0X21qB-8H7osPvHdFmh0c-B881mmDx6JQCfpUQRzNHAjMxdvS~LrFQthLfxQb29n8J4z25KNx4cSOzRDCMXJaP0gpPcPRXMYrFdz-nbt~yFJLM37b1YLKasT2gd5K2x6nxGQWVPlwAafWCDzo3TzVihPSl0FiwjfkbBREka5jUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")'};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  position: absolute;
  top: -21px;
  /* margin-top: -20px; */
  z-index: -1000000;

  @media (max-width: 728px) {
    top: -20px;
    height: 30vh;
    padding: 2px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    height: 65%;
    background-position-y: -10px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const ContentDetails = styled.div`
  width: 320px;
  height: auto;
  padding: 10px;

  @media (max-width: 728px) {
    margin-top: 30px;
  }

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
    width: auto;
    height: 45px;
    border-radius: 7px;
    color: white;
    background-color: #be123c;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;

    div {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      font-size: 18px;
      font-weight: 600;

      @media (max-width: 728px) {
        font-size: 10.5px;
      }
    }

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieArea = styled.div`
  width: 95%;
  height: auto;
  padding: 10px;
`;

export const Featuredheader = styled.div`
  width: auto;
  height: 5vh;
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
    color: #be123c;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    p {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const FeaturedNsearcMovei = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;

export const MovieCard = styled.div`
  width: 270px;
  height: 500px;
  margin: 30px;

  @media (max-width: 728px) {
    width: 300px;
    margin: 10px;
  }
`;

export const MovieBanner = styled.div<PropsArgs>`
  width: auto;
  height: 370px;
  background-image: ${({ customBg }) =>
    customBg
      ? `url(${customBg})`
      : 'url("https://s3-alpha-sig.figma.com/img/5789/e4a9/55bc9e1a21c68b2b31a33af82b284df6?Expires=1695600000&Signature=ZYva9mE2V1lavQ1AgRB~I0tVttb~Qw7g9Nu-Mt8TAiNlVPcLfZPLtIhkFGzrViuyAu7uKKvEt5U0QoeC4SbYPQJ4j-FJJQE8bvNvdMAy-~D1qdecxAPil0bjIROFTPBhVmIpxNmUt8c54fUO1poHzlQ0gBPsFnoZi9vLHRIiP2Yl19Zz4AcvHYywUPEPR515xPHjTmP9c3Zg89J8oHJAnuhZAO72t-7NdDiqsoatiwq-uqcDLt0TkWP1EHstLrNXK-UjmeZAKOW5xwizebIODoOu~V8Qz8AlAmnp0NOpBzSmOJ02Kvxi5-LccSDqZeY9Mip5OyhvO120mfi60JXevA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")'};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  /* img {
    position: absolute;
    width: 18%;
    height: 100%;
    z-index: -1;
  } */

  div {
    margin-top: 0px;
    width: 92%;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div:first-child {
      width: 60px;
    }

    div:last-child {
      width: 40px;
      height: 40px;
      padding: 0px;
      border-radius: 50%;
      background-color: rgba(243, 244, 246, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
    }
  }
`;

export const MovieDetails = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;

  h5,
  h4,
  p {
    margin-top: -6px;
    line-height: 17px;
  }

  h5,
  p {
    color: #9ca3af;
    font-size: 18px;
    font-weight: 600;
  }

  div {
    width: 90%;
    margin-top: -6px;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: -2px;
    margin-bottom: 4px;

    @media (max-width: 728px) {
      width: 80%;
    }

    span {
      color: black;
      /* margin-left: 20px; */
    }

    div:first-child {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 728px) {
        width: 140px;
      }

      div {
        width: 35px;
        height: 60%;
        background-image: url("https://s3-alpha-sig.figma.com/img/a423/5182/5bf071206cd1f384cc337b8867ae5aeb?Expires=1695600000&Signature=GmjlYRtN7Bn0a000PlFfH7~PSPUqhjlmeVjeG78xahYPVsdYtx9OB4Xw~McOajU0VJdzWV~kOb9Y7BxuYGt9nLl4j3fa13J0CV-jFgkZYrbsnLqCsatzsp-GOBePlv11WtoU0Y-VyqcucOgQ4WtWOpm-CRHRxt6dyYhRTWnHDK6jTdwq450LeJJDrlGIXs7UR48IWEjn4CLtl-yFzrYzqgaEJFc4hhkYaRWHEHA5zq~9PMSRfatf1FMdVUmSY-f4dRF~XYj82h7PF5RCazgn8p-k6cF5zKaAZwg5mDRFcAa6L4dnBpVqub5ELdMya7wD4MgJe1KfHFUR-ipYPNEGEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin: auto;

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
        width: 35px;
        height: 60%;
        background-image: url("https://s3-alpha-sig.figma.com/img/8e6d/4012/82ace228929a9068f3eb189a3ea549a7?Expires=1695600000&Signature=qF~QGIuW0LhKdlzuXcioKGCczJNvscvmmfw3pgAXSbQ52prxwI9-Xim4eWdhQiBWp9IJmdhPMWUEd6h1hTVX0MZMfjSzN7KGWIg~K6crB4ucKBB2kGenYomk~GvlnFGnNQeNR5cNJtpRx8ZP0PQCYmdhLkay5A5nZJyxnpXAggdswF0osy6Fjkt9YG81WFkdC0A~mRZEtFm5SfDi-yi-PryjCvHBFC-TwQwloT-~aPsEOEzQYsuiiCK9ub32hslNLXDrRNTQNT~fVbndRlX8bIIhhjPLQtzp~b7pFAiJdAat~0~U2nLFTMMCbpeOHUy-9W4hSYpoHwKVxwVyQG8xZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin: auto;

        @media (max-width: 728px) {
          width: 30px;
          height: 90%;
        }
      }
    }
  }
`;

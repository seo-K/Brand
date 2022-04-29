import styled, { keyframes } from "styled-components";
// img
import { MainImg } from "../../../utils/ImgLIst/img";

// 젤리 애니메이션
export const jello = keyframes`
    11.1% {
      /* transform: translate(-50%, -50%) */
    }
    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg) translate(-50%, -50%)
    }
    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg) translate(-50%, -50%)
    }
    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg) translate(-50%, -50%)
    }
    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg) translate(-50%, -50%)
    }
    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg) translate(-50%, -50%)
    }
    77.7% {
      transform: skewX(0.390625deg) skewY(0.390625deg) translate(-50%, -50%)
    }
    88.8% {
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg) translate(-50%, -50%)
    }
    100% {
      /* transform: translate(-50%, -50%) */
    }
`;

export const TitleMove = keyframes`
    0% {
        transform:translate(0, 0);
    }
    25% {
        transform:translate(5px, 0);
    }
    50% {
        transform:translate(0, 5px);
    }
    75% {
        transform:translate(-5px, 0);
    }
    100% {
        transform:translate(-5px, -5px);
    }
    
`;

export const TitleUpDown = keyframes`
    0% {
        transform:translate(0, 0);
    }
    100% {
        transform:translate(-5px, 50px);
    }
    
`;

export const plantMove = keyframes`
    0% {
        transform:translate(0, 0) rotate(25deg);
    }
    60% {
        transform:translate(800px, -400px) rotate(-40deg);
    }
    80% {
        transform:translate(810px, -390px) rotate(-45deg) scale(1.05);
    }
    100% {
        transform:translate(800px, -400px) rotate(-40deg) scale(1.02);
    }
`;

export const PersonMove = keyframes`
    form {
        transform:translate(0, 0) rotate(-30deg);
    }
    to {
        transform:translate(10px, -20px) rotate(-30deg);
    }
`;

export const UfoMove = keyframes`
    form {
        transform:translate(0, 10px);
    }
    to {
        transform:translate(0, -10px);
    }
`;

export const Wrap = styled.div`
    position: relative;
    width: 100%;

    background: #fff;
`;
export const FirstSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;

    /* padding: 180px 0 60px; */
    background: #fff;
    background-blend-mode: difference;

    overflow: hidden;

    & span {
        display: block;
        position: absolute;
        width: 150px;
        height: 150px;

        background: url(${MainImg.Bg}) no-repeat center center fixed;
        /* background: #000; */
        background-size: cover;
        border-radius: 50%;
    }
`;

export const InnerWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    width: 800px;
    margin: 0 auto;
`;

export const BgCircle1 = styled.div`
    position: absolute;
    top: 10%;
    right: 10%;
    background: url(${MainImg.Bg}) no-repeat center center fixed;
    background-size: cover;
    border-radius: 50%;

    width: 200px;
    height: 200px;

    z-index: 5;

    animation: ${jello} 3s linear infinite;
`;

export const BgCircle2 = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-50%, -50%) rotate(-10deg);
    background: url(${MainImg.Bg}) no-repeat center center fixed;
    background-size: cover;
    border-radius: 50%;

    width: 150px;
    height: 200px;

    z-index: 5;

    transform-origin: left top;
`;

export const BgCircle3 = styled.div`
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate(-50%, -50%);
    background: url(${MainImg.Bg}) no-repeat center center fixed;
    background-size: cover;
    border-radius: 50%;

    width: 200px;
    height: 200px;

    z-index: 5;
`;

export const UfoImg = styled.img`
    position: absolute;
    bottom: -10%;
    left: 30%;
    width: 400px;
    height: 600px;

    animation: ${MainImg.Ufo} 3s linear infinite alternate;
`;

export const LookImg = styled.img`
    position: absolute;
    bottom: 0;
    left: 60%;
    width: 300px;
    height: 300px;
`;

export const PersonImg = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 570px;
    height: 700px;

    transform: rotate(-30deg);

    animation: ${PersonMove} 3s linear infinite alternate;
`;

export const PlantImg = styled.img`
    position: absolute;
    top: 60%;
    left: 10%;
    width: 300px;
    height: 200px;

    transform: rotate(25deg);

    transition: all 0.4s;
    animation: ${plantMove} 2s ease forwards;
`;

export const Date = styled.p`
    font-size: 11px;

    margin-left: auto;
`;

export const Title = styled.h2`
    position: relative;

    font-family: "One";
    font-size: 150px;

    z-index: 1;
    margin-bottom: 70px;
    color: #fff;
    z-index: 1;
`;

export const BackTitle = styled(Title)`
    position: absolute;
    top: 0;
    left: 10px;
    color: #000;
    z-index: 0;

    font-weight: bold;

    animation: ${TitleMove} 5s linear infinite alternate;
`;

export const Desc = styled.p`
    position: relative;

    font-size: 14px;
    width: 500px;

    margin-left: auto;
    z-index: 1;
`;

export const SecondSection = styled(FirstSection)``;

export const SecTitle = styled.p`
    position: absolute;
    top: 50%;
    left: -20%;

    font-size: 500px;
    color: #f4c705;

    transform: translateY(-50%);
`;

export const ShoesWrap = styled.div`
    width: 400px;
    height: auto;
`;

export const ShoesImg = styled.img`
    width: 100%;
    height: 100%;

    filter: drop-shadow(-3px 0px 20px rgba(0, 0, 0, 0.4));
`;

export const ThirdSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 0 auto;

    padding: 40px 0;

    &:hover {
        background: #000;
    }

    /* mix-blend-mode: darken; */

    &:after {
        position: absolute;
        top: 0;
        left: 40%;
        content: "";
        width: 1200px;
        height: 1200px;

        border-radius: 50%;
        background: #f4c705;
    }

    & .mainSwiper {
        width: 100%;
        height: 300px;

        padding-left: 200px;
        overflow: visible;
    }

    & .swiper-slide {
        position: relative;

        width: 200px;

        cursor: pointer;
    }
`;

export const ThirdDesc = styled(Desc)`
    margin-bottom: auto;
`;

export const SlideNum = styled.span`
    font-size: 11px;
    margin-bottom: 10px;
`;

export const SlideTitle = styled.h3`
    /* position: absolute; */
    top: -20px;
    left: 50px;
    font-size: 60px;
    color: #000;

    z-index: 1;

    transition: 0.5s ease;
    animation: ${TitleUpDown} 5s linear infinite alternate;
    mix-blend-mode: difference;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        content: "";

        border-radius: 50%;
        background: red;

        z-index: -1;
    }

    /* -webkit-filter: invert(100%); */
    /* filter: invert(100%); */

    /* mix-blend-mode: difference; */

    /* mix-blend-mode: color-dodge, hue; */
    /* 
    filter: invert(100%); */

    /* background: linear-gradient(-90deg, #3498db 50%, #ffffff 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap; */
`;

export const SlideImgWrap = styled.div`
    width: 100%;
    height: 250px;

    margin-bottom: 3px;
    transition: all 0.4s;

    -webkit-filter: grayscale(100%);
    filter: gray;

    &:hover {
        -webkit-filter: grayscale(0%);
        filter: none;
    }

    ${({ rotateEvent }) => {
        return (
            rotateEvent &&
            `
            transform: rotate(3deg) scale(1.1);
            `
        );
    }}
`;

export const SlideImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const SlideDesc = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
`;

export const SlideHideWrap = styled.div`
    width: 100%;
`;
export const textup = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    50% {
        transform: translateY(10%);
        opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
`;

export const HideText = styled.p`
    font-size: 13px;
    /* transform: translateY(-100%); */

    transform-origin: left bottom;

    &:nth-of-type(1) {
        animation: ${textup} 3s linear normal;
    }
    &:nth-of-type(2) {
        animation: ${textup} 3s linear normal 1s;
    }
    &:nth-of-type(3) {
        animation: ${textup} 3s linear normal 2s;
    }
`;

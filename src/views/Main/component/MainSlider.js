//react
import { useEffect, useState, useRef } from "react";
import { Link,useNavigate, useLocation  } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// fullpage
import ReactFullpage from '@fullpage/react-fullpage';

//css
import styled, { keyframes } from 'styled-components';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// component

// img
import BgJpg from "../../../assets/img/bg.jpg"
import Slide01 from "../../../assets/img/slider_01.jfif"
import Slide02 from "../../../assets/img/slider_02.jpg"
import Slide03 from "../../../assets/img/slider_03.jpg"
import ShoesPng from "../../../assets/img/shoes.png"

import UfoPng from "../../../assets/img/ufo.png"
import LookPng from "../../../assets/img/look.png"
import PersonPng from "../../../assets/img/space_person.png"
import PlantPng from "../../../assets/img/plant.png"

// swiper
import { FreeMode } from "swiper";


// history 사용을 원할 경우
// import { createBrowserHistory} from 'react-router-dom';
// const history = createBrowserHistory();


export default function MainSlider() {

   // NOTE: if using fullpage extensions/plugins put them here and pass it as props
    // const pluginWrapper = () => {
    //     require('./statics/fullpage.scrollHorizontally.min');
    // };

    // 슬라이더 컨텐츠
    const SliderData = [
        {
            title: [<>Maiid<br/>AiFuttaim</>],
            img: Slide01,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [<>Maiid<br/>AiFuttaim</>],
            img: Slide02,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [<>Maiid<br/>AiFuttaim</>],
            img: Slide03,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [<>Maiid<br/>AiFuttaim</>],
            img: Slide01,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [<>Maiid<br/>AiFuttaim</>],
            img: Slide02,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [<>Maiid<br/>AiFuttaim</>],
            img: Slide03,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
    ]

    // title 그림자 for 문
    //initial text-shadow function
    // @function textShadow($color){
    //     //value variable: x-value, y-value, color value;
    //     $val: 0px 0px $color;
    //     //loop to create text-shadow variables moving 1px to the left and 1 down
    //     @for $i from 1 through 50{
    //     $val: #{$val}, -#{$i}px #{$i}px #{$color};
    // }
    //     //return value
    //     @return $val;
    // }

    const rendering = () => {
        let arr = [];
        arr.length = 20
        for (let i = 0; i < arr.length; i++)
            arr[i] = i
        return arr + "px" + arr + "px" + 0 + "#000"
    }

    // 마우스 스크래치 이벤트
    function mouseEvent () {
        document.addEventListener('mousemove', function(e){
            const body = document.querySelector('.first_section');
            const bubbles = document.createElement('span');
            bubbles.style.left = -75 + e.offsetX + 'px';
            bubbles.style.top = -75 + e.offsetY + 'px';

            body.appendChild(bubbles);
        })
    }
    // mouseEvent ();
        

    return (
        <Wrap>
            <ReactFullpage
                // pluginWrapper = {pluginWrapper}
                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} /* Options here */
                // scrollHorizontally = {true}  /* Because we are using the extension */
                // scrollHorizontallyKey = {'YOUR KEY HERE'}
                // v2compatible = true 

            render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    {/* Section 1 */}
                    <FirstSection className="section first_section">
                        <InnerWrap>
                            <Title>EXPLORE<br/>THE SPACE</Title>
                            <BackTitle>EXPLORE<br/>THE SPACE</BackTitle>
                            <button onClick={() => fullpageApi.moveSectionDown()}>
                                Click me to move down
                            </button>
                        </InnerWrap>
                        <Desc>SPACE INVADERS</Desc>
                        <BgCircle1></BgCircle1>
                        <BgCircle2></BgCircle2>
                        <BgCircle3></BgCircle3>

                        {/* 컨텐츠 */}
                        <UfoImg src={UfoPng} alt="ufo"/>
                        <LookImg src={LookPng} alt="look"/>
                        <PersonImg src={PersonPng} alt="person"/>
                        <PlantImg src={PlantPng} alt="plant"/>
                    </FirstSection>

                    {/* Section 2 */}
                    <SecondSection className="section">
                        <InnerWrap>
                            <Desc>Quisque sit amet ultricies lacus, eget accumsan urna. Integer et efficitur nibh. Praesent quam ex, semper non eros ut, viverra lacinia sem. Maecenas quis interdum mauris. Aenean quis iaculis ex. Donec scelerisque nunc cursus mi vestibulum laoreet. In hac habitasse platea dictumst. Morbi eu lobortis nisi.</Desc>
                            <SecTitle>001</SecTitle>
                            <ShoesWrap>
                                <ShoesImg src={ShoesPng} alt="신발"/>
                            </ShoesWrap>
                        </InnerWrap>
                    </SecondSection>

                    {/* Section 3 */}
                    <ThirdSection className="section">
                        <ThirdDesc>Quisque sit amet ultricies lacus, eget accumsan urna. Integer et efficitur nibh. Praesent quam ex, semper non eros ut, viverra lacinia sem. Maecenas quis interdum mauris. Aenean quis iaculis ex. Donec scelerisque nunc cursus mi vestibulum laoreet. In hac habitasse platea dictumst. Morbi eu lobortis nisi.</ThirdDesc>
                        <Swiper
                            slidesPerView={2.1}
                            spaceBetween={30}
                            freeMode={true}
                            modules={[FreeMode]}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}

                            className="mainSwiper"
                        >
                        {
                            SliderData.map(( item, index ) => {
                                return(
                                    <SwiperSlide
                                        key={"Swiper" + index} 
                                        // data-swiper-parallax="-130%"
                                        >
                                        <SlideNum>00{index + 1}</SlideNum>
                                        <SlideTitle>{item.title}</SlideTitle>
                                        <SlideImgWrap>
                                            <SlideImg src={item.img} alt="슬라이드 이미지"/>
                                        </SlideImgWrap>
                                        <SlideDesc><span>{item.desc}</span><span>&amp;</span><span>∞</span></SlideDesc>
                                        {({ isActive }) => (
                                        <div>
                                            Current slide is{" "}
                                            {isActive ? <p>{item.desc}</p> : <p>not active</p>}
                                        </div>
                                        )}
                                        {/* <SlideHideWrap>
                                            <HideText>{item.subDesc1}</HideText>
                                            <HideText>{item.subDesc2}</HideText>
                                            <HideText>{item.subDesc3}</HideText>
                                        </SlideHideWrap> */}
                                    </SwiperSlide>
                                )
                            })
                        }
                        <span slot="container-start">Container 시작</span>
                        <span slot="container-end">Container 끝</span>
                        <span slot="wrapper-start">Wrapper 시작</span>
                        <span slot="wrapper-end">Wrapper 끝</span>
                    </Swiper>
                    </ThirdSection>

                </ReactFullpage.Wrapper>
            );
          }}
        />
        </Wrap>
    );
}

// 젤리 애니메이션
const jello = keyframes `
    11.1% {
      transform: translate(-50%, -50%)
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
      transform: translate(-50%, -50%)
    }
`

const TitleMove = keyframes `
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
    
`

const plantMove = keyframes `
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
`

const PersonMove = keyframes `
    form {
        transform:translate(0, 0) rotate(-30deg);
    }
    to {
        transform:translate(10px, -20px) rotate(-30deg);
    }
`

const UfoMove = keyframes `
    form {
        transform:translate(0, 10px);
    }
    to {
        transform:translate(0, -10px);
    }
`

const Wrap = styled.div`
    position: relative;
    width: 100%;
`
const FirstSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;

    /* padding: 180px 0 60px; */
    background: #fff;
    background-blend-mode: difference;

    overflow: hidden;

    & span{
        display: block;
        position: absolute;
        width: 150px;
        height: 150px;

        background: url(${BgJpg}) no-repeat center center fixed;
        /* background: #000; */
        background-size: cover;
        border-radius: 50%;
    }
`

const InnerWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    width: 800px;
    margin: 0 auto;

`

const BgCircle1 = styled.div`
    position: absolute;
    top:10%;
    right: 10%;
    background: url(${BgJpg}) no-repeat center center fixed;
    background-size: cover;
    border-radius: 50%;

    width: 200px;
    height: 200px;

    z-index: 5;

`

const BgCircle2 = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-50%, -50%) rotate(-10deg);
    background: url(${BgJpg}) no-repeat center center fixed;
    background-size: cover;
    border-radius: 50%;

    width: 150px;
    height: 200px;

    z-index: 5;
    
    transform-origin: left top;
`

const BgCircle3 = styled.div`
    position: absolute;
    top:10%;
    left: 10%;
    transform: translate(-50%, -50%);
    background: url(${BgJpg}) no-repeat center center fixed;
    background-size: cover;
    border-radius: 50%;

    width: 200px;
    height: 200px;

    z-index: 5;

`

const UfoImg = styled.img`
    position: absolute;
    bottom: -10%;
    left: 30%;
    width: 400px;
    height: 600px;

    animation: ${UfoMove} 3s linear infinite alternate ;
`

const LookImg = styled.img`
    position: absolute;
    bottom: 0;
    left: 60%;
    width: 300px;
    height: 300px;
`

const PersonImg = styled.img`
    position: absolute;
    bottom:0;
    right: 0;
    width: 570px;
    height: 700px;

    transform: rotate(-30deg);

    animation: ${PersonMove} 3s linear infinite alternate ;
`

const PlantImg = styled.img`
    position: absolute;
    top:60%;
    left: 10%;
    width: 300px;
    height: 200px;
    
    transform: rotate(25deg);

    transition: all .4s;
    animation: ${plantMove} 2s ease forwards;

`

const Date = styled.p`
    font-size: 11px;

    margin-left: auto;
`
  
const Title = styled.h2`
    position: relative;

    font-family: 'One';
    font-size: 150px;

    z-index: 1;
    margin-bottom: 70px;
    color: #fff;
    z-index:1;
`

const BackTitle = styled(Title)`
    position: absolute;
    top:0;
    left: 10px;
    color: #000;
    z-index: 0;

    font-weight: bold;

    animation: ${TitleMove} 5s linear infinite alternate ;
`

const Desc = styled.p`
    position: relative;

    font-size: 14px;
    width: 500px;

    margin-left: auto;
    z-index: 1;
`

const SecondSection = styled(FirstSection)`
`

const SecTitle = styled.p`
    position: absolute;
    top:50%;
    left: -20%;

    font-size: 500px;
    color: #f4c705;

    transform: translateY(-50%);
`

const ShoesWrap = styled.div`
    width: 400px;
    height: auto;
`

const ShoesImg = styled.img`
    width: 100%;
    height: 100%;

    filter:drop-shadow(-3px 0px 20px rgba(0, 0, 0, 0.4));
`

const ThirdSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 0 auto;

    padding: 40px 0;

    & .mainSwiper{
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
`

const ThirdDesc = styled(Desc)`
    margin-bottom: auto;
`

const SlideNum = styled.span`
    font-size: 11px;
    margin-bottom: 10px;
`

const SlideTitle = styled.h3`
    position: absolute;
    top: -20px;
    left:50px;
    font-size: 60px;

    z-index: 1;
    /* -webkit-filter: invert(100%); */
    /* filter: invert(100%); */

    mix-blend-mode: difference;
    /* mix-blend-mode : color-dodge, hue; */
/* 
    filter: invert(100%); */

    /* background: linear-gradient(-90deg, #3498db 50%, #ffffff 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap; */

`

const SlideImgWrap = styled.div`
    width: 100%;
    height: 250px;

    margin-bottom: 3px;
`

const SlideImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const SlideDesc = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
`

const SlideHideWrap = styled.div`
    width: 100%;
    
`
const textup = keyframes `
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
`
  
const HideText = styled.p`
    font-size: 13px;
    /* transform: translateY(-100%); */

    transform-origin: left bottom;

    &:nth-of-type(1){
        animation: ${textup} 3s linear normal;
    }
    &:nth-of-type(2){
        animation: ${textup} 3s linear normal 1s;
    }
    &:nth-of-type(3){
        animation: ${textup} 3s linear normal 2s;
    }
`

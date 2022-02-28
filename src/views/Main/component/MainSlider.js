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
import Slide01 from "../../../assets/img/slider_01.jfif"
import Slide02 from "../../../assets/img/slider_02.jpg"
import Slide03 from "../../../assets/img/slider_03.jpg"
import ShoesPng from "../../../assets/img/shoes.png"

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
                        <FirstSection className="section">
                            <InnerWrap>
                                <Date>Update - 2022</Date>
                                <Title>Brands</Title>

                                <button onClick={() => fullpageApi.moveSectionDown()}>
                                    Click me to move down
                                </button>

                                <Desc>Quisque sit amet ultricies lacus, eget accumsan urna. Integer et efficitur nibh. Praesent quam ex, semper non eros ut, viverra lacinia sem. Maecenas quis interdum mauris. Aenean quis iaculis ex. Donec scelerisque nunc cursus mi vestibulum laoreet. In hac habitasse platea dictumst. Morbi eu lobortis nisi.</Desc>
                            </InnerWrap>
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


const Wrap = styled.div`
    position: relative;
    width: 100%;
`
const FirstSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;

    padding: 180px 0 60px;
`

const InnerWrap = styled.div`
    display: flex;
    flex-direction: column;

    width: 800px;
    margin: 0 auto;

`

const Date = styled.p`
    font-size: 11px;

    margin-left: auto;
`
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
  
const Title = styled.h2`
    position: relative;

    font-family: 'Bodo';
    font-size: 180px;

    z-index: 1;
    margin-bottom: 70px;

    &:after{
        position: absolute;
        right: 0;
        top: 50%;
        content:'';

        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: #f2c801;

        transform: translate(-50%, -50%);
        z-index:-1;

        animation: ${jello} 3s infinite;
        transform-origin: left top;
    }
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

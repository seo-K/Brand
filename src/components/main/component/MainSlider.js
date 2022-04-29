//react
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// fullpage
import ReactFullpage from "@fullpage/react-fullpage";

//css
import styled, { keyframes } from "styled-components";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import * as S from "./style";

// img
import { MainImg } from "../../../utils/ImgLIst/img";

// swiper
import { FreeMode } from "swiper";

// history 사용을 원할 경우
// import { createBrowserHistory} from 'react-router-dom';
// const history = createBrowserHistory();

export default function MainSlider() {
    const [slideActive, setSlideActive] = useState(false);
    // NOTE: if using fullpage extensions/plugins put them here and pass it as props
    // const pluginWrapper = () => {
    //     require('./statics/fullpage.scrollHorizontally.min');
    // };

    // 슬라이더 컨텐츠
    const SliderData = [
        {
            title: [
                <>
                    Maiid
                    <br />
                    AiFuttaima
                </>,
            ],
            img: MainImg.Slider01,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [
                <>
                    Maiid
                    <br />
                    AiFuttaim
                </>,
            ],
            img: MainImg.Slider02,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [
                <>
                    Maiid
                    <br />
                    AiFuttaim
                </>,
            ],
            img: MainImg.Slider03,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [
                <>
                    Maiid
                    <br />
                    AiFuttaim
                </>,
            ],
            img: MainImg.Slider01,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [
                <>
                    Maiid
                    <br />
                    AiFuttaim
                </>,
            ],
            img: MainImg.Slider02,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
        {
            title: [
                <>
                    Maiid
                    <br />
                    AiFuttaim
                </>,
            ],
            img: MainImg.Slider03,
            desc: "Orolia",
            subDesc1: "Nullam fringilla sagittis elementum. In quis eros pulvinar, ",
            subDesc2: "Suspendisse pretium molestie nisl a dignissim.",
            subDesc3: "Maecenas porttitor tristique maximus. Sed non faucibus neque, sit amet eleifend nunc. In hac habitasse platea dictumst.",
        },
    ];

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

    // const rendering = () => {
    //     let arr = [];
    //     arr.length = 20;
    //     for (let i = 0; i < arr.length; i++) arr[i] = i;
    //     return arr + "px" + arr + "px" + 0 + "#000";
    // };

    // 마우스 스크래치 이벤트
    // function mouseEvent() {
    //     document.addEventListener("mousemove", function (e) {
    //         const body = document.querySelector(".first_section");
    //         const bubbles = document.createElement("span");
    //         bubbles.style.left = -75 + e.offsetX + "px";
    //         bubbles.style.top = -75 + e.offsetY + "px";

    //         body.appendChild(bubbles);
    //     });
    // }
    // mouseEvent ();

    return (
        <S.Wrap>
            <ReactFullpage
                // pluginWrapper = {pluginWrapper}
                //fullpage options
                licenseKey={"YOUR_KEY_HERE"}
                scrollingSpeed={1000} /* Options here */
                // scrollHorizontally = {true}  /* Because we are using the extension */
                // scrollHorizontallyKey = {'YOUR KEY HERE'}
                // v2compatible = true

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            {/* Section 1 */}
                            <S.FirstSection className="section first_section">
                                <S.InnerWrap>
                                    <S.Title>
                                        EXPLORE
                                        <br />
                                        THE SPACE
                                    </S.Title>
                                    <S.BackTitle>
                                        EXPLORE
                                        <br />
                                        THE SPACE
                                    </S.BackTitle>
                                    <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
                                </S.InnerWrap>
                                <S.Desc>SPACE INVADERS</S.Desc>
                                <S.BgCircle1></S.BgCircle1>
                                <S.BgCircle2></S.BgCircle2>
                                <S.BgCircle3></S.BgCircle3>

                                {/* 컨텐츠 */}
                                <S.UfoImg src={MainImg.Ufo} alt="ufo" />
                                <S.LookImg src={MainImg.LookItem} alt="look" />
                                <S.PersonImg src={MainImg.SpacePerson} alt="person" />
                                <S.PlantImg src={MainImg.Plant} alt="plant" />
                            </S.FirstSection>

                            {/* Section 2 */}
                            <S.SecondSection className="section">
                                <S.InnerWrap>
                                    <S.Desc>
                                        Quisque sit amet ultricies lacus, eget accumsan urna. Integer et efficitur nibh. Praesent quam ex, semper non eros ut,
                                        viverra lacinia sem. Maecenas quis interdum mauris. Aenean quis iaculis ex. Donec scelerisque nunc cursus mi vestibulum
                                        laoreet. In hac habitasse platea dictumst. Morbi eu lobortis nisi.
                                    </S.Desc>
                                    <S.SecTitle>001</S.SecTitle>
                                    <S.ShoesWrap>
                                        <S.ShoesImg src={MainImg.Shoes} alt="신발" />
                                    </S.ShoesWrap>
                                </S.InnerWrap>
                            </S.SecondSection>

                            {/* Section 3 */}
                            <S.ThirdSection className="section">
                                <S.ThirdDesc>
                                    Quisque sit amet ultricies lacus, eget accumsan urna. Integer et efficitur nibh. Praesent quam ex, semper non eros ut,
                                    viverra lacinia sem. Maecenas quis interdum mauris. Aenean quis iaculis ex. Donec scelerisque nunc cursus mi vestibulum
                                    laoreet. In hac habitasse platea dictumst. Morbi eu lobortis nisi.
                                </S.ThirdDesc>
                                <Swiper
                                    slidesPerView={2.1}
                                    spaceBetween={30}
                                    freeMode={true}
                                    modules={[FreeMode]}
                                    onSlideChange={() => {
                                        setSlideActive(true);
                                        console.log("움직인다");
                                    }}
                                    onSlideChangeTransitionEnd={() => {
                                        setSlideActive(false);
                                    }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    // rotateActive={slideActive === true ? true : false}
                                    // rotateActive={slideActive === true ? true : false}

                                    className="mainSwiper"
                                >
                                    {SliderData.map((item, index) => {
                                        return (
                                            <SwiperSlide
                                                key={"Swiper" + index}
                                                // data-swiper-parallax="-130%"
                                            >
                                                <S.SlideNum>00{index + 1}</S.SlideNum>
                                                <S.SlideTitle>{item.title}</S.SlideTitle>
                                                <S.SlideImgWrap rotateEvent={slideActive === true ? true : false}>
                                                    <S.SlideImg src={item.img} alt="슬라이드 이미지" />
                                                </S.SlideImgWrap>
                                                <S.SlideDesc>
                                                    <span>{item.desc}</span>
                                                    <span>&amp;</span>
                                                    <span>∞</span>
                                                </S.SlideDesc>
                                                {({ isActive }) => <div>Current slide is {isActive ? <p>{item.desc}</p> : <p>not active</p>}</div>}
                                                {/* <SlideHideWrap>
                                            <HideText>{item.subDesc1}</HideText>
                                            <HideText>{item.subDesc2}</HideText>
                                            <HideText>{item.subDesc3}</HideText>
                                        </SlideHideWrap> */}
                                            </SwiperSlide>
                                        );
                                    })}
                                    <span slot="container-start">Container 시작</span>
                                    <span slot="container-end">Container 끝</span>
                                    <span slot="wrapper-start">Wrapper 시작</span>
                                    <span slot="wrapper-end">Wrapper 끝</span>
                                </Swiper>
                            </S.ThirdSection>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </S.Wrap>
    );
}

//react
import { useEffect, useState, useRef } from "react";
import { Link,useNavigate, useLocation  } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

//css
import styled, { keyframes } from 'styled-components';
import 'swiper/css';

// component


// history 사용을 원할 경우
// import { createBrowserHistory} from 'react-router-dom';
// const history = createBrowserHistory();


export default function MainSlider() {
// function Home(){
    
    const { pathname } = useLocation();
  
    //페이지 이동
    const navigate = useNavigate();
    const goProduct = () =>{
        navigate.push(`/product`);
    }
    const goBack = () =>{
        // navigate.goBack();
        navigate(-1);
    }
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }

    return (
        <Wrap>
            {/* <Swiper
                spaceBetween={50}
                // slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper> */}

            <FirstSection>
                <Date>Update - 2022</Date>
                <Title>Brands</Title>
                <Desc>Quisque sit amet ultricies lacus, eget accumsan urna. Integer et efficitur nibh. Praesent quam ex, semper non eros ut, viverra lacinia sem. Maecenas quis interdum mauris. Aenean quis iaculis ex. Donec scelerisque nunc cursus mi vestibulum laoreet. In hac habitasse platea dictumst. Morbi eu lobortis nisi.</Desc>
            </FirstSection>
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

    display: flex;
    flex-direction: column;

    width: 800px;
    margin: 0 auto;

    padding: 180px 0 60px;
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

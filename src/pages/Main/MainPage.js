//react
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

//css
import styled from "styled-components";

// component
import { MainContainer } from "../../components";
import MainSlider from "../../components/main/component/MainSlider";

// history 사용을 원할 경우
// import { createBrowserHistory} from 'react-router-dom';
// const history = createBrowserHistory();

export default function MainPage() {
    const { pathname } = useLocation();

    //페이지 이동
    const navigate = useNavigate();
    const goProduct = () => {
        navigate.push(`/product`);
    };
    const goBack = () => {
        // navigate.goBack();
        navigate(-1);
    };
    // const activeStyle = {
    //     color: "green",
    //     fontSize: "2rem",
    // };

    return (
        <MainContainer>
            <MainSlider />
        </MainContainer>
    );
}

const Wrap = styled.div`
    position: relative;
    width: 100%;
`;

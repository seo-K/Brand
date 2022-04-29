//react
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";

//css
import styled from "styled-components";

// component
import { BackBtn } from "../../../components";

export default function Header() {
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

    return (
        <S.AllWrap>
            {/* <BackBtn onClick={goProduct}>프로덕트페이지로 가랏</BackBtn> */}
            <S.NavWrap>
                {/* <Item selected={pathname.startsWith("/")}> */}
                <S.Item selected={pathname === "/"}>
                    <S.NavLink to="/">Home</S.NavLink>
                </S.Item>
                <S.Item selected={pathname === "/users"}>
                    <S.NavLink to="/users">유저</S.NavLink>
                </S.Item>
                <S.Item selected={pathname === "/about"}>
                    <S.NavLink to="/about">About 디폴트 page</S.NavLink>
                </S.Item>
                <S.Item selected={pathname === "/about/product"}>
                    <S.NavLink to="/about/product">리얼 About page</S.NavLink>
                    {/* <BtnText bg={props.bgWhite}></BtnText> */}
                </S.Item>
            </S.NavWrap>
            {/* <NavLink to="/user" style={isActive => ({color: isActive ? "green" : "blue"})}>유저</NavLink> */}
            {/* <NavLink to="/user" activeStyle={{fontWeight: "bold", color: "red"}}>유저</NavLink> */}
            {/* <NavLink to="/user" activeStyle={activeStyle}>유저</NavLink> */}
        </S.AllWrap>
    );
}

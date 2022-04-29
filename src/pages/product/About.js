import React from 'react'
import { Link,useNavigate, Outlet } from "react-router-dom";

// function handleClick() {
//   navigate("/home");
// }
import Header from '../../component/Header';

export default function About()  {

    
const navigate = useNavigate();
// 홈으로 가기
const goHome = () => {
    navigate('/');
}

const goBack = () =>{
    // navigate.goBack();
    navigate(-1);
}

    return (
        <>
        <Header/>
            <h1>어바웃 페이지인데</h1>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>집으로</button>

            <Outlet/>
        </>
    )
}
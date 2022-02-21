import React from 'react'
import { Link, useNavigate, Outlet } from "react-router-dom";

import Header from '../../component/Header';
// function handleClick() {
//   navigate("/home");
// }

export default function users() {
    return (
        <>
            <Header/>
            마이페이지 기본 레이아웃
            <Outlet />
        </>
    )
}
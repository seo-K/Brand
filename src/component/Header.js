//react
import { useEffect, useState, useRef } from "react";
import { Link,useNavigate, useLocation  } from "react-router-dom";

//css
import styled from "styled-components"


// history 사용을 원할 경우
// import { createBrowserHistory} from 'react-router-dom';
// const history = createBrowserHistory();


// export default function Home() {
    export default function Header(){
    
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
        <>
            <AllWrap>
              <BackBtn onClick={goBack}>뒤로가기</BackBtn>
              
              {/* <BackBtn onClick={goProduct}>프로덕트페이지로 가랏</BackBtn> */}
              <NavWrap>
                    {/* <Item selected={pathname.startsWith("/")}> */}
                    <Item selected={pathname === ("/")}>
                        <NavLink to="/">Home</NavLink>
                    </Item>
                    <Item selected={pathname === "/users"}>
                        <NavLink to="/users">유저</NavLink>
                    </Item>
                    <Item selected={pathname === "/about"}>
                        <NavLink to='/about'>About 디폴트 page</NavLink>
                    </Item>
                    <Item selected={pathname === "/about/product"}>
                        <NavLink to='/about/product'>리얼 About page</NavLink>
                        {/* <BtnText bg={props.bgWhite}></BtnText> */}
                    </Item>
              </NavWrap>
              {/* <NavLink to="/user" style={isActive => ({color: isActive ? "green" : "blue"})}>유저</NavLink> */}
              {/* <NavLink to="/user" activeStyle={{fontWeight: "bold", color: "red"}}>유저</NavLink> */}
              {/* <NavLink to="/user" activeStyle={activeStyle}>유저</NavLink> */}
            </AllWrap>
        </>
    );
  }


const AllWrap = styled.div`
    position: relative;
    width: 100%;
`

const BackBtn = styled.p`
    width: 200px;
    padding:20px;
    background: salmon;
    border-radius: 10px;

    font-size: 15px;
    text-align: center;

    cursor: pointer;

    &:hover{
        background: #000;
        color:#fff;
    }

`

const NavWrap = styled.ul`
  display: flex;
  align-items: center;

  width: 100%;
`

const Item = styled.li`
    width: 20%;

    & a{
        color: ${(props) => (props.selected ? "white" : "black")};
        background-color: ${(props) => (props.selected ? "#f1c40f" : "white")};

        /* ${({bg})=>{
            return bg ?
                `color:#FAAA00;`
                :
                `color: #fff;`
            }} */
    }

`


const NavLink = styled(Link)`
    display: block;
    width: 100%;
    padding:20px;
    background: salmon;
    border-radius: 10px;

    font-size:15px;
    text-align: center;

    &:hover{
        background: #000;
        color:#fff;
    }
   

`

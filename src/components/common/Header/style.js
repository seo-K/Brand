import styled from "styled-components";
import { Link } from "react-router-dom";

export const AllWrap = styled.div`
    position: relative;
    width: 100%;
`;

export const BackBtn = styled.p`
    width: 200px;
    padding: 20px;
    background: salmon;
    border-radius: 10px;

    font-size: 15px;
    text-align: center;

    cursor: pointer;

    &:hover {
        background: #000;
        color: #fff;
    }
`;

export const NavWrap = styled.ul`
    display: flex;
    align-items: center;

    width: 100%;
`;

export const Item = styled.li`
    width: 20%;

    & a {
        color: ${(props) => (props.selected ? "white" : "black")};
        background-color: ${(props) => (props.selected ? "#f1c40f" : "white")};

        /* ${({ bg }) => {
            return bg ? `color:#FAAA00;` : `color: #fff;`;
        }} */
    }
`;

export const NavLink = styled(Link)`
    display: block;
    width: 100%;
    padding: 20px;
    background: salmon;
    border-radius: 10px;

    font-size: 15px;
    text-align: center;

    &:hover {
        background: #000;
        color: #fff;
    }
`;

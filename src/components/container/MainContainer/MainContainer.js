import React from "react";
import * as S from "./style";

function MainContainer(props) {
    return <S.Container>{props.children}</S.Container>;
}

export default MainContainer;

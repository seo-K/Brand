import React from "react";
import * as S from "./style";
import { Btn, Input } from "../..";
import { dummy } from "../../../mock/dummy";
function Box1() {
  return (
    <S.Container>
      박스1
      <Btn />
      <Input />
      <div>
        {dummy.map((item) => (
          <span>{item.id}</span>
        ))}
      </div>
    </S.Container>
  );
}

export default Box1;

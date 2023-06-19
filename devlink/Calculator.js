import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Calculator.module.css";

export function Calculator({
  as: _Component = _Builtin.Block,
  display = "5",
  btnAdd = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "calculator-container")}
      tag="div"
    >
      <_Builtin.Heading tag="h1">{"Heading"}</_Builtin.Heading>
      <_Builtin.Link
        button={true}
        options={{
          href: "#",
        }}
        {...btnAdd}
      >
        {"+"}
      </_Builtin.Link>
      <_Builtin.Paragraph>{display}</_Builtin.Paragraph>
    </_Component>
  );
}

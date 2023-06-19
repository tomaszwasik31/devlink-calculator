import * as React from "react";
import * as Types from "./types";

declare function Calculator(props: {
  as?: React.ElementType;
  displayBig?: React.ReactNode;
  displaySmall?: React.ReactNode;
  btn1?: Types.Devlink.RuntimeProps;
  btn2?: Types.Devlink.RuntimeProps;
  btn3?: Types.Devlink.RuntimeProps;
  btn5?: Types.Devlink.RuntimeProps;
  btn6?: Types.Devlink.RuntimeProps;
  btn7?: Types.Devlink.RuntimeProps;
  btn8?: Types.Devlink.RuntimeProps;
  btn9?: Types.Devlink.RuntimeProps;
  btn0?: Types.Devlink.RuntimeProps;
  btn4?: Types.Devlink.RuntimeProps;
  btnPlus?: Types.Devlink.RuntimeProps;
  btnEqual?: Types.Devlink.RuntimeProps;
  btnMinus?: Types.Devlink.RuntimeProps;
  btnTimes?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;

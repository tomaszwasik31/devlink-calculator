import * as React from "react";
import * as Types from "./types";

declare function Calculator(props: {
  as?: React.ElementType;
  display?: React.ReactNode;
  btnAdd?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;

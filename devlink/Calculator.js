import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Calculator.module.css";

export function Calculator({
  as: _Component = _Builtin.Block,
  displayBig = "0",
  displaySmall = "0",
  btn1 = {},
  btn2 = {},
  btn3 = {},
  btn5 = {},
  btn6 = {},
  btn7 = {},
  btn8 = {},
  btn9 = {},
  btn0 = {},
  btn4 = {},
  btnPlus = {},
  btnEqual = {},
  btnMinus = {},
  btnTimes = {},
  btnDivide = {},
  btnMc = {},
  btnBackspace = {},
  btnC = {},
  btnDot = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "calculator-container")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "phone-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "display-container")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "speaker")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "speaker-detail")}
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "display-numbers-cointainer")}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "p-small-display")}
            >
              {displaySmall}
            </_Builtin.Paragraph>
            <_Builtin.Paragraph className={_utils.cx(_styles, "p-big-display")}>
              {displayBig}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "btn-container")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "btn", "smaller", "purple")}
            id={_utils.cx(
              _styles,
              "w-node-_2650e9fd-2121-89f8-215b-88309d300278-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btnC}
          >
            {"C"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn", "smaller", "purple")}
            id={_utils.cx(
              _styles,
              "w-node-_7487d25a-fde9-8889-ea6c-b4823e9804ae-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btnMc}
          >
            {"MC"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn-backspace")}
            button={false}
            options={{
              href: "#",
            }}
            {...btnBackspace}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "backspace-icon")}
              id={_utils.cx(
                _styles,
                "w-node-f73fd7e2-ca2f-8300-937c-2a4640c592ac-f12dcd85"
              )}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/649034c518828135d86e5cfc/64905dc7085ddf46f2708487_backspace-icon.svg"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn", "purple")}
            id={_utils.cx(
              _styles,
              "w-node-c8045954-ffbc-f99a-7a30-641b7b50cd55-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btnDivide}
          >
            {"÷"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-f2ac47d9-9d8a-a47b-a4f2-c212ea3b08f9-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn7}
          >
            {"7"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-_35785604-ec10-6ad7-ed30-2dd70edcc4f6-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn8}
          >
            {"8"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-c276be27-74c2-e3c0-766b-79cc2c912857-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn9}
          >
            {"9"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn", "purple")}
            id={_utils.cx(
              _styles,
              "w-node-_8e1195c0-f8d7-44b3-fc20-dfe280394a3a-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btnTimes}
          >
            {"x"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-_0b75ff08-9145-98fd-bb3b-9369e7044969-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn4}
          >
            {"4"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-e5db4573-eaa0-8d68-3a77-b0a06473370e-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn5}
          >
            {"5"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-_1f21dced-bb8e-b288-febe-d97b16308f77-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn6}
          >
            {"6"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn", "purple")}
            id={_utils.cx(
              _styles,
              "w-node-d362bbd0-4154-ee26-d54a-c2909e89f612-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btnMinus}
          >
            {"-"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-_0b6ed05f-17bb-2c73-6e75-ed6fe3cddc0b-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn1}
          >
            {"1"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-_76cb99b1-5d80-6793-92a9-7f85fba0f684-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn2}
          >
            {"2"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-_1a4353d3-515a-2956-196d-961d4f780314-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn3}
          >
            {"3"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn", "purple")}
            id={_utils.cx(
              _styles,
              "w-node-_7f3d7413-a660-48bf-bf57-d3048a0eb766-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btnPlus}
          >
            {"+"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-_29c880f4-0df3-32d5-75c5-2a4843b5f2e6-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btn0}
          >
            {"0"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn")}
            id={_utils.cx(
              _styles,
              "w-node-f6f3fa08-fb35-c0c5-34e4-0e22534f050a-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btnDot}
          >
            {"."}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn", "empty")}
            id={_utils.cx(
              _styles,
              "w-node-_3189a791-a86d-1e7c-33ac-0850797767a0-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
          />
          <_Builtin.Link
            className={_utils.cx(_styles, "btn", "equal")}
            id={_utils.cx(
              _styles,
              "w-node-_76e27f3e-c259-f598-769f-de4179d0d2f9-f12dcd85"
            )}
            button={true}
            options={{
              href: "#",
            }}
            {...btnEqual}
          >
            {"="}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

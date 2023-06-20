"use client";
import { useState } from "react";
import { Calculator } from "@/devlink";

export default function Home() {
  const [displayBig, setDisplayBig] = useState("0");
  const [displaySmall, setDisplaySmall] = useState({
    num: 0,
    operation: "",
  });

  function handleNumberBtn(number: number) {
    displayBig === "0"
      ? setDisplayBig(number.toString())
      : setDisplayBig((prevDisplay) => prevDisplay + number.toString());
  }

  function handleOp(symbol: string) {
    setDisplaySmall({ num: parseFloat(displayBig), operation: symbol });

    setDisplayBig("0");
  }

  function add(a: number, b: number) {
    return a + b;
  }
  function subtract(a: number, b: number) {
    return a - b;
  }

  function multi(a: number, b: number) {
    return a * b;
  }

  function divide(a: number, b: number) {
    return a / b;
  }

  function clearDisplaySmall() {
    setDisplaySmall({
      num: 0,
      operation: "",
    });
  }

  function clearAll() {
    setDisplayBig("0");
    clearDisplaySmall();
  }

  function backspace() {
    if (displayBig.length === 1 || displayBig === "0") {
      setDisplayBig("0");
    } else {
      setDisplayBig((prevDisplayBig) => prevDisplayBig.slice(0, -1));
    }
  }

  function calculate() {
    if (displaySmall.operation === "+") {
      setDisplayBig(add(displaySmall.num, parseFloat(displayBig)));
    } else if (displaySmall.operation === "-") {
      setDisplayBig(subtract(displaySmall.num, parseFloat(displayBig)));
    } else if (displaySmall.operation === "*") {
      setDisplayBig(multi(displaySmall.num, parseFloat(displayBig)));
    } else if (displaySmall.operation === "/") {
      setDisplayBig(divide(displaySmall.num, parseFloat(displayBig)));
    }

    clearDisplaySmall();
  }

  return (
    <Calculator
      displayBig={displayBig}
      displaySmall={displaySmall.num + displaySmall.operation}
      btn0={{ onClick: () => handleNumberBtn(0) }}
      btn1={{ onClick: () => handleNumberBtn(1) }}
      btn2={{ onClick: () => handleNumberBtn(2) }}
      btn3={{ onClick: () => handleNumberBtn(3) }}
      btn4={{ onClick: () => handleNumberBtn(4) }}
      btn5={{ onClick: () => handleNumberBtn(5) }}
      btn6={{ onClick: () => handleNumberBtn(6) }}
      btn7={{ onClick: () => handleNumberBtn(7) }}
      btn8={{ onClick: () => handleNumberBtn(8) }}
      btn9={{ onClick: () => handleNumberBtn(9) }}
      btnPlus={{ onClick: () => handleOp("+") }}
      btnMinus={{ onClick: () => handleOp("-") }}
      btnTimes={{ onClick: () => handleOp("*") }}
      btnDivide={{ onClick: () => handleOp("/") }}
      btnEqual={{ onClick: calculate }}
      btnC={{ onClick: clearAll }}
      btnMc={{ onClick: clearDisplaySmall }}
      btnBackspace={{ onClick: backspace }}
    />
  );
}

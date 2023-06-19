"use client";
import { Calculator } from "@/devlink";
import { useState, useEffect } from "react";

export default function Home() {
  const [displayBig, setDisplayBig] = useState("0");
  const [displaySmall, setDisplaySmall] = useState("0");
  const [inputValue, setInputValue] = useState("");
  const [lastOperation, setLastOperation] = useState("");

  function handleNumberBtn(number) {
    setInputValue(number.toString());
  }

  useEffect(() => {
    if (displaySmall === "0") {
      setDisplaySmall(inputValue);
    } else {
      setDisplaySmall((prevDisplaySmall) => prevDisplaySmall + inputValue);
    }
  }, [inputValue]);

  function handlePlus() {
    setDisplayBig(parseFloat(displayBig) + parseFloat(displaySmall));
    setDisplaySmall((prevDisplaySmall) => prevDisplaySmall + "+");
  }

  function clearDisplaySmall() {
    setDisplaySmall("0");
  }

  return (
    <>
      <Calculator
        displayBig={displayBig}
        displaySmall={displaySmall}
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
        btnPlus={{ onClick: () => handlePlus() }}
      />
    </>
  );
}

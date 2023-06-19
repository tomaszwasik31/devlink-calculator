"use client";
import { Calculator } from "@/devlink";

export default function Home() {
  function addFunction() {
    console.log("object");
  }
  return (
    <>
      <Calculator display="6" btnAdd={{ onClick: addFunction }} />
    </>
  );
}

import React, { useContext } from "react";
import { AppContext } from "../context.js/app-context";

export default function DisplayTheme() {
  const context = useContext(AppContext);
  return <div>{context.theme}</div>;
}

import React from "react";
import { useAppContext } from "../context.js/app-context";

export default function DisplayTheme() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  const context = useAppContext();
  return <div>{context.theme}</div>;
}

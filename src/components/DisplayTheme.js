import React from "react";
import { useAppContext } from "../context.js/app-reducer";

export default function DisplayTheme() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  // kenapa kita ambil state dan dispatch??, sebenarnya kita bisa ambil juga dispach tapi tidak dibutuhkan disini.
  // jadi kita pake state aja, karena yang kita kirimkan dalam provider adalah kedua value tersebut,
  // btw ketika kita console.log(), terdapat 2 nilai , yaitu state dan dispatch.
  // caradebugnya ,  const context = useAppContext();, console.log(context).
  // kita juga menggunakan [] destructuring. karena nilai nya array
  const [state] = useAppContext();
  return <div>{state.theme}</div>;
}

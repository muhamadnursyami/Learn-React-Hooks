import { useContext } from "react";
import { AppContext } from "../context.js/app-context";

export default function NavbarUserText() {
  const context = useContext(AppContext);

  return <span onClick={context.func}>Hi, User {context?.user?.name}!</span>;
}

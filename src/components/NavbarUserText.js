import { useAppContext } from "../context.js/app-context";

export default function NavbarUserText() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  const context = useAppContext();

  return <span onClick={context.func}>Hi, User {context?.user?.name}!</span>;
}

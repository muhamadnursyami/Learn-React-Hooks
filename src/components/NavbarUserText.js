import { useAppContext } from "../context.js/app-reducer";

export default function NavbarUserText() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  const [state] = useAppContext();

  return <span>Hi, User {state?.user?.name}!</span>;
}

import { useAppContext } from "../context.js/app-reducer";

export default function NavbarUserAvatar() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  const [state] = useAppContext();
  return <img src={state?.user?.avatar} alt="avatar" width="50" />;
}

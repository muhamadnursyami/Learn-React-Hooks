import { useAppContext } from "../context.js/app-context";

export default function NavbarUserAvatar() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  const context = useAppContext();
  return <img src={context?.user?.avatar} alt="avatar" width="50" />;
}

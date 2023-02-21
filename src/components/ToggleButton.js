import { useAppContext } from "../context.js/app-context";

export default function ToggleButton() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  const context = useAppContext();
  return (
    <div>
      <button
        onClick={() =>
          context.setTheme(context.theme === "light" ? "dark" : "light")
        }
      >
        ToggleButton
      </button>
    </div>
  );
}

import { useAppContext } from "../context.js/app-reducer";

export default function ToggleButton() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  //  kemudian kenapa ada [, dispacth], karena kita mengskip nilai statenya karena kita tidak membutuhkan state yang berada di index 1
  //  note: useAppContext(), itu didalamnya terdapat state dan dispatch, Note juga, state dan dispatch ini dalam array, maka kita menggunakan destructuring
  const [, dispatch] = useAppContext();
  return (
    <div>
      <button onClick={() => dispatch({ type: "toggle" })}>ToggleButton</button>
    </div>
  );
}

import React, { useReducer } from "react";

// Di function reducer memilik setidaknya 2 argumen yang 1, itu state,
// state adalah nilai awal dari counter, yaitu 0
// sedangkan  action, adalah sebuah aksi atau tindakan terhadap si state itu, contoh
// state disini kita return kan state +1 / state -1.
// Action juga ada lah sebuah nilai yang dikirim dari parameter dari state setCounter()
// { type: "decrement" } juga bisa langsung decrement
function reducer(state, action) {
  switch (action.type) {
    case "incerement":
      // jika nilai awal/ statenya itu adalah objeck, maka kita harus mengkasesnya dengan object pula.
      // dan jika di dalam object itu data nya lebih dari 1, maka kita harus merge terlebih dahulu, supaya
      // data data yang ada di object initialState seperti theme, itu dibawa ketika tombol di klik.
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return {
        ...state,
        count:
          state.count - action.payload === -2
            ? state.count
            : state.count - action.payload,
      };
    case "toggle":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw Error("State tidak di temukan");
  }
  // Note : Kita harus mengreturn hasil dari function ini,supaya kita dapat menampilkan hasilnya di browser
  // console.log(`state nilai awal ${state}`);
  // console.log(`action nilai yang di eksekusi${action}`);
}

// objeck untuk nilai awal reducer
const initialState = {
  count: 0,
  theme: "light",
};
export default function Reducer() {
  //Contoh jika kita menggunakan useState counter
  // const [counter, setCounter] = useState(0);
  // Contoh jika kita menggunakan Reducer
  // const [counter, setCounter] = useReducer(reducer, 0); reducer yang nilai awalnya 0
  // Reducer dengan nilai awalnya berupa objeck.
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      {/* <button
        onClick={() => setCounter(counter - 1 === -1 ? counter : counter - 1)}
      >
        -
      </button> */}
      {/* Kita bisa kirim objeck seperti ini, dan juga kita bisa kirim string dan yang lain. */}
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        -
      </button>
      <br />
      <span>{state.count}</span>
      <br />
      <button onClick={() => dispatch({ type: "incerement", payload: 2 })}>
        +
      </button>
      {/* <button onClick={() => setCounter(counter + 1)}>+</button> */}

      <br />
      {state.theme}
      <br />
      <button onClick={() => dispatch({ type: "toggle" })}>Toggle Theme</button>
    </div>
  );
}

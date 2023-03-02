import { createContext, useContext, useEffect, useReducer } from "react";
// Untuk Membuat  createContext menggunakan api createContext dari react
// kemudia kita settings nilai defautlnya, ini sangat penting, jika nilai
// atau Value, dari AppContext.provider tidak mengirim valuenya maka
// react akan mengirim nilai defaultnya, atau boleh kosong
// Jadi disini kita buat 2 function  didalam 1 file.
// yang 1 untuk membuat Context state management
// yang 2 ini kita langsung gunakan AppContext kemudian kita gunakan provider.
export const AppContext = createContext({});

//Kemudian kita custum hook agar tidak banyak import useContext
// jadi disini kita tidak akan menggunakan useContext(AppContext), kerena kita sudah custom hooknya
// kita hanya panggil useAppContext() saja.
export const useAppContext = () => {
  return useContext(AppContext);
};

// Function Reducer dalam state reducer
function reducer(state, action) {
  switch (action.type) {
    case "updateUser":
      return { ...state, user: action.payload };
    case "toggle":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw Error("Not Found");
  }
}

// Function nilai awal dalam state reeducer bentuk object
const initialState = {
  user: {},
  theme: "dark",
};
// Kita akan pakai useReducer
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Data nya
  useEffect(() => {
    const user = {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    };

    dispatch({ type: "updateUser", payload: user });
  }, []);

  // sebelum appContextValue di masukan kedalam value dari provider, kita harus
  // buat terlebih dahulu object untuk menampung nilai user, juga bisa berupa function ,string dll
  // disini saya contoh kan menggunakan array, karena pakai reducer. value state dan dispatch akan
  // dikirimkan kedalam provider, dan juga lebih clean code,.
  const appContextValue = [state, dispatch];
  return (
    // Component AppContext harus menggunakan provider, dan Component Navbar harus di bungkus dengan
    //    component AppContext dari value appContextValue, supaya nilai dari appContextValue bisa di pakai
    //    untuk suruh anak dari component Navbar

    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}

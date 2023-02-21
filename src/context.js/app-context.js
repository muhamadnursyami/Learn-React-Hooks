import { createContext, useContext, useEffect, useState } from "react";
// Untuk Membuat  createContext menggunakan api createContext dari react
// kemudia kita settings nilai defautlnya, ini sangat penting, jika nilai
// atau Value, dari AppContext.provider tidak mengirim valuenya maka
// react akan mengirim nilai defaultnya berupa empty : true, atau boleh kosong
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

export function AppProvider({ children }) {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState("dark");

  // Data nya
  useEffect(() => {
    const user = {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    };
    setUser(user);
  }, []);

  // sebelum appContextValue di masukan kedalam value dari provider, kita harus
  // buat terlebih dahulu object untuk menampung nilai user, juga bisa berupa function ,string dll
  // NOTE: jika kita ingin mengubah user atau theme maka kita harus mengaksesnya dengan function state nya
  // jika misalkan tidak ada statenya maka kita harus membuat statenya.
  const appContextValue = {
    user,
    // func: () => alert(1),
    setUser,
    theme,
    setTheme,
  };
  return (
    // Component AppContext harus menggunakan provider, dan Component Navbar harus di bungkus dengan
    //    component AppContext dari value appContextValue, supaya nilai dari appContextValue bisa di pakai
    //    untuk suruh anak dari component Navbar

    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}

import { useEffect, useState } from "react";
import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import ToggleButton from "./components/ToggleButton";
import { AppContext } from "./context.js/app-context";

function App() {
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
    <div className="App">
      {/* Component AppContext harus menggunakan provider, dan Component Navbar harus di bungkus dengan 
         component AppContext dari value appContextValue, supaya nilai dari appContextValue bisa di pakai
         untuk suruh anak dari component Navbar
        */}
      <AppContext.Provider value={appContextValue}>
        <Navbar />
        <hr />
        <Setting />
        <hr />
        <DisplayTheme />
        <ToggleButton />
      </AppContext.Provider>
    </div>
  );
}

export default App;

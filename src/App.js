import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import ToggleButton from "./components/ToggleButton";
import { AppProvider } from "./context.js/app-context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
        <hr />
        <Setting />
        <hr />
        <DisplayTheme />
        <ToggleButton />
      </AppProvider>
    </div>
  );
}

export default App;

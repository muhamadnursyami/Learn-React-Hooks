import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import ToggleButton from "./components/ToggleButton";
import { AppProvider } from "./context.js/app-reducer";

// import Reducer from "./components/Reducer";
function App() {
  return (
    <div className="App">
      {/* <Reducer /> */}
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

import React, { useContext } from "react";
import { AppContext } from "../context.js/app-context";

export default function ToggleButton() {
  const context = useContext(AppContext);
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

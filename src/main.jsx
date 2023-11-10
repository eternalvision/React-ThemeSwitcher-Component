import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeSwitcherContext, ThemeSwitcherProvider } from "./context";
import { ThemeSwitcherComponent } from "./theme";
import { App } from "./App.jsx";
import { Components } from "./components";

import "./css/index.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeSwitcherProvider>
            <App
                ThemeSwitcherContext={ThemeSwitcherContext}
                ThemeSwitcherComponent={ThemeSwitcherComponent}
                {...Components}
            />
        </ThemeSwitcherProvider>
    </React.StrictMode>
);

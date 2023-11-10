import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeSwitcherContext = createContext();

export const ThemeSwitcherProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeSwitcherContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeSwitcherContext.Provider>
    );
};

ThemeSwitcherProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

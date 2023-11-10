import { useEffect, useRef } from "react";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import PropTypes from "prop-types";

export const ThemeSwitcherComponent = ({ theme, setTheme }) => {
    const bodyRef = useRef(document.body);

    useEffect(() => {
        const { current } = bodyRef;
        current.classList.remove("light", "dark");
        current.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <button className="ThemeButton" onClick={toggleTheme}>
            {theme === "light" ? <RiSunLine /> : <RiMoonFill />}
        </button>
    );
};

ThemeSwitcherComponent.propTypes = {
    theme: PropTypes.string.isRequired,
    setTheme: PropTypes.func.isRequired,
};

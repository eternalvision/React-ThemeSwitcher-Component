import { useContext } from "react";
import PropTypes from "prop-types";

export const App = ({
    ThemeSwitcherContext,
    ThemeSwitcherComponent,
    TestComponent,
}) => {
    const { theme, setTheme } = useContext(ThemeSwitcherContext);

    return (
        <section className="ThemeFather">
            <TestComponent theme={theme} />{" "}
            <ThemeSwitcherComponent theme={theme} setTheme={setTheme} />
        </section>
    );
};

App.propTypes = {
    ThemeSwitcherContext: PropTypes.object.isRequired,
    ThemeSwitcherComponent: PropTypes.func.isRequired,
    TestComponent: PropTypes.func.isRequired,
};

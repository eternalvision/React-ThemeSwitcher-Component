import PropTypes from "prop-types";

export const TestComponent = ({ theme }) => {
    return <h1 className="TestComponent">{theme}</h1>;
};

TestComponent.propTypes = {
    theme: PropTypes.string.isRequired,
};

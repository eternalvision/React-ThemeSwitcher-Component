# **root.scss**

1. **Defining Root Variables:**

    - `:root { ... }`
    - This is a CSS pseudo-class that matches the root element of the document, which is the `html` element. Defining variables in `:root` makes them globally available throughout your stylesheet.
    - Variables are defined using the `--` prefix. This snippet defines four variables:
        - `--body-light-bg` and `--body-dark-bg` for background colors of the light and dark themes, respectively.
        - `--color-light` and `--color-dark` for text colors in the light and dark themes, respectively.

2. **Light Theme Styles:**

    - `body.light { ... }`
    - These styles are applied when the `body` element has a class of `light`.
    - `--body-bg` and `--color` are custom properties set to the values of `--body-light-bg` and `--color-light`, respectively. These variables can be used elsewhere in the CSS to apply consistent theming.

3. **Dark Theme Styles:**

    - `body.dark { ... }`
    - Similar to the light theme, but for when the `body` element has a class of `dark`.
    - The `--body-bg` and `--color` variables are set to the values of `--body-dark-bg` and `--color-dark`, respectively.

How It Works in a Themed Application:

-   When you switch between themes, typically a class (`light` or `dark`) is added to or removed from the `body` element. This can be done via JavaScript.
-   Depending on the class applied to the `body`, different sets of variables are activated (`--body-bg` and `--color`), which change the visual appearance of the website according to the defined theme.
-   Other CSS rules in your stylesheet can use these variables (e.g., `var(--body-bg)` for background color and `var(--color)` for text color) to apply consistent styling based on the current theme.

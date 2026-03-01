import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: '#0B3C5D',
        secondary: '#5DA9E9',
    }
};

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;
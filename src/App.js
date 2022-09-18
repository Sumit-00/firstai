import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { globalStyles } from "../src/shared/styles/global";
import theme from "../src/shared/styles/theme";

import { createBrowserHistory } from "history";

import Routes from "./pages/Router/routes";

function App() {
    const history = createBrowserHistory();
    return (
        <ThemeProvider theme={theme}>
            {globalStyles}
            <CssBaseline />
            <Router history={history}>
                <Routes />
            </Router>
        </ThemeProvider>
    );
}

export default App;

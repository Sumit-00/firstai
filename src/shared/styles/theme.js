import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
    typography: {
        fontFamily: "Nunito, sans-serif",
        htmlFontSize: 10,
        color: "#000",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1440,
        },
    },
    palette: {
        primary: {
            main: "#ef6e0b",
        },
        secondary: {
            main: "#002238",
            light: "#5B5B5B",
        },
        info: {
            main: "#0071BC",
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#002238",
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    display: "flex",
                    width: "4.8rem",
                    height: "4.8rem",
                    alignItems: "center",
                    justifyContent: "center",

                    "&:hover": {
                        backgroundColor: "inherit",
                        fontWeight: 600,
                    },

                    "&.Mui-selected": {
                        backgroundColor: "#fff",
                        borderRadius: "4px",

                        "&:hover": {
                            backgroundColor: "#fff",
                        },
                    },

                    "&.MuiPaginationItem-previousNext": {
                        color: "#EF6E0B",

                        "& > .MuiPaginationItem-icon": {
                            fontSize: "4rem",
                        },

                        "&.Mui-disabled": {
                            color: "#929292",
                        },
                    },
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    "&.MuiButton-root": {
                        textTransform: "none",
                        borderRadius: "8px",
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    border: "1px solid #C8C8C8",

                    "& legend": {
                        display: "none",
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                        display: "none",
                    },
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;

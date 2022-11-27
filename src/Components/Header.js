import React from "react";

import AppBar from "@mui/material/AppBar";

import { useNavigate } from "react-router-dom";

import {
    Stack,
    Box,
    Container,
    Button,
    Typography,
    Toolbar,
} from "@mui/material";

const pages = ["Products", "Pricing", "Resources", "Contact Us"];

function Header({ bgcolor, color = "#fff", route = "" }) {
    const navigate = useNavigate();
    const handleNavClick = (link) => {
        if (link === "Contact Us") {
            navigate("/contact-us");
        }
        if (link === "Pricing") {
            navigate("/pricing");
        }
    };
    return (
        <AppBar
            position="static"
            sx={{ bgcolor: bgcolor, pt: "3.2rem", pb: "6rem" }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        fontSize={["3.6rem"]}
                        sx={{
                            mr: "7rem",
                            display: { xs: "none", md: "flex" },
                            fontWeight: 900,
                            textDecoration: "none",
                            color: color,
                        }}
                    >
                        First Ai
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleNavClick(page)}
                                sx={{
                                    my: 2,
                                    display: "block",
                                    fontWeight: 700,
                                    fontSize: "1.8rem",
                                    mr: "4rem",
                                    color: color,
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        {route === "home" && (
                            <Button
                                onClick={() => navigate("/contact-us")}
                                variant="contained"
                                sx={{
                                    bgcolor: "#fff",
                                    color: "#000",
                                    p: "1rem 4rem",
                                    border: "1px solid #fff",
                                    "&.MuiButton-root": {
                                        fontWeight: 900,
                                        borderRadius: "3rem",
                                        boxShadow: "none",
                                    },
                                    "&:hover": {
                                        color: "#fff",
                                        bgcolor: "transparent",
                                        border: "1px solid #fff",
                                    },
                                }}
                            >
                                Get Early Access
                            </Button>
                        )}
                        {route !== "home" && (
                            <Button
                                onClick={() => navigate("/contact-us")}
                                variant="contained"
                                sx={{
                                    bgcolor: "#b165e9",
                                    color: "#fff",
                                    p: "1rem 4rem",
                                    border: "1px solid #fff",
                                    "&.MuiButton-root": {
                                        fontWeight: 900,
                                        borderRadius: "3rem",
                                        boxShadow: "none",
                                    },
                                    "&:hover": {
                                        color: "#000",
                                        bgcolor: "transparent",
                                        border: "1px solid #b165e9",
                                    },
                                }}
                            >
                                Get Early Access
                            </Button>
                        )}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;

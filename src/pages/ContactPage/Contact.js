/* eslint-disable no-useless-escape */

import React from "react";
import AppBar from "@mui/material/AppBar";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import "./style.css";

import Footer from "../../Components/Footer";

const pages = ["Products", "Pricing", "Resources", "Contact Us"];

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};

function Contact() {
    const [errors, setErrors] = React.useState();

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        if (name === "email") {
            if (!validEmailRegex.test(value)) {
                setErrors(true);
            } else {
                setErrors(false);
            }
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(errors)) {
            console.info("Valid Form");
        } else {
            console.error("Invalid Form");
        }
    };

    React.useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <AppBar
                position="static"
                sx={{ bgcolor: "#EFF0F6", pt: "3.2rem", pb: "6rem" }}
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
                                color: "#000",
                                display: { xs: "none", md: "flex" },
                                fontWeight: 900,
                                textDecoration: "none",
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
                                    sx={{
                                        my: 2,
                                        color: "#000",
                                        display: "block",
                                        fontWeight: 700,
                                        fontSize: "1.8rem",
                                        mr: "4rem",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ bgcolor: "#EFF0F6", pt: "3.2rem", pb: "6rem" }}>
                <Container maxWidth="xl">
                    <Typography
                        fontSize={["6.4rem"]}
                        fontWeight="900"
                        align="center"
                    >
                        Contact us
                    </Typography>
                    <Typography
                        fontSize={["1.8rem"]}
                        color="#000"
                        align="center"
                    >
                        Give us a call or drop by anytime, we endeavour to
                        answer all <br /> enquiries within 24 hours on business
                        days.
                    </Typography>
                </Container>
            </Box>
            <Box pt="5rem" pb="5rem">
                <Container maxWidth="xl">
                    <Stack>
                        <Typography
                            fontSize={["5.1rem"]}
                            fontWeight="900"
                            align="center"
                        >
                            Fill the details
                        </Typography>
                    </Stack>
                    <Stack alignItems="center" pt="4rem">
                        <form onSubmit={handleSubmit} noValidate>
                            <Stack direction="row" pb="2rem" columnGap="1rem">
                                <Box className="firstName">
                                    <label htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        className="form"
                                        type="text"
                                        name="firstName"
                                        onChange={handleChange}
                                        noValidate
                                        placeholder="Enter First Name"
                                    />
                                </Box>
                                <Box className="lastName">
                                    <label htmlFor="Last Name">Last Name</label>
                                    <input
                                        className="form"
                                        type="text"
                                        name="Last Name"
                                        onChange={handleChange}
                                        noValidate
                                        placeholder="Enter Last Name"
                                    />
                                </Box>
                            </Stack>

                            <Box className="email" pb="2rem">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="form"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    noValidate
                                    placeholder="Enter your Email id"
                                />
                                {errors && (
                                    <span className="error">
                                        Email is not valid
                                    </span>
                                )}
                            </Box>
                            <Box className="contact-details" pb="3rem">
                                <label htmlFor="contact-details">
                                    Contact No.
                                </label>
                                <input
                                    className="form"
                                    type="text"
                                    name="contact-details"
                                    onChange={handleChange}
                                    noValidate
                                    placeholder="Enter your Contact No"
                                />
                            </Box>
                            <Stack
                                className="submit"
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Button
                                    align="center"
                                    sx={{
                                        bgcolor: "#B165E9",
                                        color: "#fff",
                                        p: "9px 4.4rem",
                                        "&.MuiButton-root": {
                                            fontWeight: 700,
                                            borderRadius: "3rem",
                                        },
                                        "&:hover": {
                                            bgcolor: "#B165E9",
                                        },
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Container>
            </Box>
            <Footer />
        </>
    );
}

export default Contact;

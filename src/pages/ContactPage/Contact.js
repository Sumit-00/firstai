import React from "react";
import AppBar from "@mui/material/AppBar";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FbIcon from "../../Images/fb.svg";
import Twitter from "../../Images/twitter.svg";
import Instagram from "../../Images/instagram.svg";
import "./style.css";

const pages = ["Products", "Pricing", "Resources", "Contact Us"];

const footer = [
    { name: "Services", subLink: ["Logo", "UI/UX", "Packaging", "Request"] },
    { name: "Contact", subLink: ["About Us", "Teams", "Profile", "FAQ"] },
    {
        name: "Legals",
        subLink: ["Privacy", "Disclaimer", "Terms", "Company"],
    },
];

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
            <Box sx={{ bgcolor: "#EFF0F6", pb: "6rem", pt: "6rem" }}>
                <Container maxWidth="xl">
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Stack>
                            <Typography
                                fontSize={["3.6rem"]}
                                sx={{
                                    color: "#191D38",
                                    display: { xs: "none", md: "flex" },
                                    fontWeight: 900,
                                    textDecoration: "none",
                                    pb: "6rem",
                                }}
                            >
                                First Ai
                            </Typography>
                            <Typography
                                pb="4rem"
                                color="#585C65"
                                fontSize={["2rem"]}
                            >
                                Design agency that stand strong <br /> for 5
                                years to help company.
                            </Typography>
                            <Stack direction="row" alignItems="center">
                                <Box
                                    component="img"
                                    sx={{ width: "5rem" }}
                                    alt="FB icon"
                                    src={FbIcon}
                                    mr="3rem"
                                />
                                <Box
                                    component="img"
                                    sx={{ width: "5rem" }}
                                    alt="Twitter Icon"
                                    src={Twitter}
                                    mr="3rem"
                                />
                                <Box
                                    component="img"
                                    sx={{ width: "5rem" }}
                                    alt="Instagram"
                                    src={Instagram}
                                />
                            </Stack>
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            columnGap="15rem"
                        >
                            {footer.map((item) => (
                                <Stack>
                                    <Typography
                                        color="#40434A"
                                        fontSize={["2rem"]}
                                        fontWeight="700"
                                        pb="3rem"
                                    >
                                        {item.name}
                                    </Typography>
                                    {item.subLink.map((link) => (
                                        <Typography
                                            color="#70737C"
                                            fontSize={["1.8rem"]}
                                            pb="2.4rem"
                                        >
                                            {link}
                                        </Typography>
                                    ))}
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}

export default Contact;

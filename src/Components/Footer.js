import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack, Box, Container, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const footer = [
    { name: "Services", subLink: ["Logo", "UI/UX", "Packaging", "Request"] },
    { name: "Contact", subLink: ["About Us", "Teams", "Profile", "FAQ"] },
    {
        name: "Legals",
        subLink: ["Privacy", "Disclaimer", "Terms", "Company"],
    },
];

function Footer() {
    return (
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
                            First AI is a smart result driven AI engine
                            <br /> that helps to grow your investments on Ads.{" "}
                            <br />
                            First AI is all about optimization of Ads every
                            <br />
                            minute of every day making them reap benefits.
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <IconButton
                                onClick={() =>
                                    window.open(
                                        "https://www.linkedin.com/company/first-sight/",
                                        "_blank",
                                        "noopener,noreferrer"
                                    )
                                }
                                sx={{
                                    bgcolor: "#6874DD",
                                    "&:hover": {
                                        bgcolor: "#6874DD",
                                    },
                                }}
                            >
                                <LinkedInIcon htmlColor="#fff" />
                            </IconButton>
                            <IconButton
                                onClick={() =>
                                    window.open(
                                        "https://www.instagram.com/firstsight.in/",
                                        "_blank",
                                        "noopener,noreferrer"
                                    )
                                }
                                sx={{
                                    bgcolor: "#6874DD",
                                    "&:hover": {
                                        bgcolor: "#6874DD",
                                    },
                                }}
                            >
                                <InstagramIcon htmlColor="#fff" />
                            </IconButton>
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
    );
}

export default Footer;

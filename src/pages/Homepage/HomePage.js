import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DemoImage from "../../Images/demo.svg";
import Meta from "../../Images/meta.svg";
import Adwords from "../../Images/adwords.svg";
import Package from "../../Images/package.svg";
import Launch from "../../Images/launch.svg";
import Creativity from "../../Images/creativity.svg";
import Cart from "../../Images/cart.svg";
import Install from "../../Images/install.svg";
import Saas from "../../Images/saas.svg";
import Building from "../../Images/building.svg";
import FbIcon from "../../Images/fb.svg";
import Twitter from "../../Images/twitter.svg";
import Instagram from "../../Images/instagram.svg";
import Grid from "@mui/material/Grid";

const pages = ["Products", "Pricing", "Resources", "Contact Us"];

const platforms = [
    {
        name: "Facebook Ads",
        text: "We have designed logo for 100+ brands and company with great design outcome.",
        icon: Meta,
    },
    {
        name: "Google Ads",
        text: "We’ve completed 50+ app and 30+ websites design for the startups and company.",
        icon: Adwords,
    },
    {
        name: "Snapchat Ads",
        text: "We design packaging for your products and we have finished 30+ packaging designs.",
        icon: Package,
    },
];

const secretWeapon = [
    {
        icon: Launch,
        title: "Enterprise",
        text: "We have designed logo for 100+ brands and company with great design outcome.",
    },
    {
        icon: Creativity,
        title: "Agency",
        text: "We have designed logo for 100+ brands and company with great design outcome.",
    },
    {
        icon: Cart,
        title: "E-commerce",
        text: "We have designed logo for 100+ brands and company with great design outcome.",
    },
    {
        icon: Install,
        title: "App install",
        text: "We have designed logo for 100+ brands and company with great design outcome.",
    },
    {
        icon: Saas,
        title: "SaaS",
        text: "We have designed logo for 100+ brands and company with great design outcome.",
    },
    {
        icon: Building,
        title: "Real-Estate",
        text: "We have designed logo for 100+ brands and company with great design outcome.",
    },
];

const footer = [
    { name: "Services", subLink: ["Logo", "UI/UX", "Packaging", "Request"] },
    { name: "Contact", subLink: ["About Us", "Teams", "Profile", "FAQ"] },
    {
        name: "Legals",
        subLink: ["Privacy", "Disclaimer", "Terms", "Company"],
    },
];

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <AppBar
                position="static"
                sx={{ bgcolor: "#b165e9", pt: "3.2rem", pb: "6rem" }}
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
                                color: "#fff",
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
                                        color: "white",
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
                        <Stack direction="row" alignItem="center" spacing={1}>
                            <Button
                                onClick={() => navigate("/contact-us")}
                                variant="contained"
                                sx={{
                                    bgcolor: "#fff",
                                    color: "#000",
                                    p: "1rem 4rem",
                                    "&.MuiButton-root": {
                                        fontWeight: 900,
                                        borderRadius: "3rem",
                                    },
                                    transition: "0.5s ease-in",
                                    "&:hover": {
                                        bgcolor: "#fff",
                                        opacity: 0.8,
                                    },
                                }}
                            >
                                Get Early Access
                            </Button>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ bgcolor: "#b165e9", pb: "6rem" }}>
                <Container maxWidth="xl">
                    <Stack
                        direction="row"
                        alignItems="center"
                        p="0 4rem"
                        spacing={6}
                    >
                        <Stack>
                            <Typography>
                                <Typography
                                    fontSize={["6.4rem"]}
                                    fontWeight="800"
                                    color="#fff"
                                    sx={{ lineHeight: "0.6" }}
                                >
                                    Scale results.
                                </Typography>
                                <Typography
                                    fontSize={["6.4rem"]}
                                    fontWeight="800"
                                    color="#fff"
                                >
                                    Not workload
                                </Typography>
                            </Typography>
                            <Typography
                                sx={{ color: "#fff", fontSize: "1.8rem" }}
                            >
                                Firstai automates your ad management routine so
                                you can focus on reaching results, faster.
                            </Typography>
                            <Stack
                                direction="row"
                                alignItems="center"
                                pt="3rem"
                            >
                                <Typography
                                    color="#fff"
                                    fontWeight="900"
                                    mr="4rem"
                                >
                                    Try for Free
                                </Typography>
                                <Button
                                    sx={{
                                        bgcolor: "#fff",
                                        color: "#000",
                                        p: "1rem 4rem",
                                        "&.MuiButton-root": {
                                            fontWeight: 700,
                                            borderRadius: "3rem",
                                        },
                                    }}
                                >
                                    Book a Demo
                                </Button>
                            </Stack>
                        </Stack>
                        <Stack sx={{ width: "60rem" }}>
                            <Box
                                component="img"
                                sx={{}}
                                alt="Demo Image"
                                src={DemoImage}
                            ></Box>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box bgcolor="#EFF0F6" p="5rem 0">
                <Container maxWidth="xl">
                    <Stack sx={{ padding: "0 4rem" }}>
                        <Typography
                            color="#27292E"
                            fontWeight="800"
                            fontSize={["5rem"]}
                            align="center"
                            pb="4rem"
                        >
                            Three Platforms <br /> Managed by one tool
                        </Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-evenly"
                        >
                            {platforms.map((item) => (
                                <Stack
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{
                                        bgcolor: "#fff",
                                        borderRadius: "3rem",
                                        p: "5rem 0",
                                        width: "35rem",
                                    }}
                                >
                                    <Box>
                                        <Box
                                            component="img"
                                            sx={{
                                                bgcolor: "#EBECF6",
                                                p: "2rem",
                                                borderRadius: "2rem",
                                            }}
                                            alt="img"
                                            src={item.icon}
                                        ></Box>
                                    </Box>
                                    <Typography
                                        fontSize={["3rem"]}
                                        fontWeight="700"
                                        p="4rem 0"
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography
                                        align="center"
                                        p="0 3.5rem"
                                        color="#5F626B"
                                    >
                                        {item.text}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack alignItems="center" pt="7rem">
                        <Typography
                            fontSize={["5rem"]}
                            color="#27292E"
                            fontWeight="700"
                        >
                            Increase Your <br /> ROAS with AI
                        </Typography>
                        <Typography color="#585C65">
                            Simply provide the machine with your KPIs and
                            targets, and the intelligent algorithms will <br />
                            autonomously optimize your account 24/7, freeing you
                            to focus on what you’re good at.
                        </Typography>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{ bgcolor: "#fff", pb: "6rem", pt: "6rem" }}>
                <Container maxWidth="xl">
                    <Stack
                        direction="row"
                        alignItems="center"
                        p="0 4rem"
                        spacing={6}
                    >
                        <Stack>
                            <Typography>
                                <Typography
                                    fontSize={["6.4rem"]}
                                    fontWeight="800"
                                    color="#27292E"
                                    sx={{ lineHeight: "0.8" }}
                                >
                                    Put campaign growth
                                </Typography>
                                <Typography
                                    fontSize={["6.4rem"]}
                                    fontWeight="800"
                                    color="#27292E"
                                >
                                    on autopilot
                                </Typography>
                            </Typography>
                            <Typography
                                pt="3.3rem"
                                sx={{ color: "#000", fontSize: "1.8rem" }}
                            >
                                Our robust automation engine can help you adjust
                                bids, pause ads, and more. <br />
                                And external data integration enables creative
                                strategies.
                            </Typography>
                            <Stack
                                direction="row"
                                alignItems="center"
                                pt="3rem"
                            >
                                <Button
                                    sx={{
                                        bgcolor: "#B165E9",
                                        color: "#fff",
                                        p: "1rem 4rem",
                                        "&.MuiButton-root": {
                                            fontWeight: 700,
                                            borderRadius: "3rem",
                                        },
                                    }}
                                >
                                    Book a Demo
                                </Button>
                            </Stack>
                        </Stack>
                        <Stack sx={{ width: "60rem" }}>
                            <Box
                                component="img"
                                sx={{}}
                                alt="Demo Image"
                                src={DemoImage}
                            ></Box>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box bgcolor="#EFF0F6" p="6rem 0">
                <Container maxWidth="xl">
                    <Stack>
                        <Typography
                            color="#27292E"
                            fontSize={["5rem"]}
                            fontWeight="700"
                            align="center"
                            pb="5rem"
                            pt="5rem"
                        >
                            The Secrect Weapon <br /> of Advertiser
                        </Typography>
                        <Grid container rowSpacing={6} columnSpacing={10}>
                            {secretWeapon.map((item) => (
                                <Grid item xs={4}>
                                    <Stack>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                        >
                                            <Box
                                                component="img"
                                                sx={{ width: "10%" }}
                                                alt={item.title}
                                                src={item.icon}
                                            />
                                            <Typography
                                                fontSize={["3rem"]}
                                                fontWeight="700"
                                                pl="1.5rem"
                                                color="#27292E"
                                            >
                                                {item.title}
                                            </Typography>
                                        </Stack>
                                        <Typography
                                            color="#5F626B"
                                            fontSize={["1.8rem"]}
                                            lineHeight={2}
                                            pt="2.2rem"
                                        >
                                            {item.text}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{ bgcolor: "#fff", pb: "6rem", pt: "6rem" }}>
                <Container maxWidth="xl">
                    <Stack>
                        <Typography
                            color="#27292E"
                            align="center"
                            fontSize={["5rem"]}
                            fontWeight="700"
                        >
                            Get started Now
                        </Typography>
                        <Typography
                            color="#585C65"
                            fontSize={["1.8rem"]}
                            lineHeight={2}
                            align="center"
                            pt="2rem"
                        >
                            We have design-related blog so we can share our
                            thought and rutinity in our blog that updated <br />
                            weekly. We will not spam you, we promise.
                        </Typography>
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
};
export default HomePage;

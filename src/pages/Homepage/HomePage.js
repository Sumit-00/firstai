import * as React from "react";

import {
    Stack,
    Box,
    Container,
    Button,
    Typography,
    Toolbar,
    Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
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

import Footer from "../../Components/Footer";

import Header from "../../Components/Header";

const platforms = [
    {
        name: "Facebook Ads",
        text: "India is expected to spend Rs 28,249 crore by 2022 on Facebook ads. Run Ads on Facebook and Instagram to increase awareness amongst niche audiences. Run dynamic Brand awareness and retargeting campaign ads to increase sales.",
        icon: Meta,
    },
    {
        name: "Google Ads",
        text: "The average business spends anywhere from $12,000 to $120,000 per year. At First AI, we offer you assured results month on month with smart spends, calculated optimisation and minimum efforts.",
        icon: Adwords,
    },
    {
        name: "Snapchat Ads",
        text: "Snapchat generated a revenue of US$911 million by the end of 2020. More than half the revenue was contributed by  commercial ad spends on the platform. Inspire action from people who matter to your business with a public profile made exclusively for your business. Run ads that impact and make a difference for your business.",
        icon: Package,
    },
];

const secretWeapon = [
    {
        icon: Launch,
        title: "Enterprise",
        text: "Our Ad budgets don’t limit. Enterprises can use First AI to create optimized ads that help them reap benefits from minimum spends.",
    },
    {
        icon: Creativity,
        title: "Agency",
        text: "Running multi-platform Advertisements for multiple clients takes abundance of time and resources. Cut back on spending with our AI support.",
    },
    {
        icon: Cart,
        title: "E-commerce",
        text: "To ensure ecommerce sales picks up, sellers need to understand the visitors at every milestone, visitors who checkout but don't complete transactions. This data helps the sellers to understand flaws and UI distractions at every level.",
    },
    {
        icon: Install,
        title: "App install",
        text: "Apps need to be marketed to ensure downloads from app stores. Use our AI tools to smartly assess how, when and to whom to market the app downloads.",
    },
    {
        icon: Saas,
        title: "SaaS",
        text: "Major SaaS companies own multiple products and managing ads individually for each product is tedious. Our AI powered dashboard allows you to manage all products across all channels.",
    },
    {
        icon: Building,
        title: "Real-Estate",
        text: "AI powered dashboard help realtors to see the traction obtained on different ads placed across different sites and projects for multiple regions. The one stop destination to see your live progress.",
    },
];

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header bgcolor="#b165e9" route="home" />
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
                                    onClick={() => navigate("/contact-us")}
                                    sx={{
                                        bgcolor: "#fff",
                                        color: "#000",
                                        p: "1rem 4rem",
                                        border: "1px solid #fff",
                                        "&.MuiButton-root": {
                                            fontWeight: 700,
                                            borderRadius: "3rem",
                                        },
                                        "&:hover": {
                                            color: "#fff",
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
                            alignItems="stretch"
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
                                    onClick={() => navigate("/contact-us")}
                                    sx={{
                                        bgcolor: "#B165E9",
                                        color: "#fff",
                                        p: "1rem 4rem",
                                        border: "1px solid #fff",
                                        "&.MuiButton-root": {
                                            fontWeight: 700,
                                            borderRadius: "3rem",
                                        },
                                        "&:hover": {
                                            color: "#000",
                                            border: "1px solid #B165E9",
                                            bgcolor: "transparent",
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
                <Container maxWidth="xl" sx={{ paddingBottom: "5rem" }}>
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
                        <Stack
                            direction="row"
                            alignItems="center"
                            pt="3rem"
                            justifyContent="center"
                        >
                            <Button
                                onClick={() => navigate("/contact-us")}
                                sx={{
                                    bgcolor: "#B165E9",
                                    color: "#fff",
                                    p: "1rem 4rem",
                                    border: "1px solid #fff",
                                    "&.MuiButton-root": {
                                        fontWeight: 700,
                                        borderRadius: "3rem",
                                    },
                                    "&:hover": {
                                        color: "#000",
                                        border: "1px solid #B165E9",
                                        bgcolor: "transparent",
                                    },
                                }}
                            >
                                Book a Demo
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Footer />
        </>
    );
};
export default HomePage;

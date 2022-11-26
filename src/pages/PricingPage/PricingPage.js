import React from "react";
import {
    AppBar,
    Container,
    Stack,
    Typography,
    Box,
    Toolbar,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Slider,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Footer from "../../Components/Footer";

import { styled } from "@mui/material/styles";

const pages = ["Products", "Pricing", "Resources", "Contact Us"];

const accordionDetails = [
    {
        title: "What forms of payment do you accept?",
        desc: "We prefer card transactions as the most efficient, additional options are available for enterprise clients.",
    },
    {
        title: "Can I try before I buy?",
        desc: "Sure, there is a 14-day free trial with unlimited access to all of FirstAI's features.",
    },
    {
        title: "What happens to my rules and reports when the trial ends? ",
        desc: "Once your trial expires, your automated rules and reports will be disabled. To re-enable them, choose the plan that works best for you. You can upgrade before the trial expires to transition smoothly.",
    },
    {
        title: "What if my ad spend exceeds my plan's limits?",
        desc: "If you exceeded your plan's limit, you would be prompted to upgrade. You will be notified by email. All of your reports and automation rules will stay intact, but you won't be able to create new rules or edit the existing ones until you've upgraded.",
    },
    {
        title: "How is the price determined?",
        desc: "The price is determined based on your monthly ad spend. Monthly ad spend is the total amount of ad budgets across all of the ad accounts connected to First Ai. If your monthly spend changes, you can upgrade or downgrade your subscription at any time.",
    },
    {
        title: "How do I get charged?",
        desc: "The pricing is based on your monthly ad spend across all ad accounts you connect to Revealbot (Facebook, Google, Snapchat). All First Ai features are available irrespective of the selected plan.",
    },
];

function valuetext(value) {
    return `$${value}`;
}

const iOSBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
    height: "6px",
    padding: "15px 0",
    "& .MuiSlider-thumb": {
        height: 28,
        width: 28,
        backgroundColor: "#fff",
        boxShadow: iOSBoxShadow,
        "&:focus, &:hover, &.Mui-active": {
            boxShadow:
                "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    "& .MuiSlider-valueLabel": {
        fontSize: 12,
        fontWeight: "normal",
        top: -6,
        backgroundColor: "unset",
        color: theme.palette.text.primary,
        "&:before": {
            display: "none",
        },
        "& *": {
            background: "transparent",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
        },
    },
    "& .MuiSlider-track": {
        border: "none",
    },
    "& .MuiSlider-rail": {
        opacity: 0.5,
        backgroundColor: "#EBCFFF",
    },
    "& .MuiSlider-mark": {
        backgroundColor: "#bfbfbf",
        height: 8,
        width: 1,
        "&.MuiSlider-markActive": {
            opacity: 1,
            backgroundColor: "currentColor",
        },
    },
    "& .MuiSlider-markLabel": {
        fontSize: 14,
    },
}));

const marks = [
    {
        value: 0,
        label: "$0",
    },
    {
        value: 100,
        label: "$100",
    },
    {
        value: 1000,
        label: "$1000",
    },
    {
        value: 3000,
        label: "$3000",
    },
    {
        value: 5000,
        label: "$5000",
    },
    {
        value: 7000,
        label: "$7000",
    },
    {
        value: 10000,
        label: "$10k",
    },
];

function PricingPage() {
    const [spentLimit, setSpentLimit] = React.useState(200);
    const [monthlyCharges, setMonthlyCharges] = React.useState(44);
    const handleChange = (e) => {
        const value = e.target.value;
        setSpentLimit(e.target.value);

        if (value <= 1000) {
            setMonthlyCharges(44);
        } else if (value > 1000 && value <= 3000) {
            setMonthlyCharges(71);
        } else if (value > 3000 && value <= 5000) {
            setMonthlyCharges(87);
        } else {
            setMonthlyCharges(135);
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
                                        "&:hover": {
                                            bgcolor: "transparent",
                                        },
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
                        fontSize={["5.4rem"]}
                        fontWeight="900"
                        textAlign="center"
                    >
                        Ad-spend based pricing
                    </Typography>
                    <Typography
                        fontSize={["5.4rem"]}
                        fontWeight="900"
                        textAlign="center"
                    >
                        that fits every advertiser
                    </Typography>
                    <Typography textAlign="center">
                        Start your trial now, pick up the plan later.
                    </Typography>
                </Container>
            </Box>
            <Stack m="5.6rem 0">
                <Stack alignItems="center" justifyContent="center">
                    <Typography fontSize={["2.8rem"]} fontWeight={600}>
                        Choose the right plan
                    </Typography>
                    <Typography fontSize={["2.8rem"]} fontWeight={600}>
                        Based on your monthly ad spend
                    </Typography>
                </Stack>
                <Container maxWidth="xl">
                    <Stack alignItems="center" mt="8.5rem">
                        <IOSSlider
                            onChange={handleChange}
                            aria-label="Custom marks"
                            defaultValue={200}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="on"
                            step={500}
                            marks={marks}
                            max={10000}
                            min={100}
                            sx={{
                                color: "#B165E9",
                                width: "945px",
                            }}
                        />
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        mt="5rem"
                        spacing={1}
                    >
                        <Typography fontSize={["2rem"]} fontWeight={500}>
                            Ad spend limit:
                        </Typography>
                        <Typography
                            fontSize={["2rem"]}
                            fontWeight={600}
                            bgcolor="#EBCFFF"
                            borderRadius="8px"
                            padding="6px 10px"
                        >
                            ${spentLimit}
                        </Typography>
                    </Stack>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        mt="1.4rem"
                    >
                        <Typography fontSize={["2.5rem"]} fontWeight={600}>
                            ${monthlyCharges}/month
                        </Typography>
                    </Stack>
                </Container>
            </Stack>
            <Stack
                m="5.6rem 0"
                justifyContent="center"
                alignItems="center"
                direction="row"
            >
                <Container maxWidth="xl">
                    <Typography
                        textAlign="center"
                        mb="5.6rem"
                        fontSize={["2.8rem"]}
                        fontWeight={600}
                    >
                        Frequently asked questions
                    </Typography>
                    {accordionDetails.map((item) => (
                        <Accordion
                            sx={{ width: "50%", margin: "auto" }}
                            disableGutters
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon htmlColor="#1E232F" />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                    fontSize={["1.8rem"]}
                                    fontWeight={600}
                                >
                                    {item.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="#585C65">
                                    {item.desc}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Stack>
            <Footer />
        </>
    );
}

export default PricingPage;

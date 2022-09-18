/* eslint-disable import/no-unresolved */
import * as React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../Homepage/HomePage";
import Contact from "../ContactPage/Contact";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contact-us" element={<Contact />}></Route>
        </Routes>
    );
}

export default AppRoutes;

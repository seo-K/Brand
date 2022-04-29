import React, { useEffect, useState } from "react";
import GlobalStyle from "./utils/GlobalStyle";

import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import * as Pages from "./pages";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <ScrollToTop />
            <>
                <Routes>
                    {/* <Route path="/" element={<Pages.MainPage />} />
        <Route path="/sub" element={<Pages.SubPage />} /> */}
                    <Route path="/" element={<Pages.MainPage />} />
                    {/* <Route path="/*" element={<Pages.NotFound />} /> */}
                </Routes>
            </>
        </>
    );
}

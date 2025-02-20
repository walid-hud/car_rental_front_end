import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import "./src/css/global.css"
import "./src/css/desktop.css"
import "./src/css/laptop.css"
import "./src/css/mobile.css"
import Home from "./src/pages/Home";
import Favorites from "./src/pages/Favorites";
import Cars from "./src/pages/Cars";
import NotFound from "./src/pages/NotFound";
import Layout from "./src/components/Layout";

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cars/:id" element={<Cars />} />
                <Route path="/notFound" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);


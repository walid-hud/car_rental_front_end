import React from "react";
import { createRoot } from "react-dom/client";
import { createRoutesFromElements , createBrowserRouter , RouterProvider , Route  } from "react-router-dom"
import "./src/css/global.css"
import "./src/css/desktop.css"
import "./src/css/laptop.css"
import "./src/css/mobile.css"
import Home from "./src/pages/Home";
import Favorites from "./src/pages/Favorites";
import Cars from "./src/pages/Cars";
import AllCars from "./src/pages/AllCars";
import NotFound from "./src/pages/NotFound";
import Layout from "./src/components/Layout";
import { carsPageLoader } from "./src/components/functions";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cars/:id" element={<Cars />} />
        <Route path="/cars/" element={<AllCars />} loader={carsPageLoader} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
    </Route>
))

const root = createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} >
        
    </RouterProvider>
);


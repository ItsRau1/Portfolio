import { Route, Routes } from "react-router-dom";

import { About } from "./pages/about";
import { Home } from "./pages/home";
import { DefaultLayout } from "./pages/layouts/DefaultLayout";
import { Projects } from "./pages/projects";
import { Resume } from "./pages/resume";

export function Router () {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}> 
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Route>
        </Routes>
    )
}
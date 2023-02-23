import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import PostShow from "../pages/postShow";
import { routes } from "../utils/variables";

export const RoutesSystem = () => {
    return (
        <Router>
            <Routes>
                <Route path={routes.home} element={<Dashboard />} />
                <Route path={routes.dashboard} element={<Dashboard />} />
                {/* <Route path={routes.postShow(':id', ':slug')} element={<PostShow />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default RoutesSystem;
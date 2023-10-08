// main file
import { createRoot } from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import MainPageLayout from "./layouts/MainPageLayout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPageLayout />} />
        </Routes>
    );
}

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

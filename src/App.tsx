import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";
import AboutPage from "./pages/about-page";
import PricingPage from "./pages/pricing-page";
import ContactPage from "./pages/contact-page";
import EscapePage from "./pages/fine-art/escape-page";
import EtherialPage from "./pages/fine-art/etherial-page";
import IllusionPage from "./pages/fine-art/illusion-page";
import LoginPage from "./pages/login-page";
import AdminpanelPage from "./pages/admin-page";
import ExhibitsPage from "./pages/exhibits-page";
import LocalArtPage from "./pages/local-art/local-art-page";
import EssentialPage from "./pages/fine-art/essential-page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/exhibits" element={<ExhibitsPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminpanelPage />} />

            <Route path="/fine-art/escape" element={<EscapePage />} />
            <Route path="/fine-art/illusion" element={<IllusionPage />} />
            <Route path="/fine-art/etherial" element={<EtherialPage />} />
            <Route path="/fine-art/essential" element={<EssentialPage />} />
            <Route path="/local-art" element={<LocalArtPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

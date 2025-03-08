import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';
import AboutPage from './pages/about-page';
import PricingPage from './pages/pricing-page';
import ContactPage from './pages/contact-page';
import LoginPage from './pages/login-page';
import AdminpanelPage from './pages/admin-page';
import ExhibitsPage from './pages/exhibits-page';
import AbstractPage from './pages/collections/abstract-page';
import LocalPage from "./pages/collections/local-page";
import BlackAndWhitePage from "./pages/collections/black-and-white-page";
import ContemporaryPage from "./pages/collections/contemporary-page";
import ImpressionismPage from "./pages/collections/impressionism-page";
import SeascapePage from "./pages/collections/seascape-page";
import SurrealismPage from "./pages/collections/surrealism-page";
import WildlifePage from "./pages/collections/wildlife-page";
import MinimalistPage from "./pages/collections/minimalist-page";
import CollectionsPage from "./pages/collections-page";

function App() {
    return (
        <Routes>
            {/* Pages */}
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/exhibits' element={<ExhibitsPage />} />
            <Route path='/collections' element={<CollectionsPage />} />

            {/* Gallery Pages */}
            <Route path='/collections/minimalist' element={<MinimalistPage />} />
            <Route path='/collections/abstract' element={<AbstractPage />} />
            <Route path='/collections/local' element={<LocalPage />} />
            <Route path='/collections/black-and-white' element={<BlackAndWhitePage />} />
            <Route path='/collections/contemporary' element={<ContemporaryPage />} />
            <Route path='/collections/impressionism' element={<ImpressionismPage />} />
            <Route path='/collections/seascape' element={<SeascapePage />} />
            <Route path='/collections/surrealism' element={<SurrealismPage />} />
            <Route path='/collections/wildlife' element={<WildlifePage />} />

            {/* Admin Pages */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/admin' element={<AdminpanelPage />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

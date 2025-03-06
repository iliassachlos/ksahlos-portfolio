import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';
import AboutPage from './pages/about-page';
import PricingPage from './pages/pricing-page';
import ContactPage from './pages/contact-page';
import LoginPage from './pages/login-page';
import AdminpanelPage from './pages/admin-page';
import ExhibitsPage from './pages/exhibits-page';
import AbstractPage from './pages/collection/abstract-page';
import CollectionPage from './pages/collection-page';
import LocalPage from "./pages/collection/local-page";
import BlackAndWhitePage from "./pages/collection/black-and-white-page";
import ContemporaryPage from "./pages/collection/contemporary-page";
import ImpressionismPage from "./pages/collection/impressionism-page";
import MinimalPage from "./pages/collection/minimal-page";
import SeascapePage from "./pages/collection/seascape-page";
import SurrealismPage from "./pages/collection/surrealism-page";
import WildlifePage from "./pages/collection/wildlife-page";
import MinimalistPage from "./pages/collection/minimalist-page";

function App() {
    return (
        <Routes>
            {/* Pages */}
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/exhibits' element={<ExhibitsPage />} />
            <Route path='/collection' element={<CollectionPage />} />

            {/* Gallery Pages */}
            <Route path='/collection/minimalist' element={<MinimalistPage />} />
            <Route path='/collection/abstract' element={<AbstractPage />} />
            <Route path='/collection/local' element={<LocalPage />} />
            <Route path='/collection/black-and-white' element={<BlackAndWhitePage />} />
            <Route path='/collection/contemporary' element={<ContemporaryPage />} />
            <Route path='/collection/impressionism' element={<ImpressionismPage />} />
            <Route path='/collection/minimal' element={<MinimalPage />} />
            <Route path='/collection/seascape' element={<SeascapePage />} />
            <Route path='/collection/surrealism' element={<SurrealismPage />} />
            <Route path='/collection/wildlife' element={<WildlifePage />} />

            {/* Admin Pages */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/admin' element={<AdminpanelPage />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

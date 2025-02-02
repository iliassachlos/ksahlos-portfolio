import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';
import AboutPage from './pages/about-page';
import PricingPage from './pages/pricing-page';
import ContactPage from './pages/contact-page';
import EscapePage from './pages/fine-art/escape-page';
import LoginPage from './pages/login-page';
import AdminpanelPage from './pages/admin-page';
import ExhibitsPage from './pages/exhibits-page';
import LocalArtPage from './pages/local-art/local-art-page';
import AbstractPage from './pages/fine-art/abstract-page';
import MinimalistPage from './pages/fine-art/minimalist-page';
import MinimalistBwPage from './pages/fine-art/illusion-page';

function App() {
    return (
        <Routes>
            {/* Pages */}
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/exhibits' element={<ExhibitsPage />} />

            {/* Gallery Pages */}
            <Route path='/fine-art/minimalist' element={<MinimalistPage />} />
            <Route path='/fine-art/minimalist-bw' element={<MinimalistBwPage />} />
            <Route path='/fine-art/abstract' element={<AbstractPage />} />
            <Route path='/fine-art/escape' element={<EscapePage />} />
            <Route path='/local-art' element={<LocalArtPage />} />

            {/* Admin Pages */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/admin' element={<AdminpanelPage />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

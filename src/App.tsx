import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import NotFoundPage from "./pages/not-found-page";

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/about' element={<AboutPage />} /> */}
            {/* <Route path='/contact' element={<ContactPage />} /> */}
            {/* <Route path='/pricing' element={<PricingPage />} /> */}

            {/* <Route path='/login' element={<LoginPage />} /> */}
            {/* <Route path='/admin' element={<AdminPanelPage />} /> */}

            {/* <Route path='/fine-art/escape' element={<BlackAndWhitePage />} /> */}
            {/* <Route path='/fine-art/illusion' element={<DramaticPage />} /> */}
            {/* <Route path='/fine-art/etherial' element={<IllusionPage />} /> */}
            {/* <Route path='/fine-art/essential' element={<EssentialPage />} /> */}
            {/* <Route path='/local-art' element={<LocalArtPage />} errorElement={<NotFoundPage />} /> */}

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

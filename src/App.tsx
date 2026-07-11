import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { CustomCursor } from './components/ui/CustomCursor';
import { StarryBackground } from './components/ui/StarryBackground';
import { HomePage } from './pages/HomePage';

const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage').then(module => ({ default: module.ProjectDetailsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <StarryBackground />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        } />
        <Route path="about" element={
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        } />
        <Route path="services" element={
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
        } />
        <Route path="portfolio" element={
          <Suspense fallback={<LoadingFallback />}>
            <Portfolio />
          </Suspense>
        } />
        <Route path="contact" element={
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;
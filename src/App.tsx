import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';
import { lazyWithSuspense, RouteLoadingFallback } from '@/lib/lazy.tsx';

// Lazy load solution pages

const VerticalsPage = lazyWithSuspense(
  () => import('@/pages/VerticalsPage'),
  'verticals-page'
);

// Add these new lazy-loaded imports at the top:
const AquilineOpsPage = lazyWithSuspense(
  () => import('@/pages/AquilineOpsPage'),
  'aquiline-ops-page'
);

const AquilineProcurePage = lazyWithSuspense(
  () => import('@/pages/AquilineProcurePage'),
  'aquiline-procure-page'
);

const AquilineSafetyPage = lazyWithSuspense(
  () => import('@/pages/AquilineSafetyPage'),
  'aquiline-safety-page'
);

const AquilineAgroPage = lazyWithSuspense(
  () => import('@/pages/AquilineAgroPage'),
  'aquiline-agro-page'
);

const AquilineGovPage = lazyWithSuspense(
  () => import('@/pages/AquilineGovPage'),
  'aquiline-gov-page'
);

const AquilineScalePage = lazyWithSuspense(
  () => import('@/pages/AquilineScalePage'),
  'aquiline-scale-page'
);

// Lazy load heavy route components
const AboutPage = lazyWithSuspense(
  () => import('@/pages/AboutPage'),
  'about-page'
);

const PillarsPage = lazyWithSuspense(
  () => import('@/pages/PillarsPage'),
  'pillars-page'
);

const ServicesPage = lazyWithSuspense(
  () => import('@/pages/ServicesPage'),
  'services-page'
);

const SolutionsPage = lazyWithSuspense(
  () => import('@/pages/SolutionsPage'),
  'solutions-page'
);

const DifferentiatorsPage = lazyWithSuspense(
  () => import('@/pages/DifferentiatorsPage'),
  'differentiators-page'
);

const ContactPage = lazyWithSuspense(
  () => import('@/pages/ContactPage'),
  'contact-page'
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Seo />
      <div id="top" className="relative min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
                     focus:px-4 focus:py-2 focus:bg-aquiline-500 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route 
              path="/about" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <AboutPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="/pillars" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <PillarsPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="/services" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <ServicesPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="/solutions" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <SolutionsPage />
                </Suspense>
              } 
            />
            
            {/* Solution Sub-Pages */}
            <Route 
              path="/solutions/aquiline-ops" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <AquilineOpsPage />
                </Suspense>
              } 
            />

            <Route 
              path="/solutions/aquiline-procure" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <AquilineProcurePage />
                </Suspense>
              } 
            />

            <Route 
              path="/solutions/aquiline-safety" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <AquilineSafetyPage />
                </Suspense>
              } 
            />

            <Route 
              path="/solutions/aquiline-agro" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <AquilineAgroPage />
                </Suspense>
              } 
            />

            <Route 
              path="/solutions/aquiline-gov" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <AquilineGovPage />
                </Suspense>
              } 
            />

            <Route 
              path="/solutions/aquiline-scale" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <AquilineScalePage />
                </Suspense>
              } 
            />
            
            <Route 
              path="/differentiators" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <DifferentiatorsPage />
                </Suspense>
              } 
            />

            <Route 
              path="/verticals" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <VerticalsPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="/contact" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <ContactPage />
                </Suspense>
              } 
            />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs tracking-[0.3em] text-aquiline-500">404</p>
        <h1 className="mt-4 font-display text-4xl text-white">Route not found.</h1>
        <p className="mt-4 text-slate-400">The resource you requested does not exist in our sovereign perimeter.</p>
        <a href="/" className="btn-primary mt-8 inline-flex">Return Home</a>
      </div>
    </section>
  );
}
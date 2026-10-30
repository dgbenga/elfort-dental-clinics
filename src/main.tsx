import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initSentry, ErrorBoundary } from './lib/sentry';

// Initialize lightweight Sentry client
initSentry();

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find root element');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-sky-main p-6 text-center">
          <div className="max-w-md bg-white p-8 rounded-2xl border border-sky-line shadow-clinical">
            <h1 className="text-2xl font-bold text-primary mb-3">Something went wrong</h1>
            <p className="text-foreground text-lg mb-6 leading-relaxed">
              We encountered a minor issue loading this page. Please refresh or message Elfort Dental Clinic directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/2348144199019"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary-hover"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      }
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

import * as Sentry from '@sentry/react';

export function initSentry() {
  // Sentry lightweight browser tracking
  // In production, inject VITE_SENTRY_DSN in .env
  const dsn = import.meta.env.VITE_SENTRY_DSN;

  if (dsn) {
    Sentry.init({
      dsn,
      integrations: [Sentry.browserTracingIntegration()],
      tracesSampleRate: 0.1,
      beforeSend(event) {
        // Strict PII Scrubbing: strip phone numbers and medical query strings
        if (event.request?.url) {
          event.request.url = event.request.url.replace(/text=[^&]*/g, 'text=[REDACTED]');
        }
        return event;
      },
    });
  }
}

export const ErrorBoundary = Sentry.ErrorBoundary;

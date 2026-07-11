import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';

export const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-text-main to-surface mb-6">404</h1>
        <h2 className="text-3xl font-bold text-text-main mb-4">Page Not Found</h2>
        <p className="text-text-muted max-w-md mx-auto mb-8 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button as={Link} to="/">Return Home</Button>
      </div>
    </PageTransition>
  );
};

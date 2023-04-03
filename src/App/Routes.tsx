import { CircularProgress, Typography } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../Home'));

export function AppRoutes() {
  return (
    <Suspense fallback={<CircularProgress color="secondary" size={64} />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Typography variant="h1">Not Found...</Typography>} />
      </Routes>
    </Suspense>
  );
}

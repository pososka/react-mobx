import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Archive from '../../routes/Archive';
import About from '../../routes/About';
import Single from '../../routes/Single';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/news" element={<Archive />} />
    <Route path="/news/single/:id" element={<Single />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Navigate to="/news" />} />
  </Routes>
);

export default AppRouter;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import Milestones from './screens/Milestones';
import Chat from './screens/Chat';
import Breathing from './screens/Breathing';
import Lounge from './screens/Lounge';
import Progress from './screens/Progress';
import Stories from './screens/Stories';
import Create from './screens/Create';
import Wisdom from './screens/Wisdom';
import Profile from './screens/Profile';
import { BottomNav } from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideNav = ['/onboarding', '/breathing', '/stories', '/create', '/profile'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/onboarding" element={<PageTransition><Onboarding /></PageTransition>} />
          <Route path="/guide" element={<PageTransition><Milestones /></PageTransition>} />
          <Route path="/chat" element={<PageTransition><Chat /></PageTransition>} />
          <Route path="/breathing" element={<PageTransition><Breathing /></PageTransition>} />
          <Route path="/lounge" element={<PageTransition><Lounge /></PageTransition>} />
          <Route path="/progress" element={<PageTransition><Progress /></PageTransition>} />
          <Route path="/stories" element={<PageTransition><Stories /></PageTransition>} />
          <Route path="/create" element={<PageTransition><Create /></PageTransition>} />
          <Route path="/wisdom" element={<PageTransition><Wisdom /></PageTransition>} />
          <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      {!hideNav && <BottomNav />}
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}


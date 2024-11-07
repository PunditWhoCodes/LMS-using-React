import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomeSection from './components/sections/HomeSection';
import ProfileSection from './components/sections/ProfileSection';
import BooksSection from './components/sections/BooksSection';
import { useScrollToHash } from './hooks/useScrollToHash';

const App = () => {
  useScrollToHash();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HomeSection />
        <ProfileSection />
        <BooksSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
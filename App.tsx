import { useState } from 'react';
import { LanguageProvider } from './lib/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SmartAssistant } from './pages/SmartAssistant';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'smart-assistant':
        return <SmartAssistant />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1">{renderPage()}</main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HomePage } from './pages/HomePage';
import { DirectoryPage } from './pages/DirectoryPage';
import { JournalIndexPage } from './pages/JournalIndexPage';
import { JournalArticlePage } from './pages/JournalArticlePage';
import { NewsPage } from './pages/NewsPage';
import { EventsPage } from './pages/EventsPage';
import { AboutPage } from './pages/AboutPage';
import { AdvertisePage } from './pages/AdvertisePage';
import { ContactPage } from './pages/ContactPage';
import { SearchModal } from './components/SearchModal';
import { SubmitListingModal } from './components/SubmitListingModal';
import { SubmitNewsModal } from './components/SubmitNewsModal';
import { ListingDetailModal } from './components/ListingDetailModal';
import type { DirectoryListing } from './data/mockData';

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubmitListingOpen, setIsSubmitListingOpen] = useState(false);
  const [isSubmitNewsOpen, setIsSubmitNewsOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<DirectoryListing | null>(null);

  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">
            
            <Navbar
              onOpenSearch={() => setIsSearchOpen(true)}
              onOpenSubmitListing={() => setIsSubmitListingOpen(true)}
            />

            <main className="flex-grow pb-16 md:pb-0">
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      onSelectListing={(listing) => setSelectedListing(listing)}
                      onOpenSubmitListing={() => setIsSubmitListingOpen(true)}
                    />
                  }
                />
                <Route
                  path="/directory"
                  element={
                    <DirectoryPage
                      onSelectListing={(listing) => setSelectedListing(listing)}
                      onOpenSubmitListing={() => setIsSubmitListingOpen(true)}
                    />
                  }
                />
                <Route path="/blog" element={<JournalIndexPage />} />
                <Route path="/blog/:slug" element={<JournalArticlePage />} />
                <Route path="/journal" element={<JournalIndexPage />} />
                <Route path="/journal/:slug" element={<JournalArticlePage />} />
                <Route
                  path="/news"
                  element={<NewsPage onOpenSubmitNews={() => setIsSubmitNewsOpen(true)} />}
                />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/advertise" element={<AdvertisePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>

            <Footer />

            {/* Mobile Bottom Navigation Bar (4 Clean Items) */}
            <MobileBottomNav />

            {/* Dialog Modals */}
            <SearchModal
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
            />

            <SubmitListingModal
              isOpen={isSubmitListingOpen}
              onClose={() => setIsSubmitListingOpen(false)}
            />

            <SubmitNewsModal
              isOpen={isSubmitNewsOpen}
              onClose={() => setIsSubmitNewsOpen(false)}
            />

            <ListingDetailModal
              listing={selectedListing}
              onClose={() => setSelectedListing(null)}
            />

          </div>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

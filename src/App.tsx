import React from 'react';
import Dashboard from './pages/Dashboard';
import CallAnalysis from './pages/CallAnalysis';
import Transcription from './pages/Transcription';
import CategoryStatsDemo from './pages/CategoryStatsDemo';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'dashboard' | 'calls' | 'transcription' | 'category-stats'>('category-stats');

  return (
    <>
      {currentPage === 'dashboard' && <Dashboard onNavigate={setCurrentPage} />}
      {currentPage === 'calls' && <CallAnalysis onNavigate={setCurrentPage} />}
      {currentPage === 'transcription' && <Transcription onNavigate={setCurrentPage} />}
      {currentPage === 'category-stats' && <CategoryStatsDemo onNavigate={setCurrentPage} />}
    </>
  );
}

export default App;

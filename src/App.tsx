import React from 'react';
import Dashboard from './pages/Dashboard';
import CallAnalysis from './pages/CallAnalysis';
import Transcription from './pages/Transcription';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'dashboard' | 'calls' | 'transcription'>('transcription');

  return (
    <>
      {currentPage === 'dashboard' && <Dashboard onNavigate={setCurrentPage} />}
      {currentPage === 'calls' && <CallAnalysis onNavigate={setCurrentPage} />}
      {currentPage === 'transcription' && <Transcription onNavigate={setCurrentPage} />}
    </>
  );
}

export default App;

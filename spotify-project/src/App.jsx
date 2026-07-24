import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import './index.css';

const TAB_LABELS = {
  search: 'Search',
  library: 'Your Library',
  'create-playlist': 'Create Playlist',
  'liked-songs': 'Liked Songs',
};

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        activeTab={activeTab}
        onNavigate={(key) => {
          setActiveTab(key);
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
      />
      <main style={{ flex: 1, backgroundColor: '#121212', minHeight: '100vh' }}>
        <button
          className="menu-toggle"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
        {activeTab === 'home' ? (
          <Home />
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>{TAB_LABELS[activeTab]}</h1>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
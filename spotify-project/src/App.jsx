import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import './index.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        onNavigate={() => setIsSidebarOpen(false)}
        isOpen={isSidebarOpen}
      />
      <main style={{ flex: 1, backgroundColor: '#121212', minHeight: '100vh' }}>
        <button
          className="menu-toggle"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
        <Routes>
  <Route path="/" element={<Home />} />
  <Route
  path="/search"
  element={
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Search</h1>
    </div>
  }
/>
<Route
  path="/library"
  element={
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Your Library</h1>
    </div>
  }
/>
</Routes>
      </main>
    </div>
  );
}

export default App;
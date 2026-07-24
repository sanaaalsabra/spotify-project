import { FaSpotify } from 'react-icons/fa';
import { IoHome, IoSearch, IoLibrary, IoAdd, IoHeart } from 'react-icons/io5';
import SidebarLink from './SidebarLink';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { key: 'home', label: 'Home', icon: <IoHome /> },
  { key: 'search', label: 'Search', icon: <IoSearch /> },
  { key: 'library', label: 'Your Library', icon: <IoLibrary /> },
];

function Sidebar({ activeTab, onNavigate , isOpen }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <FaSpotify size={32} />
        <span>Spotify</span>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <SidebarLink
            key={item.key}
            icon={item.icon}
            label={item.label}
            active={activeTab === item.key}
            onClick={() => onNavigate(item.key)}
          />
        ))}
      </nav>

      <div className={styles.divider} />

      <div className={styles.nav}>
        <SidebarLink
          icon={
            <span className={styles.squareIcon}>
              <IoAdd />
            </span>
          }
          label="Create Playlist"
          active={activeTab === 'create-playlist'}
          onClick={() => onNavigate('create-playlist')}
        />
        <SidebarLink
          icon={
            <span className={`${styles.squareIcon} ${styles.likedSquare}`}>
              <IoHeart />
            </span>
          }
          label="Liked Songs"
          active={activeTab === 'liked-songs'}
          onClick={() => onNavigate('liked-songs')}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="#">Legal</a>
          <a href="#">Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">About</a>
          <a href="#">Ads</a>
        </div>
        <button className={styles.langButton}>🌐 English</button>
      </div>
    </aside>
  );
}

export default Sidebar;
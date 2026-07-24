import Navbar from '../components/Navbar/Navbar';
import Section from '../components/Section/Section';
import { focusPlaylists, spotifyPlaylists } from '../data/playlists';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <Section title="Focus" playlists={focusPlaylists} />
        <Section title="Spotify Playlists" playlists={spotifyPlaylists} />
      </div>
    </div>
  );
}

export default Home;
import Card from '../Card/Card';
import styles from './Section.module.css';

function Section({ title, playlists }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.showAll}>Show all</span>
      </div>

      <div className={styles.grid}>
        {playlists.map((playlist) => (
          <Card
            key={playlist.id}
            image={playlist.image}
            title={playlist.title}
            description={playlist.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;
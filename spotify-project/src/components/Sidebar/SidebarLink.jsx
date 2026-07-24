import styles from './SidebarLink.module.css';

function SidebarLink({icon, label,active,onClick}){
    return (
        <button className={`${styles.link} ${active ? styles.active : ''}`}onClick={onClick}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.label}>{label}</span>
            
        </button>
    );
}

export default SidebarLink;
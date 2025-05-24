import styles from "./NavBar.module.css"

function NavBar({setActivePage}) {
    return (
        <nav className={styles.navbar}>
            <a onClick={()=> setActivePage("home")}><div className={styles.navbar_brand}>
            <h2>Calisthenico</h2></div></a>
            <div className={styles.navbar_links}>
                <button className="btn" onClick={() => setActivePage("home")}>Home</button>
                <button className="btn" onClick={() => setActivePage("exercises")}>Exercises</button>
                <button className="btn" onClick={() => setActivePage("about")}>About</button>
            </div>
        </nav>
    )
}

export default NavBar;
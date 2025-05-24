import styles from "./Home.module.css"
import Divider from "../../components/Divider/Divider";
import TriangleLeft from "../../components/TriangleLeft/TriangleLeft";
import TriangleRight from "../../components/TriangleRight/TriangleRight";
function Home() {
    return (
        <>
            <div className={styles.upper_content}>
                <TriangleLeft />
                <div className={styles.introBox}>
                    <h1>Useful calisthenic exercises for you</h1>
                    <h4>From beginner to advanced you'll be able to unlock your inner potential and build yourself into a more stronger and endurable athlete</h4>
                </div>
                <TriangleRight/>
            </div>
            <Divider />
            <div className={styles.lower_content}>
                <ul className={styles.diffList}>
                    <li><a href=""><h4>Beginner</h4></a></li>
                    <li><a href=""><h4>Intermediate</h4></a></li>
                    <li><a href=""><h4>Advanced</h4></a></li>
                </ul>

                <div className={styles.fadeUpper}></div>
            </div>
        </>
    )
}

export default Home;
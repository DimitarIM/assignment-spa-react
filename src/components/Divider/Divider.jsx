import styles from "./Divider.module.css"
import TriangleLeft from "../TriangleLeft/TriangleLeft";

function Divider() {
    return (
        <div className={styles.divider}>
            <div className={styles.fadeBottom}></div>
        </div>
    )
}

export default Divider;
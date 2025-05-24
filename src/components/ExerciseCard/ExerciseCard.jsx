import styles from "./ExerciseCard.module.css";

function ExerciseCard({exercise}) {
    return (
        <div className={styles.exercise_card}>
            <div className={styles.exercise_poster}>
                <img src={exercise.image} alt="" />
            </div>
            <div className={styles.exercise_info}>
                <h3>{exercise.name}</h3>
                <p>{exercise.description}</p>
            </div>
        </div>
    )
}

export default ExerciseCard;
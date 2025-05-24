import styles from "./Exercises.module.css"
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import exercises from "../../../public/data/exercises"

function Exercises() {
    return (
        <div className={styles.exercises}>
            <div className={styles.exercises_grid}>
                {exercises.map(exercise => { return <ExerciseCard exercise={exercise} /> })}
            </div>
        </div>
    )
}


export default Exercises;
import styles from "./About.module.css"

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.about_grid}>
                <div className={styles.box}><img src="./img/calisthenics.jpg" alt="" /></div>
                <div className={styles.box}>
                    <h1>Reasoning for this website</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, soluta? Numquam atque eligendi molestias, tempora debitis esse aut accusamus aperiam, beatae odio facilis, laudantium vitae. Nulla pariatur quos nobis reiciendis debitis natus voluptatibus culpa qui repellendus, ex at tenetur. Libero illo pariatur maiores quam dolore quos nulla saepe eligendi totam!</h3>
                </div>
            </div>
        </div>
    )
}

export default About;
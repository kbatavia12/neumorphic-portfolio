import React from 'react'
import styles from './css/AboutScreen.module.css';
import SkillsButton from './SkillsButton';

const AboutScreen = () => {
    return (
        <div className={styles.aboutContainer} >
            <div className={styles.headingContainer}>
                <h2>About Me</h2>
            </div>
            <div className={styles.credContainer}>
                <h1 className={styles.name} >Karan <mark>Batavia </mark></h1>
                <p className={styles.title} >Full Stack Development Student</p>
            </div>
            <div className={styles.aboutMe} >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus pariatur necessitatibus facere totam accusantium excepturi, corporis iste eaque voluptate quisquam! Quasi reiciendis accusamus veritatis beatae nostrum veniam cumque hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae, perferendis magnam accusamus esse cum temporibus ullam tempore! Ab molestias iure praesentium quibusdam consequuntur corporis neque modi esse ullam obcaecati?</p>
            </div>
            <div className={styles.skillsAndEducation}>
                <div className={styles.educationContainer} >
                    <h3>Education</h3>
                    <ul className={styles.educationList} >
                        <div>
                            <li className={styles.educationTitle} >School</li>
                            <p>Nirmala Convent High School,</p>
                            <p>Nashik, India.</p>
                        </div>
                        <div>
                            <li className={styles.educationTitle}>Junior College</li>
                            <p>KVN Naik Arts, Science and Commerce College,</p>
                            <p>Nashik, India.</p>

                        </div>
                        <div>
                            <li className={styles.educationTitle}>B.E (Computer Engineering)</li>
                            <p>K.K Wagh Institute of Engineering Eduaction and Research,</p>
                            <p>Nashik, India.</p>

                        </div>
                    </ul>
                </div>
                <div className={styles.skillsContainer} >
                    <h3>Skills</h3>
                    <div className = {styles.skillsButtonContainer} >
                        <SkillsButton name = {"HTML"} />
                        <SkillsButton name = {"CSS"} />
                        <SkillsButton name = {"JavaScript"} />
                        <SkillsButton name = {"ReactJS"}/>
                        <SkillsButton  name = {"React Native"}/>
                        <SkillsButton  name = {"NodeJS"} />
                        <SkillsButton  name = {"Express"}/>
                        <SkillsButton  name = {"Python"}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutScreen;

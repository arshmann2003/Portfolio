import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate-slow')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [] )

    return (
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray = { ['A','b','o','u','t',' ','m','e'] }
                        idx={15}
                    />
                </h1>
                <p>
                    I am a computer science student at Simon Fraser University. Over the two years, I have completed coursework in various topics including software engineering, data structures and algorithms, computer systems, object-oriented design in Java, discrete maths, and intro to web development.
                </p>
                <p>
                    While my studies are a significant part of my life, I also value staying active and maintaining a healthy work-life balance. In my free time, I enjoy playing hockey and watching sports, particularly basketball and UFC. These hobbies allow me to unwind and recharge, while also giving me a sense of camaraderie and teamwork.
                </p>
                {/* <p>
                    I am also proud of my unique traits and characteristics, such as my attention to detail, my creativity, and my ability to think critically and problem-solve. These skills have helped me to excel in my studies and will continue to serve me well as I pursue my career in the field of computer science.
                </p> */}
                <p>
                    I am excited about what the future holds and look forward to leveraging my skills, knowledge, and passion for computer science to make a positive impact in the world.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#" />
                    </div>
                </div>
            </div>
            </div> 
        </>
    )
}

export default About

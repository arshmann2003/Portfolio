import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const Home = () => {
    const [letterClass, setLetterClass] =  useState('text-animate')
    const nameArray = [' ','A', 'r', 's', 'h', ' ', 'M', 'a', 'n', 'n']
    const jobArray = ['S','o','f','t','w','a','r','e', ' ', 'D','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br/>
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16`}>m</span>

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={10}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={17}/>
                </h1>

                <h2>SFU CS Student / Android Developer / Web Developer </h2>
                <Link to="/contact" className='flat-button' id="contactBtn">CONTACT ME</Link>
                <Link to="/projects" className = 'flat-button' id="projectBtn">PROJECTS</Link>
            </div>
        </div>
    );  
}
export default Home 
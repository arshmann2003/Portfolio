import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from 'emailjs-com';
import './index.scss'

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet';

let SERVICEID = 'service_3h7slvs'
let TEMPLATEID = 'template_8nye7gh'
let KEY = '0DW4Vy5tseUiSvMmb'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate-slow')
  

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [] )

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
            .sendForm(
                SERVICEID,
                TEMPLATEID,
                e.target,
                KEY
            )
            .then(
                () => {
                    alert('Message Successfuly Sent!')
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']} 
                            idx={15}
                        />
                    </h1>
                    <p id="contact-form-p">
                        Seeking a software engineering co-op position to gain practical experience and further develop technical skills. Eager to work collaboratively with experienced professionals to implement innovative software solutions and make meaningful contributions to the organization's success.
                    </p>
                    <div className='contact-form'>
                        <form onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name="email" placeholder='Your Email' required />
                                </li>
                                <li>
                                    <input placeholder="subject" type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required >
                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Arsh Mann,
                    <br />
                    New Westminster,
                    <br />
                    Canada <br />
                    <span>asm32@sfu.ca</span>
                </div>
                <div className='map-wrap'>
                </div>  
                <MapContainer center={[49.2427, -122.9354]} zoom={11}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[49.2057, -122.9110]}>
                    <Popup>Grew up here :)</Popup>
                    </Marker>
                    <Marker position={[49.2781, -122.9199]}>
                    <Popup>School</Popup>
                    </Marker>    
                </MapContainer>
            </div>
        </>
    )
}

export default Contact
import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='FOOTER-MAIN-CONTAINER'>
            <h1 className='EVENT-HEADING'>PRAKARSH'23</h1>
            <p className='EVENT-DESCRIPTION'>see you in events.</p>
            <div className='NAME-LOCATION-PART-FOLLOWING'>
                <div className='LOCATION-ADDRESS'>
                    <img src="assets/location-icon.jpeg" className='LOCATION-ICON' alt="" />
                    <p>sardar vallabhbhai patel institute of technology, vasad</p>
                </div>
                <div className='FOLLOWING'>
                    <a href="/"><img src="assets/instagram-image.png" className='SOCIAL-MEDIA-ICONS' alt="SOCIAL-MEDIA-ICON" /></a>
                    <a href="/"><img src="assets/facebook-logo.png" className='SOCIAL-MEDIA-ICONS' alt="SOCIAL-MEDIA-ICON" /></a>
                    <a href="/"><img src="assets/youtube-logo.png" className='SOCIAL-MEDIA-ICONS' alt="SOCIAL-MEDIA-ICON" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
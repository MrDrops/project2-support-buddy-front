import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Fader = ({ text }) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 1500);

        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <>
            <h2 data-testid="fader" className={fadeProp.fade}>{text}</h2>
        </>
    )
}

export default Fader
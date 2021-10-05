import React from 'react'
import { render } from 'react-dom'

import { useState, useEffect } from 'react'

const NewTab = () => {
    const [test, setTest] = useState('sdrfsdf')
    const [screenSize, setScreenSize] = useState({
        height: '',
        width: '',
    })

    const getSize = () => {
        const height = window.innerHeight
        const width = window.innerWidth

        setScreenSize({
            height: height,
            width: width,
        })
    }

    useEffect(() => {
        getSize()
        window.addEventListener('resize', () => {
            getSize()
        })
    }, [])

    return (
        <>
            <style jsx global>{`
                html {

                }

                body {
                    margin: 0px;
                }
                #react-target-newTab {

                }
            `}</style>

            <style jsx>{`
                video {
                    object-fit: cover;
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                }
            `}</style>
            <video
                autoPlay
                muted
                loop
                src="https://cdn-cf-east.streamable.com/video/mp4/b51rt.mp4?Expires=1633714500&Signature=SYy~JnZU4t-LxSHSDT7DhleksRqR4H5a8OpK7j7VTr3SMN56sJO08fK1WP31TIntgFI25QpSw8L5WleIjwO8xca8uNyhedxsB9xsnFog-ojhYquNcLqE9KXbkvU9aAlSdMPYD1COISDkCpryqxqjyNY7EiF1BwokOkhQWIaosWYdXWM5XYe~4rPhEpWhwVYCk9GNOeQ4qY9S7Xz2kEvneSCCvtdJ1Exer9xWXVu4P1wK0JFL5n2duvJJCd65hxlAUapy2u1SmpgvZBT-N79vwfDuG1fnV2RriSgjdUeyEQJ~CXWCBil6-46nncODpMTCP4iWDPRRZGaCRkRvlC5z-A__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
            ></video>
        </>
    )
}

render(<NewTab />, document.getElementById('react-target-newTab'))

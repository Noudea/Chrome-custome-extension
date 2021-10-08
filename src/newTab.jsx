import React from 'react'
import { render } from 'react-dom'

import { useState, useEffect } from 'react'
import GoogleSearchBar from './components/searchbars/GoogleSearchBar'

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
                    z-index: -1;
                }

                .contentContainer {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
            <video
                autoPlay
                muted
                loop
                src="https://cdn-cf-east.streamable.com/video/mp4/b51rt.mp4?Expires=1633978860&Signature=dJ~dZAHLHksMbltrp~-sCc5JSa-daNFdUxyxgPXc0J8h8SS2cgkwpSJkUErEA1IKJfygdcSj94EgHsOoBDZovs5PsRlfbtZhD7kcN~9g-rzc~7sYOcIzgulAOO71xxZcT1gY-u30j1eh-4AegXavhiSakm1K0Gs17TCwkpI0TJrQp5tT~bzXlp0gayzJiiOeuyEEKtpS-LhgKWa22SFMNLW8rGAyVcE5GoCDpgAY47-JhfqG60JFSit70N~RlCxa29YdBLoZWNBSQ066dEid2-NODgH4kvapllDSM0kLDNvXlKywSxGZhPg1vLVmhAFEsaGqUFFlL4aHnpx1ZLU7Kg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
            ></video>
            <div className="contentContainer">
                <GoogleSearchBar></GoogleSearchBar>
            </div>
        </>
    )
}

render(<NewTab />, document.getElementById('react-target-newTab'))

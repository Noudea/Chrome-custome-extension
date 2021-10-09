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

    const [liveWallpaperUrl, setLiveWallpaperUrl] = useState('')
    
    
    const getStoreKey = (key) => {
        chrome.storage.sync.get([key],(result)=> {
            console.log(result[key])
            setLiveWallpaperUrl(result[key])
        })
    }


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

        getStoreKey('liveWallpaperUrl')
        console.log(liveWallpaperUrl)
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
                src={liveWallpaperUrl}
            ></video>
            <div className="contentContainer">
                <GoogleSearchBar></GoogleSearchBar>
            </div>
        </>
    )
}

render(<NewTab />, document.getElementById('react-target-newTab'))

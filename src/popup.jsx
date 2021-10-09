import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

const Popup = () => {
    const [liveWallpaperUrl, setLiveWallpaperUrl] = useState('')
    
    
    const setStoreKey = (keyValue) => {
        chrome.storage.sync.set(keyValue)
    }

    const getStoreKey = (key) => {
        chrome.storage.sync.get([key],(result)=> {
            console.log(result[key])
            return result[key]
        })
    }

    useEffect(() => {

        const currentLiveWallpaperURl = getStoreKey('liveWallpaperUrl')
        console.log(currentLiveWallpaperURl)
        setLiveWallpaperUrl(currentLiveWallpaperURl)
        return () => {


        }
    }, [])

    return (
        <>
            <style jsx>{`
                .popUpContainer {
                }
            `}</style>

            <div className="popUpContainer"></div>
            <div>
                <p>Background live wallpaper : </p>
                <input
                    onChange={(e) => {
                        console.log(e.target.value)
                        setLiveWallpaperUrl(e.target.value)
                    }}
                    value={liveWallpaperUrl}
                ></input>
                <button 
                    onClick={() => {
                        setStoreKey({liveWallpaperUrl : liveWallpaperUrl})
                    }}
                
                >Set</button>
            </div>
            <button
                onClick={() => {
                    const test = getStoreKey('liveWallpaperUrl')
                    console.log(test)
                }}
            >
                test
            </button> 
            {/* <button
                onClick={() => {
                    setStoreKey({ test: 'value' })
                }}
            >
                set
            </button>
            <button
                onClick={() => {
                    getStoreKey('test')
                }}
            >
                test
            </button> */}
        </>
    )
}

render(<Popup />, document.getElementById('react-target'))

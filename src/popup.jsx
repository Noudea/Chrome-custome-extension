import React from 'react'
import { render } from 'react-dom'

const Popup = () => {


    const setStoreKey = ({key : value}) => {
        chrome.storage.sync.set({key : value}, function () {
            console.log('Value is set to ' + value)
        })
    }


    const getStoreKey = () => {
        chrome.storage.sync.get(['key'], function (result) {
            console.log('Value currently is ' + result.key)
        })
    }



    return (
        <>
            <style jsx>{`
                .popUpContainer {
                    width: 300px;
                    height: 500px;
                    border-radius: 50px;
                }
            `}</style>

            <div className="popUpContainer"></div>
            <button onClick={()=> {
                setStoreKey({test : 'mon test'})
            }}>test</button>
        </>
    )
}

render(<Popup />, document.getElementById('react-target'))

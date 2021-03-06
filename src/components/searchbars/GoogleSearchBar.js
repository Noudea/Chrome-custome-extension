import React, { useState, useEffect } from 'react'

const GoogleSearchBar = () => {
    const [searchValue, setSearchValue] = useState('')

    /**
     * build google url
     * @returns url
     */
    const buildGoogleSearchUrl = () => {
        console.log(searchValue)
        return (
            'https:///www.google.com/search?q=' +
            encodeURIComponent(searchValue)
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = buildGoogleSearchUrl()
    }

    return (
        <>
            <style jsx>{`
                form {
                    width: 100%;
                }
                input {
                    height: 44px;
                    width: 100%;
                    background-color: white;
                    border: none;
                }
                input:focus {
                    outline: none;
                }

                #searchsvg {
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                }

                #googleLogo {
                    width: 24px;
                    height: 24px;
                    margin-left: 10px;
                }

                .inputWrapper {
                    background-color: white;
                    min-width: 337px;
                    max-width: 561px;
                    width: 33%;
                    border-radius: 22px;
                    padding: 0px 15px 0px 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
            <div className="inputWrapper">
                <img
                    id="searchsvg"
                    src="chrome-extension://lnnkjcbeielalgjhejimhnhcpbfcbpoj/svg/search.svg"
                />
                <form
                    onSubmit={(e) => {
                        handleSubmit(e)
                    }}
                >
                    <input
                        onChange={(e) => {
                            console.log(e.target.value)
                            setSearchValue(e.target.value)
                        }}
                        id="input"
                        type="search"
                        autoComplete="off"
                        spellCheck="false"
                        role="combobox"
                        aria-live="polite"
                        placeholder="Search Google"
                    ></input>
                </form>
                <img
                    id="googleLogo"
                    src="chrome-extension://lnnkjcbeielalgjhejimhnhcpbfcbpoj/googleLogo.png"
                />
            </div>
        </>
    )
}

export default GoogleSearchBar

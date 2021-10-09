import React from 'react'
import { render } from 'react-dom'


const Popup = () => {

    return(<>
        <style jsx>{`
            
            .popUpContainer {
                width:300px;
                height:500px;
                border-radius:50px;
            }
            `}</style>        
        
        <div className='popUpContainer'>
            


        </div>
    </>)

}


render(<Popup/>,document.getElementById('react-target'))
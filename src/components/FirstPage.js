import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css'

export default function FirstPage({ border, center }) {

    const [current, setCurrent] = useState((new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds())
    const [position, setPosition] = useState('')
    const [text,setText] = useState('Floating')
    const [transform,setTransform] = useState('')
    const navigate = useNavigate()
    const nodeRef = useRef(null)

    useEffect(() => {
        if(border !== ''){
            document.querySelector('#display-area').style.border = border
        }
        if(center){
            document.querySelector('input[type=radio][id=center]').checked = true
            setPosition('Center')
        }
        let interval = setInterval(() => {
        setCurrent((new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds())
        }, 1000)  

        return () => {
        clearInterval(interval)
        }
    }, [border, center])

    useEffect(() => {
        window.addEventListener('keydown', function(e){
        if(e.key === "Escape"){
            this.document.querySelector('#display-area').style.display = 'none'
        }
        if(e.key === "Enter"){
            this.document.querySelector('#display-area').style.display = 'block'
        }
        })

        return () => {
        window.removeEventListener('keydown', function(e){
            if(e.key === "Escape"){
                this.document.querySelector('#display-area').style.display = 'none'
            }
            if(e.key === "Enter"){
                this.document.querySelector('#display-area').style.display = 'block'
            }
        })
        }
    }, [])

    const handleChange = (e) => {
        // var rect = document.getElementById('display-area').getBoundingClientRect();
        // console.log(rect)
        document.getElementById('display-area').style.transform = 'translate(0px,0px)'
        setPosition(e.target.value)
        setText(e.target.value)
        // if(document.getElementById('display-area').className.includes("react-draggable-dragged")){
        //     document.getElementById('display-area').classList.remove("react-draggable-dragged")
        //     console.log(document.getElementById('display-area').className)
        // }
    }

    const handleDragEnd = (e) => {
        if(document.querySelector('input[type=radio][name=position]:checked')){
            document.querySelector('input[type=radio][name=position]:checked').checked = false
        }
        setTransform(document.getElementById('display-area').style.transform)
    }

    const handleStart = (e) => {
        document.getElementById('display-area').style.transform = transform
        setText('Floating')
    }

    return (
        <div className="App">
            <div className='header'>
                <span>Position:</span>
                <input type='radio' id='center' value='Center' name='position' onChange={(e) => handleChange(e)} />
                <label htmlFor='center'>Center</label>
                <input type='radio' id='lower-right' value='Lower Right' name='position' onChange={(e) => handleChange(e)} />
                <label htmlFor='lower-right'>Lower Right</label>
                <p className='escape'>Press ESC key to hide the window. Enter to show it again</p>
                <p className='time'>{current}</p>
            </div>
            <div id='container' className={`container ${position === "Center" && text === "Center" ? 'center-display' : ''}`}>
                <Draggable bounds='parent' nodeRef={nodeRef} onStop={handleDragEnd} onStart={handleStart} >
                <div id='display-area' ref={nodeRef} className={`display-area ${position === "Lower Right" && text === "Lower Right" ? 'lower-right-display' : ''}`}>
                    <p className='top-left'>{text}</p>
                    <p className='bottom-right'>Drag me around...</p>
                </div>
                </Draggable>
            </div>
            <div className='footer'>
                <div className='goto' onClick={() => navigate('/second')}>Go to page2 {`>`}</div>
            </div>
        </div>
    );
}

import { useNavigate } from 'react-router-dom'
import './SecondPage.css'

export default function SecondPage({ setBorder, setCenter }) {
    const navigate = useNavigate()
    const handleClick = () => {
        setBorder('5px solid blue')
        setCenter(true)
        navigate('/')
    }
    return (
        <div className="second-page">
            <div>Page 2</div>
            <div className="content"><div>Content in Page 2</div></div>
            <button className='back-btn' onClick={handleClick}>Back</button>
        </div>
    )
}

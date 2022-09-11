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
            <div className="content">
                <div className='inner'>
                    Hi, My name is Sai Mahith Reddy. I am from Andhra Pradesh. I have graduated in 2021 from BITS Hyderabad Campus, Computer Science branch. I love converting designs into websites and scaling their performance as much as possible. I have a relevant experience of 1 year apart from my internships, in frontend development and also done some personal projects in React which can be seen in my resume or my portfolio.
                    <a href='https://papaya-licorice-f99c59.netlify.app/' target='blank'>Check out my portfolio</a>
                    <a href='https://drive.google.com/file/d/1r5eXIQwemsB5n21_ln-jVsKazrJT0HRh/view?usp=sharing' target='blank'>Check out my resume</a>
                </div>
            </div>
            <button className='back-btn' onClick={handleClick}>Back</button>
        </div>
    )
}

import './timer.css';
import { Aldrich } from 'next/font/google'
 
const aldrich = Aldrich({
    subsets: ["latin"],
    weight: "400"
})

const AnimatedTimer = () => {
    return (
        <div className={`wrapper ${aldrich.className}`}>
            <div className='time-part-wrapper'>
                <div className='time-part minutes tens'>
                <div className='digit-wrapper'>
                    <span className='digit'>0</span>
                    <span className='digit'>5</span>
                    <span className='digit'>4</span>
                    <span className='digit'>3</span>
                    <span className='digit'>2</span>
                    <span className='digit'>1</span>
                    <span className='digit'>0</span>
                </div>
                </div>
                <div className='time-part minutes ones'>
                <div className='digit-wrapper'>
                    <span className='digit'>0</span>
                    <span className='digit'>9</span>
                    <span className='digit'>8</span>
                    <span className='digit'>7</span>
                    <span className='digit'>6</span>
                    <span className='digit'>5</span>
                    <span className='digit'>4</span>
                    <span className='digit'>3</span>
                    <span className='digit'>2</span>
                    <span className='digit'>1</span>
                    <span className='digit'>0</span>
                </div>
                </div>
            </div>
            <div className='time-part-wrapper'>
                <div className='time-part seconds tens'>
                <div className='digit-wrapper'>
                    <span className='digit'>0</span>
                    <span className='digit'>5</span>
                    <span className='digit'>4</span>
                    <span className='digit'>3</span>
                    <span className='digit'>2</span>
                    <span className='digit'>1</span>
                    <span className='digit'>0</span>
                </div>
                </div>
                <div className='time-part seconds ones'>
                <div className='digit-wrapper'>
                    <span className='digit'>0</span>
                    <span className='digit'>9</span>
                    <span className='digit'>8</span>
                    <span className='digit'>7</span>
                    <span className='digit'>6</span>
                    <span className='digit'>5</span>
                    <span className='digit'>4</span>
                    <span className='digit'>3</span>
                    <span className='digit'>2</span>
                    <span className='digit'>1</span>
                    <span className='digit'>0</span>
                </div>
                </div>
            </div>
            {/* <div className='time-part-wrapper'>
                <div className='time-part hundredths tens'>
                <div className='digit-wrapper'>
                    <span className='digit'>0</span>
                    <span className='digit'>9</span>
                    <span className='digit'>8</span>
                    <span className='digit'>7</span>
                    <span className='digit'>6</span>
                    <span className='digit'>5</span>
                    <span className='digit'>4</span>
                    <span className='digit'>3</span>
                    <span className='digit'>2</span>
                    <span className='digit'>1</span>
                    <span className='digit'>0</span>
                </div>
                </div>
                <div className='time-part hundredths ones'>
                <div className='digit-wrapper'>
                    <span className='digit'>0</span>
                    <span className='digit'>9</span>
                    <span className='digit'>8</span>
                    <span className='digit'>7</span>
                    <span className='digit'>6</span>
                    <span className='digit'>5</span>
                    <span className='digit'>4</span>
                    <span className='digit'>3</span>
                    <span className='digit'>2</span>
                    <span className='digit'>1</span>
                    <span className='digit'>0</span>
                </div>
                </div>
            </div> */}
            </div>

    );
}

export default AnimatedTimer;
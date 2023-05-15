import React from 'react'
import { TiTick } from 'react-icons/ti';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { BsUpload } from 'react-icons/bs';



const Purchase = () => {
  return (
    <div>
        <div className='purchase'>
            <h1>Purchase</h1>
            <div className='limits'>
                <h2>Start using static.app as a hosting for your websites today to get
                     the best features to buck ratio on the market.</h2>
                <div className='Unlimited'>
                    <p><TiTick className='midab'/>Unlimited Pages</p>
                    <p><TiTick className='midab'/>U​nlimited Forms</p>
                    <p><TiTick className='midab'/>Unlimited HTTPS</p>
                </div>
                <div className='Unlimited'>
                    <p><TiTick className='midab'/>Free Sub-Domain</p>
                    <p><TiTick className='midab'/>U​nlimited Data</p>
                    <p><TiTick className='midab'/>24/7 Support</p>
                </div>
            </div>
            <div className="plan">
                <div className="start">
                    <h2>Starter Plan</h2>
                    <h1>Free</h1>
                    <button>Upload for Free <HiOutlineArrowRight/></button>
                    <p>Free static.app domain included. No credit card</p>
                </div>
                <div className="yearly">
                    <div className='shakra'>
                       <h2>Yearly Plan</h2>
                       <span>save 24%</span>
                    </div>
                    <h1>$9<span className='reduce'>/month</span></h1>
                    <button>Proceed Annually <HiOutlineArrowRight/></button>
                    <p>Billed $108 per website annually. $36 cheaper to this way.</p>
                </div>
                <div className="monthly">
                    <h2>Monthly Plan</h2>
                    <h1>$12<span className='reduce'>/month</span></h1>
                    <button>Proceed Monthly <HiOutlineArrowRight/></button>
                    <p>Billed $12 per website monthly.Total is $144 per year.</p>
                </div>
            </div>
        </div>
        <div className='static'>
            <img src="./images/footer.png" alt="" />
            <div className='shape-static'></div>
            <div className='simple'>
                <h1>Get started with the simpliest <br /> static page</h1>
                <p>My Name Is Hassan</p>
                <button><BsUpload/> Upload for Free</button>
            </div>
        </div>
    </div>
  )
}

export default Purchase
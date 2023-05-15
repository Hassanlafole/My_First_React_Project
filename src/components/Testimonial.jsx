import React from 'react'

import { RiDoubleQuotesL,RiDoubleQuotesR } from 'react-icons/ri';

const Testimonial = () => {
  return (
    <div className='whole-test'>
        <div className='test-content'>
            <h2>TESTIMONIALS</h2>
            <h1>What Clients Say</h1>
            <p>  We place huge value on strong relationships and have seen
              the benefit they <br /> bring to our business. Customer feedback 
               is vital in helping us to get it right.</p>
        </div>
        <div className="testimonials">
            <div className='test'>
                <img src="./images/hasan.png" alt="" />
                <p><RiDoubleQuotesL/>Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                     Mauris augue neque gravida in fermentum. Praesent semper
                     feugiat nibh sed pulvinar proin.<RiDoubleQuotesR/></p>
                <h2>Hassan Nur</h2>
                <h3>Chief Accountant</h3>
            </div>
            <div className='test'>
                <img src="./images/member-9.png" alt="" />
                <p><RiDoubleQuotesL/>Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                     Mauris augue neque gravida in fermentum. Praesent semper
                     feugiat nibh sed pulvinar proin.<RiDoubleQuotesR/></p>
                <h2>Mohamed Sharif</h2>
                <h3>Manager</h3>
            </div>
            <div className='test'>
                <img src="./images/photo6.png" alt="" />
                <p><RiDoubleQuotesL/>Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                     Mauris augue neque gravida in fermentum. Praesent semper
                     feugiat nibh sed pulvinar proin.<RiDoubleQuotesR/></p>
                <h2>Khadar Ibrahim</h2>
                <h3>Chief Accountant</h3>
            </div>
            <div className='test'>
                <img src="./images/member-8.png" alt="" />
                <p><RiDoubleQuotesL/>Vitae suscipit tellus mauris a diam maecenas sed enim ut.
                     Mauris augue neque gravida in fermentum. Praesent semper
                     feugiat nibh sed pulvinar proin.<RiDoubleQuotesR/></p>
                <h2>Sabirin Omar</h2>
                <h3>Chief Accountant</h3>
            </div>
        </div>
        <p>Get Good Quality Website</p>
    </div>
  )
}

export default Testimonial
import React from 'react'

const Section = () => {
  return (
    <section>
        <div className='section'>
            <div className='leftSection'>
                <h2>Hosting solution  with benefits.</h2>
                <h3>Turn your ideas into reality with Static.
                With a lot of powerful features, we <br /> guarantee simplicity and clarity.</h3>
                <button>Read More</button>
            </div>
            <div className="rightSection">
                <div className='kor'>
                    <div className='free'>
                        <img src="./images/qunful.jpg" alt="" />
                        <button>FREE</button>
                        <h2>SSL Certificate</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                           cillum dolore eu fugiat nulla pariatur</p>
                        <p className='highlight'>MORE</p>
                    </div>
                    <div className='code'>
                        <img src="./images/qunful.jpg" alt="" />
                        <h2>Code Editor</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                           cillum dolore eu fugiat nulla pariatur</p>
                        <p className='highlight'>MORE</p>
                    </div>
                </div>
                <div className='hoos'>
                    <div className='personal'>
                        <img src="./images/qunful.jpg" alt="" />
                        <h2>Personal Domain</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                           cillum dolore eu fugiat nulla pariatur</p>
                        <p className='highlight'>MORE</p>
                    </div>
                    <div className='media'>
                        <img src="./images/qunful.jpg" alt="" />
                        <button>FREE</button>
                        <h2>Media Storage</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                           cillum dolore eu fugiat nulla pariatur</p>
                        <p className='highlight'>MORE</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="nextSection">
            <img src="./images/section.png" alt="" />
            <div className='shape-1'></div>
            <div className='shape-circle'></div>
            <div className='Amazing'>
                <h1>Create Amazing  Website</h1>
                <p>Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis tincidunt id aliquet risus feugiat in.
                  Auctor augue mauris augue neque gravida in fermentum et. Feugiat in fermentum  urna.</p>
                  <p className='know'>let me know you</p>
                 <button>learn more</button>
            </div>
        </div>
    </section>
    
    
  )
}

export default Section
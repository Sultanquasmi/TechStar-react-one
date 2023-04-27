import React from 'react'
import vg from "../Assets/2.webp"
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillAmazonCircle} from "react-icons/ai"

const Home = () => {
  return (
   <>
    <div className='home' id='Home'>
        <main>

            <h1>Techstar</h1>
            <p>Solution to all your problems</p>
        </main>
</div>
     <div className="home2" >
     <img src={vg} alt="Graphics"  />
     <div>
        <p>
            We are your one and only sultion to the tech problems you face
            every day. We are leading tech company whose aim is to increase the 
            problem solving ability in children.
        </p>
     </div>
     
     </div>
     <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>
                Lorem ipsum, dolor sit amet, illum saepe? Soluta, dicta. Ducimus praesentium assumenda error accusamus libero. Et quam doloremque dignissimos suscipit eos! Ut, doloribus necessitatibus? Officiis error praesentium numquam culpa, itaque, architecto quibusdam minus optio atque voluptatem, recusandae odit esse. Obcaecati magni voluptas possimus odio distinctio quasi dicta non, nemo praesentium aliquid repellat, itaque dolorem? Nulla maiores dolorum necessitatibus doloremque explicabo, aspernatur quia, sunt at, facere accusantium voluptates eaque? Quisquam quidem asperiores necessitatibus autem placeat quasi molestias facere quo magnam assumenda, est nesciunt et ducimus ratione sint tempore eligendi? Ea odio quos quas debitis repudiandae dolor veniam enim reprehenderit facere nostrum, repellat, eligendi qui laboriosam nobis aspernatur sit quod quidem illum. Perspiciatis sunt deleniti amet, ipsum incidunt quia sit.
            </p>
        </div>
     </div>
     <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style = {{
                    animationDelay:"0.3s",
                }}
                >
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style = {{
                    animationDelay:"0.s",
                }}
                >
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style = {{
                    animationDelay:"0.7s",
                }}
                >
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style = {{
                    animationDelay:"1s",
                }}
                >
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
     </div>
   
   
   </>
  )
}

export default Home
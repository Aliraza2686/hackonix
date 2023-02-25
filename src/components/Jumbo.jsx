import { motion } from "framer-motion"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Jumbo = () => {
    return (
       
         <div className="jumbo carousel">
            <Carousel autoPlay infiniteLoop autoFocus  useKeyboardArrows  centerMode={false} stopOnHover>
                <div className="jumbo1">
                   <div className="center">
                   <div className="contain p-5 text-center">
                        <div className="mt-28">
                        <h1 className="j1-text text-7xl text-white font-bold">hackonix</h1> <br />
                        <p className="text-white shadow-lg text-1  ">Building your digital dreams into reality with cutting-edge web development services. Transforming your online presence with custom web development and user-focused design.</p>
                        <br /> <br />
                        <a className="bn47 font-bold " href="/">Developers</a>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="jumbo2">
                <div className="center">
                   <div className="contain p-5 text-center">
                        <div className="mt-28">
                        <h1 className="j1-text text-7xl text-white font-bold">Reliabillty</h1> <br />
                        <p className="text-white shadow-lg text-1  ">Our mission is to empower businesses with intuitive and dynamic web solutions. We deliver sleek, functional, and engaging websites that leave a lasting impression.</p>
                        <br /> <br />
                        <a className="bn47 font-bold " href="/">Developers</a>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="jumbo3">
                <div className="center">
                   <div className="contain p-5 text-center">
                        <div className="mt-28">
                        <h1 className="j1-text text-5xl md:text-7xl text-white font-bold">Security and encryption</h1> <br />
                        <p className="text-white shadow-lg text-1  ">Your website's security is our top priority. Let us protect your online presence with the latest encryption technology. Our team of experts delivers top-notch security and encryption services to ensure your website is always protected.</p>
                        <br /> <br />
                        <a className="bn47 font-bold " href="/">Developers</a>
                        </div>
                    </div>
                   </div>
                </div>
            </Carousel>
         </div>

       
    )
}

export default Jumbo
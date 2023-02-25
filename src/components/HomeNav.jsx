
const HomeNav = () => {
    return (
        <div className="nav text-white sticky">
         <div className="grid md:grid-cols-4 grid-cols-1 p-5">
            <div>
                <img src="../../public/logo.svg" alt="" srcset="" />
            </div>
            <div className="col-span-2 font-bold"> 
                <button className="navLinks1 px-3 py-2 rounded-md">Home</button>
                <button className="navLinks px-3 py-2 rounded-md">About</button>
                <button className="navLinks px-3 py-2 rounded-md">Services</button>
                <button className="navLinks px-3 py-2 rounded-md">Blog</button>
                <button className="navLinks px-3 py-2 rounded-md">Contact</button>
            </div>
            <div><button className="bn px-5 py-3">Company</button></div>
            <div>
                
            </div>

         </div>
        </div>
    )
}

export default HomeNav
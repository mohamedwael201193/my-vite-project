import React from 'react'
import NavBar from "../../Component/NavBar/NavBar";
import Location from "../../Component/Location/Location";
import Footer from "../../Component/Footer/Footer";
function Contact() {
  return (
    <>
    <NavBar />
     <div className="w-full h-full py-10 mb-9 ">
      <div className="container ">
        <div className="flex flex-col justify-center items-center py-5">
          <h1 className="text-5xl font-bold text-gray-800">conatct section
</h1>
          <div className="flex items-center justify-center gap-4 my-4 w-full max-w-md ">
            <hr className="flex-grow border-t-2 border-gray-800" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-800"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <hr className="flex-grow border-t-2 border-gray-800" />
          </div>
        </div>
   <form className="w-full space-y-5 mt-5  " >
    <div className="email flex justify-center items-center gap-2 ">
        <input type="email" name="" id="" className='form-input ' placeholder=' Email'/>
    </div>
    <div className="Name flex justify-center items-center gap-2 ">
        <input type="Name" name="" id="" className='form-input ' placeholder='User Name'/>
    </div>
    <div className="age flex justify-center items-center gap-2 ">
        <input type="phone" name="" id="" className='form-input ' placeholder=' Phone'/>
    </div>
    <div className="Password flex justify-center items-center gap-2 ">
        <input type="Password" name="" id="" className='form-input ' placeholder=' Password'/>
    </div>
    <div className="submit flex justify-center items-center gap-2 ">
        <button type="submit" className='form-input bg-[#1abc9c] text-white'>Submit</button>
</div>

   </form>

      </div>
    </div>
    
    <Location />
    <Footer />

    </>
    
  )
}

export default Contact
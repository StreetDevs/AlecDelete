

import React, { useState } from 'react';
import  setEmailId from './appwrite/api';

import { toast,ToastContainer } from "react-toastify";
 
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
 
// toast-configuration method,
// it is compulsory method.


function App() {

  const [email,setEmail] = useState("");

 


  const handleSubmission = async (e) =>{

    e.preventDefault();

    console.log(email);

    const newEmail = await setEmailId(email);


    toast.success("Submitted successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });

   

    

  }

  

  return (
    <div style={{ height: '100vh', padding: '10px', backgroundColor:'black' }}>

      


      <div className=' justify-center h-screen items-center grid-cols-1 flex flex-col px-10'>


        <p className=' text-coral-red justify-center lg:w-96 md:w-96 text-red-800'>
          By submitting your login email all your information will be deleted including email, phone number,
          photos, name and all other information will be deleted along with your account</p>

          <h1 className=' text-white text-sm lg:w-96 md:w-96 mt-3 text-center'>You will receive an email for  you to confirm that you acknowledge this process</h1>

        <form onSubmit={handleSubmission} className=' flex-col flex lg:w-96 md:w-96 mt-5'>

          <label className=' text-white'>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} className=' py-4 px-3 002 lg:w-96 md:w-96
           ' placeholder="Email" required/>

           <span className='formInput'>Enter the email you used to sign in</span>

          <button   className=' bg-orange-500 text-white mt-5 w-auto py-2 px-4'>
            Submit
          </button>

          <ToastContainer/>
          
        </form>


        

      </div>

      
      



    </div>
  )
}

export default App

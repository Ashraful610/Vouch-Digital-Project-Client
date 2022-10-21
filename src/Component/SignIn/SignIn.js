import React ,{useState} from 'react';
import { useForm } from "react-hook-form";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const SignIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [show , setShow] = useState(false) 
    console.log(show)

    const handleSignIn = data => console.log(data)
   

    return (
        <div className='w-full'>
            <div className='md:w-2/5 w-full min-h-screen flex justify-center items-center bg-teal-100'>
                {/* ---------- form contaier --------------------- */}
                 <div className='md:w-[80%] w-[90%] min-h-[550px] h-screen flex flex-col justify-between '>
                     <form  onSubmit={handleSubmit(handleSignIn)} className=' space-y-4 mt-[20%]'>
                         <div className='text-center w-full space-y-2'>
                            <h2 className='text-black text-3xl font-sans font-semibold'>Welcome</h2>
                            <h3 className='text-slate-500'>Enter your Username and Passoword</h3>
                         </div>
                         {/* ------- email input div ------------- */}
                         <div className='border-2 rounded flex justify-around p-2'>
                            <PersonOutlineOutlinedIcon className='text-slate-300'/>
                            <input type='text' {...register("name" ,{required:true ,})} placeholder='Username' className='outline-0  w-[90%]'/>   
                         </div>
                         {/* ------- password input div ------------- */}
                         <div  className='border-2 rounded flex justify-around p-2'>
                            <LockOutlinedIcon className='text-slate-300'/>
                            <input type={show ? 'text':'password'} {...register("password" ,{required:true} )}  placeholder='Password' className='w-[80%] outline-0 '/>   
                            {/* --------- handle password show and hide ---------- */}
                             { 
                              show ?<VisibilityOffOutlinedIcon onClick={()=>setShow(!show)} className='text-slate-300'/>: <VisibilityOutlinedIcon onClick={()=>setShow(!show)} className='text-slate-300'/> 
                             }
                         </div>
                         {/* --------- log in button and forget password text */}
                         <div className='flex items-center flex-col space-y-2'>
                            <button type='submit' className='w-full rounded bg-blue-800 text-white p-2'> Login
                            </button>
                            <h3 className='text-slate-500 font-semibold'>Forget password?</h3>
                         </div>
                     </form>
                           {/* ------------- bottom text -------------------- */}
                      <div className='text-center h-fit mb-[5%] '>
                           <h2> Terms of Use Privacy Policy</h2>
                           <h3>© Punctualiti 2022. All rights reserved</h3>
                      </div>
                 </div>
                  
                   
            </div>
            
        </div>
    );
};

export default SignIn;
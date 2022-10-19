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
        <div className='w-full min-h-screen'>
            <div className='w-2/4 min-h-screen flex justify-center items-center '>
                    <form  onSubmit={handleSubmit(handleSignIn)} className='w-[300px] space-y-4'>
                         <div className='text-center w-full '>
                            <h2 className='text-black text-3xl font-serif font-semibold'>Welcome</h2>
                            <h3 className='text-slate-600'>Enter your Username and Passoword</h3>
                         </div>
                         {/* ------- email input div ------------- */}
                         <div className='border-2 rounded flex justify-around p-2'>
                            <PersonOutlineOutlinedIcon className='text-slate-300'/>
                            <input type='text' {...register("name" ,{required:true ,})} placeholder='Username' className='outline-0 placeholder:font-serif w-[90%]'/>   
                         </div>
                         {/* ------- password input div ------------- */}
                         <div  className='border-2 rounded flex justify-around p-2'>
                            <LockOutlinedIcon className='text-slate-300'/>
                            <input type={show ? 'text':'password'} {...register("password" ,{required:true} )}  placeholder='Password' className='w-[80%] placeholder:font-serif outline-0 '/>   
                            {/* --------- handle password show and hide ---------- */}
                             { 
                              show ?<VisibilityOffOutlinedIcon onClick={()=>setShow(!show)} className='text-slate-300'/>: <VisibilityOutlinedIcon onClick={()=>setShow(!show)} className='text-slate-300'/> 
                             }
                         </div>
                            <button type='submit' className='btn'> Sign in</button>
                    </form>
            </div>
            
        </div>
    );
};

export default SignIn;
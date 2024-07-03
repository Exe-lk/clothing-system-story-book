'use client'

import styles from './page.module.scss';
import React, {useState} from 'react';
import {FaUser, FaLock, FaEnvelope} from 'react-icons/fa';
// import valiconm 'validator';
import login from '../../../public/assets/loginRegister/login1.svg'
import register from '../../../public/assets/loginRegister/register.png'
import MainHeading from '@/components/Home/Header/Heading/MainHeading';

const page = () => {

  const PasswordErrorMessage = () => { 
    return ( 
      <p className={styles.FieldError}>Password should have at least 8 characters</p> 
    ); 
   }; 

   const ValidateEmail = () => { 
    return ( 
        <p className={styles.FieldError}>Please enter a valid email</p> 
   )}; 

  

  // const IsFormValid = () => { 
  //   return ( 
  //     firstName &&  
  //     password.value.length >= 8 &&
  //     // validator.isEmail(email.value)
  //   ); 
  // }; 

  const clearForm = () => { 
    setName(""); 
    setEmail({ 
      value: "", 
      isTouched: false, 
    }); 
    setPassword({ 
      value: "", 
      isTouched: false, 
    }); 
    setConPassword({ 
      value: "", 
      isTouched: false, 
    }); 
  }; 
  
  const handleSubmit = (e:any) => { 
    e.preventDefault(); 
    clearForm(); 
  }; 

  const [action, setAction] = useState('');
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState({ 
    value: "", 
    isTouched: false, 
  }); 
  const [password, setPassword] = useState({ 
    value: "", 
    isTouched: false, 
  }); 
  const [conPassword, setConPassword] = useState({ 
    value: "", 
    isTouched: false, 
  }); 

  const RegisterLink = ()=>{
    setAction('active')
  }

  const LoginLink = ()=>{
    setAction('')
  }

  return (
    // <div className={`${styles.wrapper}${action}`}>
    //   <div className={[`${styles.form}`, `${styles.login}`].join(' ')}>
    //     <form action="">
    //       <h1>Login</h1>
    //       <div className={styles.inputBox}>
    //         <input type="text" placeholder='Username' required />
    //         <FaUser className={styles.icon}/>
    //       </div>
    //       <div className={styles.inputBox}>
    //         <input type="password" placeholder='Password' required />
    //         <FaLock className={styles.icon}/>
    //       </div>
            
    //       <div className={styles.rememberForgot}>
    //         <label>
    //           <input type="checkbox" />Remember me
    //         </label>
    //         <a href="#">Forgot password</a>
    //       </div>

    //       <button type='submit'>Login</button>
    //       <div className={styles.registerLink}>
    //         <p>Don't have an account?
    //           <a href="#" onClick={RegisterLink}>Register</a>
    //         </p>
    //       </div> 
    //     </form>
    //   </div>
      
    //   <div className={[`${styles.form}`, `${styles.register}`].join(' ')}>
    //   <form onSubmit={handleSubmit}> 
    //       <h1>Register</h1>

    //       <div className={styles.inputBox}>
    //         <input type="text" 
    //         value={firstName}  
    //         placeholder='First name'
    //         onChange={(e) => { 
    //           setFirstName(e.target.value); 
    //         }} 
    //         required />
    //         <FaUser className={styles.icon}/>
    //       </div>

    //       <div className={styles.inputBox}>
    //         <input type="text" 
    //         value={lastName}  
    //         placeholder='Last name' 
    //         onChange={(e) => { 
    //           setLastName(e.target.value); 
    //         }} 
    //         required />
    //         <FaUser className={styles.icon}/>
    //       </div>

    //       <div className={styles.inputBox}>
    //         <input type="email" 
    //         value={email.value}  
    //         placeholder='Email' 
    //         onChange={(e) => { 
    //           setEmail({ ...email, value: e.target.value }); 
    //         }} 
    //         onBlur={() => { 
    //           setEmail({ ...email, isTouched: true }); 
    //         }} 
    //         required />
    //         <FaEnvelope className={styles.icon}/>
    //         {
    //           // email.isTouched && !validator.isEmail(email.value)?(<ValidateEmail/>):null
    //         }
    //       </div>
          
    //       <div className={styles.inputBox}>
    //         <input type="password" 
    //         value={password.value}  
    //         placeholder='Password' 
    //         onChange={(e) => { 
    //           setPassword({ ...password, value: e.target.value }); 
    //         }} 
    //         onBlur={() => { 
    //           setPassword({ ...password, isTouched: true }); 
    //         }} 
    //         required />
    //         <FaLock className={styles.icon}/>
    //         {password.isTouched && password.value.length < 8 ? ( 
    //          <PasswordErrorMessage /> 
    //        ) : null} 
    //       </div>
            
    //       <div className={styles.rememberForgot}>
    //         <label>
    //           <input type="checkbox" />Remember me
    //         </label>
    //         <a href="#">Forgot password</a>
    //       </div>

    //       <button 
    //       type='submit'
    //       // disabled={!IsFormValid()}
    //       >
    //         Register
    //       </button>

    //       <div className={styles.registerLink}>
    //         <p>Already have an account?
    //           <a href="#" onClick={LoginLink}>Login</a>
    //         </p>
    //       </div> 
    //     </form>
    //   </div>
    // </div>

    <div className={`${styles.wrapper} ${action==='active' ? styles.active : ''} container my-auto d-flex align-items-center justify-content-center vw-100 vh-100`} >
      <div className={`${styles.login} row mx-0 p-2 h-auto text-center`} style={{background:'rgba(249, 249, 249, 1)'}}>
        <div className="col-6 overflow-hidden">
          <img src={login.src} alt="login" className='img-fluid object-fit-cover' style={{height:'300px',width:'600px'}}/>
        </div>
        <div className={`${styles.right} col-6`}>
          <div className='row mx-0 text-center'>
            <p className={`${styles.heading}`}>fashion<span><b>nova</b></span></p>
            <p className='text-uppercase fs-6'>login to your account</p>
          </div>
          <form action="" className='my-1'>
            <label htmlFor="email" className='form-label my-1'>Email address</label>
            <input type="text" id='email' value={email.value} placeholder='Example@gmail.com' onChange={(e)=>{
              setEmail({...email, value:e.target.value})
            }} onBlur={()=>{
              setEmail({...email, isTouched:true})
            }} className='form-control my-1'/>
            <label htmlFor="password" className='form-label my-1'>password</label>
            <input type="password" id='password' value={email.value} onChange={(e)=>{
              setEmail({...password, value:e.target.value})
            }} onBlur={()=>{
              setEmail({...password, isTouched:true})
            }} className='form-control my-1'/>
          </form>
          <div className='row mx-0 text-end my-2'>
             <a href="#" className='text-decoration-none text-black'>Forgot password</a>
          </div>
 
          <button className='btn my-2 d-block mx-auto text-white fs-7 px-5 fw-bold' style={{background:'rgba(180, 110, 28, 1)'}}>LOGIN</button>

          <p>Don’t have an account? <a href="#" className='text-decoration-none' style={{color:'rgba(180, 110, 28, 1)'}} onClick={RegisterLink}>signup here</a></p>
        </div>
        <p className='fs-7'>© Copyright 2024 FN. All Rights Reserved | EXE.LK</p>
      </div>
      <div className={`${styles.register} row mx-0 p-2  h-auto text-center`} style={{background:'rgba(249, 249, 249, 1)'}}>
        <div className="col-6 overflow-hidden">
          <img src={register.src} alt="register" className='img-fluid object-fit-cover' style={{height:'500px',width:'600px'}}/>
        </div>
        <div className={`${styles.right} col-6 `}>
          <div className='row mx-0 text-center'>
            <p className={`${styles.heading}`}>fashion<span><b>nova</b></span></p>
            <p className='text-uppercase fs-6'>register to your account</p>
          </div>
          <form action="" className='my-1'>

            <label htmlFor="name" className='form-label my-1'>Name</label>
            <input type="text" id='name' value={name} placeholder='Jhon Walker' onChange={(e)=>{
              setName(e.target.value)
            }} className='form-control my-1'/>

            <label htmlFor="email" className='form-label my-1'>Email</label>
            <input type="text" id='email' placeholder='Example@gmail.com' value={email.value} onChange={(e)=>{
              setEmail({...email, value:e.target.value})
            }} onBlur={()=>{
              setEmail({...email, isTouched:true})
            }} className='form-control my-1'/>

            <label htmlFor="password" className='form-label my-1'>password</label>
            <input type="password" id='password' value={email.value} onChange={(e)=>{
              setPassword({...password, value:e.target.value})
            }} onBlur={()=>{
              setPassword({...password, isTouched:true})
            }} className='form-control my-1'/>

            <label htmlFor="password" className='form-label my-1'>Confirm Password</label>
            <input type="password" id='password' value={conPassword.value} onChange={(e)=>{
              setConPassword({...conPassword, value:e.target.value})
            }} onBlur={()=>{
              setConPassword({...conPassword, isTouched:true})
            }} className='form-control my-1'/>

          </form>
 
          <button className='btn my-2 d-block mx-auto text-white fs-7 px-5 fw-bold' style={{background:'rgba(180, 110, 28, 1)'}}>REGISTER</button>

          <p>Already have an account? <a href="#" className='text-decoration-none' style={{color:'rgba(180, 110, 28, 1)'}} onClick={LoginLink}>login</a></p>
        </div>
        <p className='fs-7'>© Copyright 2024 FN. All Rights Reserved | EXE.LK</p>
      </div>
    </div>
  )
}

export default page
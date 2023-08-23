import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import empty_values from '../shared/constant'

const Modalform = ({ShowModal,setShowModal,createUser,updatingUser,updateUser,setUpdatingUser}) => {

    const {handleSubmit,register, reset}=useForm();
    
    const submitForm = (data)=>{
        if(updatingUser){
            updateUser(data,reset)
        } else {
            createUser(data, reset);
        }
    };

    const handleShowModal = () =>{

        setShowModal(false);
        reset(empty_values);
        setUpdatingUser(null);
    };


    useEffect(()=>{
        if(updatingUser){
            reset(updatingUser)
        }
        
    },[updatingUser]);

    return (
    <section className={`fixed bg-black/60 top-0 bottom-0 left-0 right-0 z-10
                        flex justify-center items-center transition-opacity w-1/1
                        sm:w-6/7
                        ${ShowModal ? "visible opacity-100": "invisible opacity-0"}`}>
        
        <form onSubmit={handleSubmit(submitForm)} 
            className='bg-gradient-to-b from-indigo-700 from-[50px] to-white to-[50px] grid gap-4 p-2 
                        rounded-lg relative w-[300px] sm:w-[450px]'>

            <button className='absolute -top-0 right-0 sm:-top-0 sm:right-1 bg-white text-indigo-700 rounded-lg w-[30px] h-[30px]  text-[11px] font-bold my-2 text-center
                                border-double border-4 border-indigo-700/50 p-1' 
                                type="button" onClick={()=>handleShowModal()}> X </button>

            <h2 className='text-center text-white bg-indigo-700 text-[18px] font-bold 
                            p-1 my-1'>{updatingUser ? "Editing User" : "Create User" }</h2>

            <div className='grid sm:flex sm:gap-4 sm:justify-between sm:items-center sm:w-1/1'>
                <label className='text-indigo-700 font-medium' htmlFor='first_name'> First Name:</label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md sm:w-[325px] " 
                        id="first_name" 
                        type="text"
                        {...register("first_name")} 
                        placeholder="Christian Orlando" required />
            </div>

            <div className='grid sm:flex sm:gap-4 sm:justify-between sm:items-center sm:w-1/1'>
                <label  className='text-indigo-700 font-medium' htmlFor='last_name'> Last Name:</label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md sm:w-[325px]" 
                                    id="last_name" 
                                    type="text"
                                    {...register("last_name")}
                                    placeholder="Silva Forero" required />
            </div>

            <div className='grid sm:flex sm:gap-4 sm:justify-between sm:items-center sm:w-1/1'>
                <label  className='text-indigo-700 font-medium' htmlFor='email'> Email: </label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md sm:w-[325px]" 
                                    id="email" 
                                    type="text"
                                    {...register("email")}
                                    placeholder="juanita@gmail.com" required />
            </div>

            <div className='grid sm:flex sm:gap-4 sm:justify-between sm:items-center sm:w-1/1'>
                <label className='text-indigo-700 font-medium' htmlFor='password'> Password: </label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md sm:w-[325px]" 
                                    id="password" 
                                    type="text"
                                    {...register("password")}
                                    placeholder="create a password" required />
            </div>

            <div className='grid sm:flex sm:gap-4 sm:justify-between sm:items-center sm:w-1/1'>
                <label className='text-indigo-700 font-medium' htmlFor='birthday'>Birthday: </label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md sm:w-[325px]" 
                                    id="birthday" 
                                    type="date"
                                    {...register("birthday")}  
                                    placeholder="day/month/year" required />
            </div>

            <button className='bg-indigo-700 border-double border-4 border-white text-white p-2 font-medium rounded-full
                                hover:bg-white hover:text-indigo-700 hover:border-indigo-700'> 
                {updatingUser? "Save Changes": "Register User"}
            </button>
        </form>
    </section>
)
}

export default Modalform
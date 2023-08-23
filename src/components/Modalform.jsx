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
    <section className={`fixed bg-black/60 top-0 bottom-0 left-0 right-0
                        flex justify-center items-center transition-opacity
                        ${ShowModal ? "visible opacity-100": "invisible opacity-0"}`}>
        
        <form onSubmit={handleSubmit(submitForm)} className='bg-cyan-300 grid gap-4 p-2 rounded-lg relative'>

            <button className='absolute -top-1 right-2' type="button" onClick={()=>handleShowModal()}> x </button>

            <h2 className='text-center'>{updatingUser ? "Editing User" : "Create User" }</h2>

            <div className='grid'>
                <label htmlFor='first_name'> First Name:</label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md" 
                        id="first_name" 
                        type="text"
                        {...register("first_name")} />
            </div>

            <div className='grid'>
                <label htmlFor='last_name'> Last Name:</label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md" 
                                    id="last_name" 
                                    type="text"
                                    {...register("last_name")} />
            </div>

            <div className='grid'>
                <label htmlFor='email'> Email: </label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md" 
                                    id="email" 
                                    type="text"
                                    {...register("email")} />
            </div>

            <div className='grid'>
                <label htmlFor='password'> Password: </label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md" 
                                    id="password" 
                                    type="text"
                                    {...register("password")} />
            </div>

            <div className='grid'>
                <label htmlFor='birthday'>Birthday: </label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md" 
                                    id="birthday" 
                                    type="date"
                                    {...register("birthday")} />
            </div>

            <button className='bg-black text-white p-2 rounded-full'> 
                {updatingUser? "Save Changes": "Register User"}
            </button>
        </form>
    </section>
)
}

export default Modalform
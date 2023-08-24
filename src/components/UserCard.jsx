import React from 'react'
import logoTrash from "/trash.svg"
import logoPencil from "/pencil.svg"
import logoemail from "/email.svg"
import logobirth from "/birthday.svg"
import logouser from "/user.svg"

const UserCard = ({user, deleteUser, handleUpdateUser}) => {

return (
    <article className='rounded-xl shadow-lg shadow-indigo-500/40 p-3 flex flex-col border border-indigo-500/10 w-[350px] gap-3 
                        items-center hover:scale-[1.1] transition duration-500 sm:flex-row sm:justify-between'>
        <div className='w-4/4 flex flex-col gap-3'>
            <div>
                <h2 className='font-bold my-1 text-indigo-700'>User:</h2> 
                <div className='flex gap-2 items-center justify-start'>
                    <img src={logouser} width = "25" height = "25"/>
                    <span className='font-medium'>{user.first_name+" "+user.last_name}</span>
                </div>
            </div>
        
            <div className='flex gap-2 items-center justify-start '>
                <img src={logoemail} width = "25" height = "25"/>
                <span> {user.email} </span>
            </div>
        
            <div className='flex gap-2 items-center justify-start'>
                <img src={logobirth} width = "25" height = "25"/>
                <span>{user.birthday}</span>
            </div>
        </div>
            
        <div className='flex sm:flex-col  justify-center items-center gap-4'>
            <button onClick={()=> handleUpdateUser(user)} className='border-2 border-indigo-700/20 rounded-2xl p-1'> 
                <img src={logoPencil} width = "30" height = "30"/>
            </button>

            <button onClick={()=> deleteUser(user.id)} className='border-2 border-indigo-700/20 rounded-2xl p-1'>
                <img src={logoTrash} width = "30" height = "30"/>
            </button>
            
        </div>

    </article>
)
}

export default UserCard
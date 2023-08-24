import React from 'react'
import UserCard from './UserCard'

const UsersList = ({userList,userListSearched,deleteUser,handleUpdateUser}) => {

    //if(){

    //}

return (
    <section className=' grid grid-cols-[repeat(auto-fit,_350px)] items-center justify-center gap-5'>
        {
            userList.map((user)=>
                <UserCard key={user.id} user={user} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser}/> 
            ) 
        }
    </section>
)
}

export default UsersList
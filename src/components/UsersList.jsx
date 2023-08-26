import React from 'react'
import UserCard from './UserCard'
import { useEffect } from 'react'

const UsersList = ({userList,userListSearched,renderuser, deleteUser,handleUpdateUser}) => {

    useEffect(()=>{},[userListSearched])

return (
    <section className=' grid grid-cols-[repeat(auto-fit,_350px)] items-center justify-center gap-5'>
        {
            renderuser ?
            userListSearched.map((user)=>
                <UserCard key={user.id} user={user} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser}/> 
            ) 
            :
            userList.map((user)=>
                <UserCard key={user.id} user={user} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser}/> 
            ) 
        }
    </section>
)
}

export default UsersList
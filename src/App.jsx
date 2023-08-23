import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Modalform from './components/Modalform';
import UsersList from './components/UsersList';
import empty_values from './shared/constant'

function App() {

  const [ShowModal, setShowModal] = useState(false);
  const [userList, setUserList]= useState([]);
  const [updatingUser, setUpdatingUser] = useState(null);
  
  const URL="https://users-crud.academlo.tech";

  const getAllUsers= ()=>{
    axios
      .get(URL + "/users/")
      .then(({data})=> {setUserList(data)})
      .catch((error)=> console.log(error))
  };

  const createUser=(newUser, reset)=>{
    axios
      .post(URL + "/users/", newUser)
      .then(()=>{handleShowModal(),getAllUsers(),reset(empty_values)})
      .catch((error)=> console.log(error))
  };

  const deleteUser = (userid)=>{

    axios
      .delete(URL + `/users/${userid}/`)
      .then(()=> getAllUsers())
      .catch((error)=> console.log(error))
  };

  const updateUser = (userUpdated,reset)=>{
    axios
      .patch(URL + `/users/${updatingUser.id}/`,userUpdated)
      .then(()=> {getAllUsers(),setShowModal(false),reset(empty_values),setUpdatingUser(null)})
      .catch((error)=> console.log(error))
  };

  const handleShowModal = () =>{
    setShowModal(!ShowModal);
};

  const handleUpdateUser = (user)=>{
    setShowModal(true);
    setUpdatingUser(user);
  };

  useEffect(() => {
    getAllUsers()
  }, [])
  
  

  return (
    <>
      <header className='bg-gradient-to-r from-indigo-700 from-30% via-indigo-500 via-50% to-indigo-700 to-70%
          w-1/1 flex  flex-col gap-1 justify-center items-center elipse
        text-white shadow-lg shadow-slate-700/90 p-2.5'>
        <span className='p-1 drop-shadow-[0_1px_5px_rgba(255,255,255,0.99)] 
                          text-[30px] font-bold animate-bounce'
                          > YOUR CREATE USER APP </span>
        <form><div className='p-1 text-center'>

                <label htmlFor='searchbar'>Type User Name to Search: </label>
                <input  className="outline-none 
                                    border-[2px] border-black/20 p-1 
                                    rounded-md" 
                        id="searchbar" 
                        type="text"/>
            </div>
        </form>

        <div className=' flex flex-col'>
          <span> Or Create a New One:</span>
          <button onClick={handleShowModal} className='bg-white p-2 text-indigo-700 
                border-double border-4 border-indigo-700/50 rounded-full
                cursor-pointer'>Create New User</button>
        </div>
        
      </header>

      <Modalform 
        ShowModal={ShowModal} 
        createUser={createUser}
        updatingUser={updatingUser}
        updateUser={updateUser }
        setShowModal={setShowModal}
        setUpdatingUser={setUpdatingUser}
      />

      <section className='grid gap-3 mx-auto my-2'>
        <h2 className='text-[25px] font-semibold drop-shadow-[0_0.5px_3px_rgba(255,255,255,1)] 
                        text-center text-indigo-700 '> THESE ARE OUR USERS ALREADY REGISTERED: </h2>
        <UsersList userList={userList} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser}/>
                      
        
      </section>
      
      

      

    </>
  )
}

export default App

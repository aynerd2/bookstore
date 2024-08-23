import React, { useState } from 'react'
import BackButton from './elements/BackButton'
import Spinner from './elements/Spinner'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DeleteBooks = () => {

  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate()
  const authurlBook = process.env.REACT_APP_API_URL
  const token = localStorage.getItem('token')

  const handleDelete = () => {

    if (!token) {
      toast.error('Authorization required, please login')
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`
    }


    axios.delete(`${authurlBook}/${id}`, {headers})
      .then(() => {
        setLoading(false)
        toast.success("Deleted Successfully!")
        setTimeout(() => {
          navigate('/home')
        }, 3000)
      })
      .catch((error) => {
        setLoading(false)
        toast.error("Error: ", error)
      })

  }


  return (

    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {
        loading ? (
          <Spinner />
        ) : (
          <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <h3 className='text-2xl '>Are you sure you want to delete this book?</h3>
            <button
              className='p-4 bg-red-600 text-white m-8 w-full'
              onClick={handleDelete}>Yes, Delete</button>
          </div>
        )
      }

      <ToastContainer />
    </div>

  )
}

export default DeleteBooks
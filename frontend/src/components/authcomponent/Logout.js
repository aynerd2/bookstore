import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import { useNavigate } from 'react-router-dom'


const Logout = () =>{

      const navigate = useNavigate()

      const handleLogout = () =>{
            localStorage.removeItem('token');
            navigate('/')
      }

      return (

            <SendIcon onClick={handleLogout()}/>
      )

}

export default Logout
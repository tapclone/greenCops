import {React,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import AdminClients from '../components/AdminPanel/AdminClients'
import AdminMain from '../components/AdminPanel/AdminMain'

function AdminClientsPage() {

  const navigate=useNavigate()
 const token=localStorage.getItem("adminToken");

 useEffect(()=>{
  if(!token){
    navigate('/admin')
   }
 },[])
 if(token)
  return (
    <div>
        <AdminMain></AdminMain>
        <AdminClients></AdminClients>
    </div>
  )
}

export default AdminClientsPage
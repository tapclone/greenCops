import {React,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import AdminGallery from '../components/AdminPanel/AdminGallery'
import AdminMain from '../components/AdminPanel/AdminMain'

function AdminGalleryPage() {
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
        <AdminGallery></AdminGallery>
    </div>
  )
}

export default AdminGalleryPage
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { swalFire } from '../../Helpers/Swalfire';
import {useDispatch} from 'react-redux'
import {info} from '../../Redux/Slice';

const schema = yup
  .object()
  .shape({
    email: yup.string().required().email(),
    password: yup.string().required()
  })

 function AdminLogin(){
const API_URL=import.meta.env.VITE_APP_API_URL
//const API_URL="http://localhost:9000"
const navigate=useNavigate()
const dispatch=useDispatch()

const {register,handleSubmit, formState:{errors}}=useForm({
    resolver:yupResolver(schema)
})
      const handleData=async(data)=>{
         const payLoad={
         email:data.email,
         password:data.password
        }
      const response=await axios.post(`${API_URL}/api/Admin-login`,payLoad,{
            headers:{
                "Content-Type":"application/json"
            }
           })
    if(response.data.code==200){
        const obj = response.data.data
        console.log(obj);
        
        dispatch(info(obj))
        // localStorage.setItem("data",JSON.stringify(response.data.data))
        localStorage.setItem("userType",JSON.stringify('admin'))


        //alert("Login Successfull !...")
        swalFire("Auth", "Login Successfull !...", "success")        
        navigate('/admin/recruiterlist')
    }else{
        //alert("Invalid Email or Password !...")
        swalFire("Auth", "Invalid Email or Password !...", "error")
    }
      
      }

    return(<>
    <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
            <div className="row mt-3">
                <div className="col-sm-6 form_div_register recuiter_register">
                 <div className="register_img"></div>
                </div>
                <div className="col-sm-6 form_div_login">
                    <h2 className="recruiter_signUp_text">Admin <span style={{color: "#db0249"}}>Login</span></h2>
                <div className="p-4">
                <form onSubmit={handleSubmit(handleData)}>
                <div className="row mb-4 pt-3 ">
                    <input  className="form-control " 
                    placeholder="Enter Your email"
                    type="text"
                    {...register('email')}
                    />
                     {errors.email?.message && <span  className='error_msg'>{errors.email?.message}</span>}
                </div>
                <div className="row mb-4 pt-3">
                    <input  className="form-control " 
                    placeholder="Enter Your password"
                    type="password"
                    {...register('password')}
                    />
                    {errors.password?.message && <span  className='error_msg'>{errors.password?.message}</span>}
                </div>
                
                <div className="row mb-4 pt-3">
                    <input  className="register_submit form-control " 
                    type="submit"
                    value="Login"
                    />
                </div>
                </form>     
                </div>
                </div>
            </div>
        </div>
        <div className="col-sm-1"></div>
    </div>
    <br />
    <br />
    </>)
 }

 export default AdminLogin;
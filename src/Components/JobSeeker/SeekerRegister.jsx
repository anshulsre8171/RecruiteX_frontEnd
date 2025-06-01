import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { swalFire } from '../../Helpers/Swalfire';
import { useNavigate } from 'react-router-dom';
const schema = yup
    .object()
    .shape({
        name: yup.string().min(2).max(50).required("Name is required"),
        img: yup.mixed().required('File is required')
            // only images
            .test('fileType', 'Only image files are allowed', (value) => {
                const file = value?.[0];
                const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                return file && allowedTypes.includes(file.type);
            }),
        email: yup.string().email("Invalid email address").required(),
        contact: yup.string().matches(/^[789]\d{9}$/, "enter indian number  10 digits").required(),
        password: yup.string().required(),
        qualification: yup.string().required(),
        location: yup.string().required(),
        preference: yup.string().required(),
        resume: yup.mixed().required() // only pdf
            .test('fileType', 'Only PDF files are allowed', (value) => {
                const file = value?.[0];
                return file && file.type === 'application/pdf' && file.name.toLowerCase().endsWith('.pdf');
            }),
        // gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required(),
    })
function SeekerRegister() {
 const API_URL=import.meta.env.VITE_APP_API_URL
  const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const handleData = async (data) => {
       //  console.log(`${API_URL}`,"ssssssssssssssssss");
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("img", data.img[0]);
        formData.append("email", data.email)
        formData.append("contact", data.contact)
        formData.append("password", data.password)
        formData.append("qualification", data.qualification)
        formData.append("location", data.location)
        formData.append("preference", data.jobPreference)
        formData.append("resume", data.resume[0])
       
        
        await axios.post(`${API_URL}/api/seeker-register`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        //alert("Registation SuccessFull !.")
        swalFire("Auth", "Registation SuccessFull !.", "success")
        navigate("/seeker/login")
    }

    return (<>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="row">
                    <div className="col-sm-6 form_div_register recuiter_register">
                        <div className="register_img"></div>
                    </div>
                    <div className="col-sm-6 form_div_register ">
                        <h2 className="recruiter_signUp_text">Seeker <span style={{ color: "#db0249" }}>SingUp</span></h2>
                        <div className="p-4">
                            <form onSubmit={handleSubmit(handleData)}>
                                <div className="row mb-4">
                                    <input className="form-control "
                                        placeholder="Enter Your Name"
                                        type="text"
                                        {...register('name')}
                                    />
                                    {errors.name?.message && <span className='error_msg'>{errors.name?.message}</span>}
                                </div>
                                <div className="row mb-4">
                                    <input className="form-control "
                                        type="file"
                                        accept="image/*"
                                        title="Select your Profile picture"
                                        {...register('img')}
                                    />
                                    {errors.img?.message && <span className='error_msg'>{errors.img?.message}</span>}
                                </div>
                                <div className="row mb-4 ">
                                    <input className="form-control "
                                        placeholder="Enter Your email"
                                        type="text"
                                        {...register('email')}
                                    />
                                    {errors.email?.message && <span className='error_msg'>{errors.email?.message}</span>}
                                </div>
                                <div className="row mb-4">
                                    <input className="form-control "
                                        placeholder="Enter Your contact"
                                        type="tel"
                                        maxLength={10}
                                        {...register('contact')} />
                                    {errors.contact?.message && <span className='error_msg'>{errors.contact?.message}</span>}
                                </div>
                                <div className="row mb-4">
                                    <input className="form-control "
                                        placeholder="Enter Your password"
                                        type="password"
                                        {...register('password')}
                                    />
                                    {errors.password?.message && <span className='error_msg'>{errors.password?.message}</span>}
                                </div>
                                <div className="row mb-4">
                                    <input className="form-control "
                                        placeholder="Enter Your Qualification"
                                        type="text"
                                        {...register('qualification')}
                                    />
                                    {errors.qualification?.message && <span className='error_msg'>{errors.qualification?.message}</span>}
                                </div>
                                <div className="row mb-4">
                                    <input className="form-control "
                                        placeholder="Enter Your location"
                                        type="text"
                                        {...register('location')} />
                                    {errors.location?.message && <span className='error_msg'>{errors.location?.message}</span>}
                                </div>
                                <div className="row mb-4">
                                    <input className="form-control "
                                        placeholder="Enter Your Job Preference"
                                        type="text"
                                        {...register('preference')}
                                    />
                                    {errors.preference?.message && <span className='error_msg'>{errors.preference?.message}</span>}
                                </div>
                                <div className="row mb-4">
                                    <input
                                        className="form-control"
                                        type="file"
                                        accept="application/pdf"
                                         title="Select your Resume only PDF formate"
                                        {...register('resume')}
                                    />

                                    {errors.resume?.message && <span className='error_msg'>{errors.resume?.message}</span>}
                                </div>
                                <div className="row mb-4">
                                    <input className="register_submit form-control "
                                        type="submit"
                                        value="SignUp"
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

export default SeekerRegister;
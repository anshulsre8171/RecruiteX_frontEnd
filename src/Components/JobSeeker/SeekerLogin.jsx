import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { swalFire } from '../../Helpers/Swalfire';
import { useState } from 'react';
const schema = yup
    .object()
    .shape({
        email: yup.string().required().email(),
        password: yup.string().required()
    })

function SeekerLogin() {
    const API_URL = import.meta.env.VITE_APP_API_URL
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleData = async (data) => {
        setLoading(true); // Show spinner
        const payLoad = {
            email: data.email,
            password: data.password
        }
        try {
            const response = await axios.post(`${API_URL}/api/Seeker-login`, payLoad, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.data.code == 200) {
                localStorage.setItem("data", JSON.stringify(response.data.data))
                localStorage.setItem("userType", JSON.stringify('seeker'))
                // alert("Login Successfull !...")
                swalFire("Auth", "Login Successfull !...", "success")

                navigate('/seeker/jobapply')
            } else if (response.data.code == 203) {
                // alert("Your Account is Blocked contact to Admin")
                swalFire("Auth", "Your Account is Blocked contact to Admin", "warning")

            }
            else if (response.data.code == 302) {
                //alert("Invaild Email or password")
                swalFire("Auth", "Invaild Email or password", "error")

            }
        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }

    }

    return (<>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="row mt-3">
                    <div className="col-sm-6 form_div_register recuiter_register">
                        <div className="register_img"></div>
                    </div>
                    <div className="col-sm-6 form_div_login">
                        <h2 className="recruiter_signUp_text">Seeker <span style={{ color: "#db0249" }}>Login</span></h2>
                        <div className="p-4">
                            <form onSubmit={handleSubmit(handleData)}>
                                <div className="row mb-4 pt-3 ">
                                    <input className="form-control "
                                        placeholder="Enter Your email"
                                        type="text"
                                        {...register('email')}
                                    />
                                    {errors.email?.message && <span className='error_msg'>{errors.email?.message}</span>}
                                </div>
                                <div className="row mb-4 pt-3">
                                    <input className="form-control "
                                        placeholder="Enter Your password"
                                        type="password"
                                        {...register('password')}
                                    />
                                    {errors.password?.message && <span className='error_msg'>{errors.password?.message}</span>}
                                </div>

                                <div className="row mb-4 pt-3">
                                    <button className="btn btn-primary" disabled={loading}>
                                        {loading ? (
                                            <> <span className="spinner-border spinner-border-sm me-2" role="status"
                                                aria-hidden="true" ></span> Logging in...
                                            </>
                                        ) : ("Login")}
                                    </button>
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

export default SeekerLogin;
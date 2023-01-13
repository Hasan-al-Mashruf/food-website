import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { data } from 'autoprefixer';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

const Signin = () => {
    const { setSignedinUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const { googleLogin, login } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit = data => {
        login(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate('/shop')
                window.location.reload()
                // ...
            }).catch((error) => console.error(error));
    }

    const googleSignin = () => {
        googleLogin(provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate('/shop')
                window.location.reload()
                // ...
            }).catch((error) => console.error(error));
    }
    return (
        <div className='grid md:grid-cols-2 gap-5 md:w-[60%] w-[95%] mx-auto mt-10 h-[]'>
            <div>

            </div>
            <div className='border p-5 rounded'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input input-bordered w-full" placeholder='Email....'
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email?.type === 'required' && <p role="alert">Provide your email</p>}

                    <input className="input input-bordered w-full my-5" placeholder='******'
                        {...register("password", { required: 'password is required' })}
                        aria-invalid={errors.mail ? "true" : "false"}
                    />
                    {errors.password && <p role="alert">{errors.password?.message}</p>}
                    <p className='text-sm'><Link to='/signup' className='text-orange-500'>New to Eatssy, Plz signup here</Link></p>
                    <input type="submit" className='btn bg-white border-gray-400 shadow-sm text-gray-500  shadow-[#77767688] mt-3 w-full' />
                </form>
                <div>
                    <div className='mt-5 md:w-[73%] mx-auto'>
                        <button className="btn gap-2 text-white mr-2" onClick={googleSignin}>
                            <FcGoogle className='text-xl' />
                            Google
                        </button>
                        <button className="btn gap-2 text-white">
                            <AiFillFacebook className='text-xl' />
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, updateName } = useContext(AuthContext)

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                if (user) {
                    updateName(data.name)
                    window.location.reload()
                    console.log(user)
                }
                
                // ...
            }).catch((error) => console.error(error));
    }

    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:w-[60%] mx-auto mt-10 h-[]'>
                <div>

                </div>
                <div className='border p-5 rounded'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="input input-bordered w-full mt-2" placeholder='Name'
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name?.type === 'required' && <p role="alert">Name is required</p>}

                        <input className="input input-bordered w-full mt-5" placeholder='Email....'
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email?.type === 'required' && <p role="alert">Provide your email</p>}

                        <input className="input input-bordered w-full mt-5" placeholder='******'
                            {...register("password", { required: 'password is required' })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                       
                        <input type="submit" value={'register'} className='btn bg-primary border-none shadow-sm text-black mt-3 w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
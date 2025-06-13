import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Login = () => {

    const [error, setError] = useState("");
    const { signIn, signInWithGoogle} = use(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(() => {

                Swal.fire({
                    icon: "success",
                    title: "Logged In Successfully !",
                    showConfirmButton: true,
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            navigate(`${location.state ? location.state : '/'}`);
                        }
                    });
            })
            .catch((err) => {
                toast.error(`ERROR - ${err.message} `);
                setError(err.message);
            })
    }

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logged In Successfully !",
                    showConfirmButton: true,
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            navigate(`${location.state ? location.state : '/'}`);
                        }
                    });
            })
            .catch(err => {
                toast.error(`ERROR - ${err.message} `);
                setError(err.message);
            })
    }

    return (
        <div className='max-w-[1600px] mx-auto py-40 flex justify-center items-center'>
            <div className="card w-full max-w-sm shrink-0 shadow-2xl text-[#333333]">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Login now!</h1>

                    <form onSubmit={handleLogin} className="fieldset">

                        <label className="label text-[#333333]">Email</label>
                        <input type="email" name='email' className="input text-[#333333]" placeholder="Email" required />

                        <label className="label text-[#2F3A4A]">Password</label>
                        <input type="password" name='password' className="input text-[#333333]" placeholder="Password" required />
                        <div>
                            <Link className="link link-hover text-indigo-700" to="/login">Forgot password?</Link>
                        </div>

                        {
                            error && <p className='text-red-600'>{error}</p>
                        }

                        <button type='submit' className="btn bg-green-500 text-[#333333] mt-4">Login</button>
                    </form>

                    {/* Google */}
                    <button onClick={handleGoogleLogIn} type='submit' className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p className='font-medium'>Don't have an account? Please {" "}
                        <Link to='/register' className='text-[#005C99] underline text-lg'>
                            Register!
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Login;
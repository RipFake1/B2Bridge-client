import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState([]);
    const [firebaseError, setFirebaseError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {

        e.preventDefault();
        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
        const userPhoto = e.target.photoUrl.value;
        const userPassword = e.target.password.value;

        //name error
        if (userName.length < 5) {
            setNameError("Name should be More than 5 character!");
            return;
        }
        else {
            setNameError("");
        }

        //email error
        const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValidEmail(userEmail)) {
            setEmailError("Please provide a CORRECT email address !");
            return;
        } else {
            setEmailError("");
        }

        //password error
        const errors = [];
        const hasUppercase = (str) => /[A-Z]/.test(str);
        const hasLowercase = (str) => /[a-z]/.test(str);

        if (userPassword.length < 6) {
            errors.push("Password should be at least 6 CHARACTERS long !");
        }
        if (!hasUppercase(userPassword)) {
            errors.push("Password should have an UPPERCASE character !");
        }
        if (!hasLowercase(userPassword)) {
            errors.push("Password should have a LOWERCASE character !");
        }

        if (errors.length !== 0) {
            setPasswordError(errors);
            return;
        }
        else {
            setPasswordError([]);
        }

        createUser(userEmail, userPassword)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: userName, photoURL: userPhoto })
                    .then(() => {
                        setUser({ ...user, displayName: userName, photoURL: userPhoto });

                        Swal.fire({
                            icon: "success",
                            title: "Registered Successfully !",
                            showConfirmButton: true,
                        })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/');
                                }
                            });
                    })
                    .catch((error) => {
                        toast.error(`ERROR - ${error.message} `);
                        setFirebaseError(error.message);
                        setUser(user);
                    })
            })
            .catch((error) => {
                toast.error(`ERROR - ${error.message} `);
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
            });
    }

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Registered Successfully !",
                    showConfirmButton: true,
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            navigate('/');
                        }
                    });
            })
            .catch(error => {
                toast.error(`ERROR - ${error.message} `);

                setFirebaseError(error.message);
            })
    }

    return (
        <div className='max-w-[1600px] mx-auto py-20 flex justify-center items-center'>

            <Helmet>
                <title>Register</title>
            </Helmet>

            <div className="card w-full max-w-sm shrink-0 shadow-2xl text-[#333333]">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Register now!</h1>

                    <form onSubmit={handleRegister} className="fieldset">

                        <label className="label text-[#333333]" >Full Name</label>
                        <input type="text" name='name' className="input text-[#333333]" placeholder="Full Name" required />

                        {
                            nameError && <p className='text-red-600'>{nameError}</p>
                        }

                        <label className="label text-[#333333]" >Email</label>
                        <input type="email" name='email' className="input text-[#333333]" placeholder="Email" required />

                        {
                            emailError && <p className='text-red-600'>{emailError}</p>
                        }

                        <label className="label text-[#333333]" >Photo URL</label>
                        <input type="text" name='photoUrl' className="input text-[#333333]" placeholder="Photo URL" required />

                        <label className="label text-[#333333]" >Password</label>
                        <input type="password" name='password' className="input text-[#333333]" placeholder="Password" required />

                        {passwordError && passwordError.map((error, index) => (
                            <p key={index} className="text-red-600">{error}</p>
                        ))}

                        {
                            firebaseError && <p className='text-red-600'>{firebaseError}</p>
                        }

                        <button type='submit' className="btn bg-green-500 text-[#333333] mt-4">Register</button>
                    </form>

                    <div className="divider">OR</div>

                    {/* Google */}
                    <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p className='font-medium'>Already have an account? Please {" "}
                        <Link to='/login' className='text-[#005C99] underline text-lg'>
                            Log in!
                        </Link>
                    </p>

                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Register;
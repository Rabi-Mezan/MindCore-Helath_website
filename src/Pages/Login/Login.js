import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { user, isLoading, setIsLoading, setUser, googleSignIn, createNewuser, userLogin, logOut } = useAuth();
    const [isLogin, setIslogin] = useState(false);
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleName = (e) => {
        setname(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }



    const toogleCheckBox = (e) => {
        setIslogin(e.target.checked);
        console.log(e.target.checked)
    }
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/home';

    //   email password registration and login  

    const handleRegister = (e) => {
        e.preventDefault();

        isLogin ? userLogin(email, password) : createNewuser(name, email, password)

    }



    // google sign in
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        googleSignIn()
            .then(result => {
                const user = result.user
                history.push(redirectUrl)
                console.log(result.user);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }


    return (
        <div class="max-w-sm mx-auto rounded shadow-lg md:max-w-md my-10 p-6 pb-10 bg-gray-100">
            <div class=" flex justify-center border-b border-gray-300">
                <h1 class="font-bold text-lg text-gray-400 pb-1">Please {isLogin ? 'Login' : 'Register'} Here</h1>
            </div>
            <div class=" pt-6">
                <form onSubmit={handleRegister} class=" text-center">
                    {
                        !isLogin && <input onChange={handleName} type="text" name="displayname" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 text-gray-600" placeholder="Display name*" />

                    }
                    <input onChange={handleEmail} type="email" name="usermail" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 mt-2 text-gray-600" placeholder="E-mail*" />

                    <input onChange={handlePassword} type="password" name="userpass" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Password*" />

                    {
                        !isLogin &&
                        <input type="password" name="confirmpass" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Confirm password*" />
                    }

                    <div class="flex justify-center">

                    </div>
                    <button onClick={() => createNewuser(email, password)} type="submit" class="w-80 h-9 bg-blue-500 text-sm font-semibold mt-3 rounded-sm text-gray-100 focus:outline-none hover:bg-blue-600"> {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
            </div>
            <div class="pt-3 text-center flex justify-center items-center mt-4">
                <span>
                    <input onChange={toogleCheckBox} className='' type="checkbox" name="" id="" />
                </span>
                <span class="text-gray-600 text-xs w-2/3">Already have an account?

                </span>

            </div>
            <div class="flex justify-between items-center mt-1">
                <hr class="w-full border-gray-300" /> <span class="p-2 text-gray-400 text-xs" >OR</span>
                <hr class="w-full border-gray-300" />
            </div>
            <div class="pt-2">
                <p class="text-gray-700 font-bold pb-2 pl-1 text-center" style={{ fontSize: "10px" }}>You can also login with </p>

                <div class="flex justify-between items-center">

                    <button onClick={handleGoogleSignIn} type="button" class="w-1/2 m-auto  p-2 font-bold text-white bg-red-600 rounded focus:outline-none hover:bg-red-800" style={{ fontSize: "12px" }}>
                        <i class="fab fa-google text-white mr-2"></i>Google</button>

                </div>
            </div>
        </div >
    );
};

export default Login;
import React from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { user, googleSignIn, logOut } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn();
    }


    return (
        <div class="max-w-sm mx-auto rounded shadow-lg md:max-w-md my-10 p-6 pb-10 bg-gray-100">
            <div class=" flex justify-center border-b border-gray-300">
                <h1 class="font-bold text-lg text-gray-400 pb-1">Register Here</h1>
            </div>
            <div class=" pt-6">
                <form class=" text-center">
                    <input type="text" name="displayname" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 text-gray-600" placeholder="Display name*" />

                    <input type="email" name="usermail" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 mt-2 text-gray-600" placeholder="E-mail*" />

                    <input type="password" name="userpass" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Password*" />

                    <input type="password" name="confirmpass" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Confirm password*" />

                    <div class="flex justify-center">

                    </div>
                    <button type="submit" class="w-80 h-9 bg-blue-500 text-sm font-semibold mt-3 rounded-sm text-gray-100 focus:outline-none hover:bg-blue-600">Register
                    </button>
                </form>
            </div>
            <div class="pt-3 text-center flex justify-center items-center mt-4">
                <span>
                    <input className='' type="checkbox" name="" id="" />
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

                    <button onClick={handleGoogleSignIn} type="button" class="w-1/2 mx-1  p-2 font-bold text-white bg-red-600 rounded focus:outline-none hover:bg-red-800" style={{ fontSize: "12px" }}>Google</button>

                    <button type="button" class="w-1/2 mx-1  p-2 font-bold text-white bg-blue-800 rounded focus:outline-none hover:bg-blue-900" style={{ fontSize: "12px" }}>Github</button>


                </div>
            </div>
        </div >
    );
};

export default Login;
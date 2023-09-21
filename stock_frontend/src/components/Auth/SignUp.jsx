import { useState } from "react";
import axios from "axios";


export const SignUp = ({ toggleComponent }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRole] = useState("user");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password, role, username };
        
        axios.post("http://localhost:8081/user", user).then((res) => {
            alert("User Created");
            window.location.href = "/";
        });

    };
    return (
        <div >
            <div className="bg-blue-300 shadow-xl rounded-lg m-9 p-8 mb-8 flex flex-col items-center">

                <h3 className="text-3xl text-center items-center mb-8 font-semibold w-full border-b-2 border-gray-300 pb-4 tracking-wider">SIGN UP</h3>

                <input type="text" onChange={(e) => setUserName(e.target.value)} className="py-3 px-4  my-2 outline-none w-3/4 rounded-lg focus:ring-2 focus:ring-blue-900 bg-gray-100 text-gray-700" placeholder="Username" />

                <input type="email" onChange={(e) => setEmail(e.target.value)} className="py-3 px-4  my-2 outline-none w-3/4 rounded-lg focus:ring-2 focus:ring-blue-900 bg-gray-100 text-gray-700" placeholder="Email" />

                <input type="password" onChange={(e) => setPassword(e.target.value)} className="py-3 px-4  my-2 outline-none w-3/4 rounded-lg focus:ring-2 focus:ring-blue-900 bg-gray-100 text-gray-700" placeholder="Password" />


                <div className="mt-4 space-x-2">
                    <label htmlFor="role" className="font-bold tracking-wider">Select a Role :</label>
                    <select id="role" name="role" onChange={(e) => setRole(e.target.value)} className="p-2 rounded-lg bg-gray-100">
                        <option value="user" >User</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>

                <div className="mt-8">
                    <button type="button" onClick={handleSubmit} className="transition duration-400 mb-4 ease-in-out font-bold bg-blue-800 text-white tracking-widest border-2 border-white px-6 py-2 rounded-lg hover:bg-transparent hover:text-blue-950 hover:border-blue-900">Signup</button>
                </div>

                <div className="flex  space-x-4 items-center">
                    <h3>Already have an account ?</h3>
                    <button
                        onClick={toggleComponent}
                        className='mx-2 text-blue-900 font-bold border-2 border-black transition duration-300 ease-in-out  hover:bg-white  rounded-xl p-2 px-4 hover:underline'>LogIn</button>
                </div>
            </div>
        </div>



    )
}


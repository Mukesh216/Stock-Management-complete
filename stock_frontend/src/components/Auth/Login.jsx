import { useState } from "react";
import axios from "axios";

export const Login = ({ toggleComponent }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [authenthicated, setAuthenthicated] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        const checkuser = { email, password  };
        axios.get(`http://localhost:8081/user/auth?email=${email}&password=${password}`, checkuser).then((res) => {
            if (res.data !== "ok") {
                setError(res.data);
                console.log(res.data);
            }
            else {
                setAuthenthicated(true);
                localStorage.setItem("authenthicated", authenthicated);
                axios.get(`http://localhost:8081/user/find?email=${email}`).then((res) => {
                    
                    localStorage.setItem("user", JSON.stringify(res.data));
         
                    if (res.data.role === 'user') {
                        console.log("inside if");
                        window.location.href = "/user";
                    }
                    else if(res.data.role === "manager"){
                        window.location.href = "/manager"
                    }
                });
            }
                
        });
    };

    return (
        <div>
            <div className="bg-blue-300 shadow-xl rounded-lg m-9 p-8 mb-8 flex flex-col items-center">
                <h3 className="text-3xl text-center items-center mb-8 font-semibold w-full border-b-2 border-gray-300 pb-4 tracking-wider">LOGIN</h3>

                <input type="email" onChange={(e) => setEmail(e.target.value)}
                    className="py-3 px-4  my-2 outline-none w-3/4 rounded-lg focus:ring-2 focus:ring-blue-900 bg-gray-100 text-gray-700" placeholder="Email" />

                <input type="password" onChange={(e) => setPassword(e.target.value)} className="py-3 px-4 my-2 outline-none w-3/4 rounded-lg focus:ring-2 focus:ring-blue-900 bg-gray-100 text-gray-700" placeholder="Password" />


                {error && <div className="text-red-500">{error}</div>}

                <div className="mt-8">
                    <button type="button" onClick={handleSubmit} className="transition duration-400 mb-4 ease-in-out font-bold tracking-widest border-2 border-blue-900 px-6 py-2 rounded-lg hover:bg-blue-900 hover:text-white hover:border-white">LOGIN</button>
                </div>


                <div className='mx-10 xl:flex w-full text-center justify-center space-x-4 mt-2 font-semibold items-center'>
                    <h1>
                        Don&apos;t have an new account?
                    </h1>
                    <div className="mt-2 xl:mt-0 flex space-x-4 justify-center items-center">
                        <h3>Create one here</h3>
                        <button
                            onClick={toggleComponent}
                            className='mx-2 text-blue-900 font-bold border-2 border-black transition duration-300 ease-in-out  hover:bg-white  rounded-xl p-2 px-4 hover:underline'>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

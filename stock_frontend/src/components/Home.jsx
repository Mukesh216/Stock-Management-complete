import { useState } from "react";
import { Login } from "./Auth/Login";
import { SignUp } from "./Auth/SignUp";

export const Home = () => {

    const [showLogin, setShowLogin] = useState(true);

  const toggleComponent = () => {
    setShowLogin(!showLogin);
  };

    return (
        <>
            <div className="flex justify-center items-center h-screen w-full">
                <div className="flex  h-full w-full">
                    <div className="bg-blue-950 w-7/12 relative flex flex-col justify-center overflow-hidden">
                        <div className="w-full">
                            <div className="w-fit lg:ps-8">
                                <h1 className="text-5xl font-bold text-left leading-relaxed tracking-widest text-white">SKI STOCK MARKET <br />& FUNDS</h1>
                                <hr className="border mt-4 border-blue-300" />
                            </div>
                        </div>
                        <div>
                            <img className="absolute top-10 right-20 w-80 h-80" src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1694688620/jio-removebg-preview_vzg5f5.png" alt="imageJi" />
                        </div>
                        <div>
                            <img className="absolute -bottom-20 -left-35 rotate-180 w-80 h-80" src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1694688620/jio-removebg-preview_vzg5f5.png" alt="imageJi" />
                        </div>
                    </div>
                    <div className="w-5/12  bg-blue-100 flex justify-center items-center ">
                        <div className="w-full">
                            <div>
                                {showLogin ? (
                                    <Login toggleComponent={toggleComponent} />
                                ) : (
                                    <SignUp toggleComponent={toggleComponent} />
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}






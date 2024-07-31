import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {

    /*Keeping track of the inputs using use states in the signup */
    const [inputs,setInputs] = useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    })
/*  handle checkbox change*/
    const handleCheckboxChange =(gender) =>{
        setInputs({...inputs,gender})
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); /*prevents the page from refreshing */
        console.log(inputs);
    }
  return (
      <div className="flex flex-col items-center justify-center min-w-96">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
              <h1 className="text-3xl font-semibold text-center text-gray-300">
                  Sign Up
                  <span className="text-blue-500">ChatApp</span>
              </h1>
              <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10'
                        /*adding the value prop to the input  and the onchange listener to update the full name coming from the input*/
                            value={inputs.fullName}
                            onChange={(e)=> setInputs({...inputs, fullName:e.target.value})}
                        
                        />
                    </div>

                  <div>
                      <label className="label p-2">
                          <span className="text-base label-text">Username</span>
                      </label>
                      <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
                        value={inputs.username}
                        onChange={(e)=> setInputs({...inputs, username: e.target.value})}
                        ></input>
                  </div>
                  <div>
                      <label className="label">
                          <span className="text-base label-text">Password</span>
                      </label>
                      <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                        value={inputs.password}
                        onChange={(e)=> setInputs({...inputs, password: e.target.value})}></input>
                  </div>
                  <div>
                      <label className="label">
                          <span className="text-base label-text">Confirm Password</span>
                      </label>
                      <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
                        value={inputs.confirmPassword}
                        onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value
                        })}></input>
                  </div>
                
                
                  <GenderCheckbox  onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
                  <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href="#">
                      Already have an account?
                  </Link>

                  <div>
                      <button className="btn btn-block btn-sm mt-2">Sign Up</button>
                  </div>
              </form>
          </div>
      </div>
  );
};

export default SignUp;


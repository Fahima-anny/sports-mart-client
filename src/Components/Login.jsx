/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";


const Login = () => {

  const {login, googleSignIn} = useContext(AuthContext) ;
const navigate = useNavigate() ;
// const location = useLocation() ;
// console.log(location.state);

const handleSubmit = e => {
    e.preventDefault() ;
    const form = e.target ;
    const email = form.email.value ;
    const pass = form.pass.value ;
    // console.log(email, pass) ;

    login(email, pass)
    .then(res => {
      // console.log(res.user.displayName)
      // setProfile(res.user.photoURL)
      toast.success(`Welcome ${res.user.displayName}`)
      form.reset() ; 
      navigate("/")
// navigate( location?.state ? location.state : "/")
    })
    .catch(er => {
      console.log(er)
      toast.error("Wrong Email/Password")
    })
}

const handleGoogleLogin = () => {
  googleSignIn()
  .then(res => {
    // console.log(res.user)
    toast.success(`Welcome ${res.user.displayName}`)
    // console.log(user.email)
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if(emailRegex.test(location.state)){
    // navigate( location?.state ? location.state/user.email : "/")
    // console.log("path e mail ase")
    // }
    // console.log("path e mail nai")
    // navigate( location?.state ? location.state : "/")
    navigate("/")

  })
  .catch(er => {
    console.log(er)
  })
}

    return (
      <Fade
      direction="left"
      duration={1600}
      cascade
      >
        <div className="hero min-h-[75vh]">
                <Helmet>
        <title>Sports Mart | Login</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
              <div className="hero-content flex-col gap-8 p-0 w-full">
              <h1 className="text-primary text-center font-semibold text-3xl pt-4">Login Now</h1>
          <div className="card bg-base-200 w-full max-w-md rounded-md">
            <form className="card-body p-3 md:p-8" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="pass" type="password" placeholder="password" className="input input-bordered" required />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#ffa400] hover:bg-[#d28900] text-black">Login</button>
                <button className="btn btn-outline mt-5" onClick={handleGoogleLogin}>Login With Google</button>
              </div>
<p className="font-semibold text-gray-600 text-center mt-2">Don't have an account ? <Link to='/register' className="text-primary underline">Register</Link> Now.</p>
            </form>
          </div>
        </div>
      </div>
      </Fade>
    );
};

export default Login;

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Register = () => {

const {registerUser, updateUser, setProfile, googleSignIn} = useContext(AuthContext) ;
const navigate = useNavigate() ;

    const handleSubmit = e => {
        e.preventDefault() ;
        const form = e.target ;
        const email = form.email.value ;
        const pass = form.pass.value ;
        const photo = form.photo.value ;
        const name = form.name.value ;
        // console.log(email, pass,photo,name) ;

        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!regex.test(pass)) {
          Swal.fire({
            text: "Your password must contain 1 uppercase, 1 lowercase, at least 6 characters",
            icon: "error"
          });
          return ;
        } 

        registerUser(email,pass)
        .then(res=> {
          // console.log(res.user)
         res.user && updateUser({displayName: name, photoURL: photo})
          .then(()=>{
            // console.log("name,photo updated",res.user.photoURL)
            form.reset() ;
            setProfile(photo)
            Swal.fire({
              title: "Congrats!",
              text: `${name} your account has been created`,
              icon: "success"
            });
            navigate("/")
          })
          .catch(er => console.log(er))
        })
        .catch(er => console.log(er))
    }


    
const handleGoogleLogin = () => {
  googleSignIn()
  .then(res => {
    // console.log(res.user)
    toast.success(`Welcome ${res.user.displayName}`)
navigate("/")
  })
  .catch(er => {
    console.log(er)
  })
}

    return (
        <div className="hero min-h-[80vh]">
           <Helmet
           >
        <title>Sports Mart | Register</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <div className="hero-content flex-col gap-8 p-0 w-full">
            <h1 className="text-primary text-center font-semibold text-3xl pt-3">Register for free</h1>
          <div className="card bg-base-200 w-full max-w-lg rounded-md">
            <form className="card-body p-3 md:px-8 md:py-5" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input name='photo' type="text" placeholder="photo" className="input input-bordered" required />
              </div>
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
              <div className="form-control mt-3">
                <button className="btn bg-[#ffa400] hover:bg-[#d28900] text-black">Register</button>
                <button className="btn btn-outline mt-4" onClick={handleGoogleLogin}>Login With Google</button>
              </div>
<p className="font-semibold text-gray-600 text-center ">Already have an account ? <Link to='/login' className="text-primary underline">Login</Link> Now.</p>
            </form>
          </div>
        </div>
      </div>
    );
};


export default Register;
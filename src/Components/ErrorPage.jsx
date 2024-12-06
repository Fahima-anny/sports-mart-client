import Lottie from "lottie-react";
import Animation from "../../public/Animation - 1733473699505.json";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

const navigate = useNavigate() ;
const handleGoHome = () => {
    navigate("/")
}

    return (
        <div className='flex flex-col justify-center items-center min-h-screen '>
            <Lottie
            className="h-[60vh]"
            animationData={Animation} loop={true} />

<button
onClick={handleGoHome}
className="btn btn-outline">Go Home</button>

</div>
    );
};

export default ErrorPage;
import { useNavigate } from "react-router-dom"
function Login() {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/Dashboard");
    }
  return (
    <div>
        <h1>This is Login Page</h1>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
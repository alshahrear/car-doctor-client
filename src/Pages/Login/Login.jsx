import login from "../../assets/images/login/login.svg";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-20">
                  <img src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a>
                            </div>
                            <input className="btn bg-orange-500 mt-4" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
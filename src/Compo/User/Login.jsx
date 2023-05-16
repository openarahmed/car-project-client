import React from 'react';
import { useContext } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../Authprovider';

const Login = () => {
    const navigate = useNavigate();
    const location = useNavigation();
    const from = location?.state?.from?.pathname || '/'
    const { logIn } = useContext(AuthContext)
    const handleLogin = (event) => {

      
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user;
                const loggedUser = {
                    email: user.email
                }
                console.log(loggedUser)

                // navigate(from, {replace: true})
                fetch('https://y-indol-eta.vercel.app/jwt',{
                    method: "POST",
                    headers: {
                        'content-type' : "application/json"
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('token', data.token)
                    navigate('/')
                })

            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>

                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
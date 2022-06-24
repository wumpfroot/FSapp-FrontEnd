import { useState } from "react"
import { createUser, logIn } from "../../utils";
import './logForm.css'

export const LogOrSign = ({ setUser }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //Usestate switch that dispays either login or sign up
    const [log, setLog] = useState(true);

    //Submits new user info to the API
    const submitHandlerCreate = (e) => {
        e.preventDefault();
        createUser(username, email, password, setUser);
    };

    const submitHandlerLogin = (e) => {
        e.preventDefault();
        logIn(username, password, setUser);
    }

    return (
        <div className="logOrSign">
        
        { log ?
        <>
        <form className="Log-form"  onSubmit={submitHandlerLogin}>
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            </form>
        <div className="newuser-existinguser">
            <p>New User?</p>
            <button onClick={(e) => setLog()}>Sign Up</button>
        </div>
        </>
        
        
        :
        <>
        <form className="LogOrSign-form"  onSubmit={submitHandlerCreate}>
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
            </form>
            <div className="newuser-existinguser">
            <p>Already a user?</p>
            <button onClick={(e) => setLog(true)}>Login</button>
            </div>
            </>

}
        </div>
    );
};

export const SignOut = ({user, setUser})=>{

    // set's user value to "" to remove all user data
    const submitHandler = (e)=>{
        e.preventDefault();
        setUser();
    }
    return(
        <div className="logout-btn-flex">
        <button className="logout-btn" onClick={(e)=>submitHandler(e)}>Log Out</button>
        </div>
    )
};
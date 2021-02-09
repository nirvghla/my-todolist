import React,{useState} from 'react';

export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

const handleSumit=event=>{
    event.preventDefault()
    const userData={
        username,
        password
    }
    setUser(userData)
}

    return(
        <div style={{textAlign:"center"}}>
            <h2>Login</h2>
            <form style={{display:'grid', alignItems:'center', justifyItems:'center'}}
            onSubmit={handleSumit}>
                <input type="text" 
                placeholder="Username"
                onChange={event=>setUsername(event.target.value)}
                value={username}/>
                
                <input type="password" 
                placeholder="Password"
                value={password}
                onChange={event=>setPassword(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            {user && JSON.stringify(user,null,2)}
        </div>
    );
}
import React, {useState} from 'react'
import style from './form.module.css'

export default function FORM() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e) =>{
        console.log("form is submitted");
        const userInfo = {
            name,
            email, 
            password
        }
        console.log(userInfo);
        e.preventDefault();
    }


    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={handleNameChange} required/>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={email} required onChange={handleEmailChange}/>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} required onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

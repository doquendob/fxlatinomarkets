import React, { useState } from 'react';

export default function SignupForm() {
    const[user, setUser] = useState({
        email: '',
        name: '',
        username: '',
        password: '' 
    });

    function handleInputChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    } 
     
    async function handleSubmit(e) {
        e.preventDefault();
        let responseJson = []; 
        try {
            /*const { data } = await Axios.post(`${process.env.REACT_APP_ENDPOINT}/signup`, user)
            .then(res => {
                console.log(res);
                if(res.status !== 201){
                   responseJson = res;
                }
                console.log(responseJson);
            })*/
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type='text' name='email' placeholder='Email' className='Form__field' onChange={handleInputChange} value={user.email} required/>      
                <input type='text' name='name' placeholder='Full Name' className='Form__field' onChange={handleInputChange} value={user.nombre} required/>  
                <input type='text' name='username' placeholder='Username' className='Form__field' onChange={handleInputChange} value={user.username} required/>  
                <input type='password' name='password' placeholder='Password' className='Form__field' onChange={handleInputChange} value={user.password} required/> 
                <button className='Form__submit' type='submit'>Sign up</button>
                <p className='FormContainer__info'>
                    Already have an account? <a href='/login'>Login</a>
                </p>
            </form>
        </div>
    );
}


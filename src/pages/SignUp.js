import React from 'react';
import Main from '../pages/Main';
import SignUpForm from './SignUpForm';

export default function SignUp() {
    return (
        <Main center={false} className='background'>
            <div className='Signup'>
                <div className='FormContainer'>
                    <h1 className='fxlm'>FxLatinoMarkets</h1>
                    <p className='FormContainer__info'>
                        Please sign up to purchase our services...
                    </p>
                <SignUpForm />
                </div>
            </div>
        </Main>
    );
}

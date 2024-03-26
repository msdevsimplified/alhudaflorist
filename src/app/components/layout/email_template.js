import * as React from 'react';

export const ResetPasswordEmailTemplate = ({ to, token }) => {
    console.log('Email: ', to)
    console.log('Token: ', token)
    return (
        <div>
            <h4>Reset password for <b>{to}</b></h4>
            <p>
                To reset your password, click on this link and follow the instructions:
            </p>
            <a href={`http://localhost:3000/auth/reset_password?token=${token}`}>
                Click here to reset password
            </a>
        </div>
    )
};

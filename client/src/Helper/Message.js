import React from 'react';

export const ShowErrorMsg = (msg) => (
    <div className="alert alert-danger" role="alert">
        {msg}
    </div>
)

export const ShowSuccessMsg = msg =>{
    <div className="alert alert-success" role="alert">
        {msg}
    </div>
}
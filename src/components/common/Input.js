import React from "react";

const Input = ({ type, value, onChange, name, label, errMsg }) => {
    return (
        <>
            <div className="input-container">
                <div>
                    <label htmlFor={name}>{label} <sup>*</sup></label>
                </div>
                <input
                    className={errMsg ? 'error-box' : 'input-field'}
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                />
                <div>{errMsg && <div className="error-msg">{errMsg}</div>}</div>
            </div>
        </>
    )
}

export default Input;

import '../App.css'
import React, { useState } from "react";
import axios from 'axios';

const validate = form => {
    if (!form.email) {
        return "Email is required"
    }
    else if (!/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(form.email)) {
        return "Wrong email"
    }

    if (!form.name) {
        return "name is required"
    }
    else if (form.name.length < 2) {
        return "name is too short"
    }

    if (!form.password) {
        return "password is required"
    }
    else if (form.password.length < 7) {
        return "Password is too short"
    }

    if (!form.passwordConf) {
        return "password is required"
    }
    else if (form.passwordConf.length < 7) {
        return "Password is too short"
    }

    if (form.password !== form.passwordConf) {
        return "Password are not the same"
    }
    return false
}


export const RegisterForm = () => {

    //  eslint-disable-next-line no-undef
    //   const [email, setEmail] = useState(""); //przyjmuje jako parametr defaultowa wartość stanu, f. zwraca parę: wartość - funkcja, 
    // która aktualizuje stan, czyli zmienia wartość
    //   const [name, setName] = useState("");
    //  eslint-disable-next-line no-undef
    //  const [password, setPassword] = useState("");//czyli defaultowo password = ""
    //   const [passwordConf, confirmPassword] = useState("");

    const [error, setError] = useState(null);
    const [msg, setMsq] = useState(null);
    const [form, setForm] = useState({
        name: "",
        email: '',
        password: '',
        passwordConf: ''
    });

    const changeField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errorMsg = validate(form)
        if (errorMsg) {
            setError(errorMsg)
            console.log("error")
            return
        } else {
            // setMsq("Form submitted")
            postData();
            console.log("formsubmitted", form);
        }


    }
    const postData = () => {
        try {
            console.log("poszlo....!")
            axios.post('url', form)
            setMsq("Form submitted")
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <form>
            <label>Register Form</label>
            {error && <label>{error}</label>}
            {msg && <label>{msg}</label>}
            <input
                type="text"
                name="name"
                placeholder="name"
                value={form.name}
                onChange={changeField}
            />

            <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={changeField}
            />

            <input
                type="password"
                name="password"
                placeholder="Provide password"
                value={form.password}
                onChange={changeField}
            />

            <input
                type="password"
                name="passwordConf"
                placeholder="Confirm password"
                value={form.passwordConf}
                onChange={changeField}
            />

            <input type="button" value="Submit" onClick={handleSubmit} />

            <label>Already a member?</label>
            <input type="button" value="Login" />

        </form>
    );
};


export default RegisterForm;
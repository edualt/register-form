import { useRef } from "react";
import Input from "../components/Input";

const Form=()=> {
    const form = useRef(null)

    const handleLogin=(e)=> {
        e.preventDefault();

        const formData = new FormData(form.current)

        fetch('https://api-django-example-devrrior.herokuapp.com/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: formData.get('first_name'),
                last_name: formData.get('last_name'),
                email: formData.get('email'),
                password: formData.get('password')
            })
        })
        .then(res=>{return res.status==201 ? res.json() : alert('No chavo')})
        .then(data=>alert(JSON.stringify(data)))
        .catch(err=>console.error(err))

    }

    return (
        <div className="form">
            <form onSubmit={handleLogin} ref={form}>
            <div className="input-container">
            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                classname="input"
                />
            <Input
                label="First name"
                type="text" 
                name="first_name" 
                id="name"
                classname="input"
                placeholder="First name"
                />
            <Input
                label="Last name"
                type="text"
                name="last_name"
                id="last_name"
                classname="input"
                placeholder="Last name"
                />
            </div>
            <div className="input-container">
            <Input
                label="Password"
                type="password" 
                name="password" 
                id="password"
                classname="input"
                placeholder="Password" 
                />
            </div>
            <div className="button-container">
            <Input
                type="submit"
                name="submit"
                classname="button"
                value="Login"
                 />
            </div>
        </form>
     </div>
    ) 
}

export default Form;

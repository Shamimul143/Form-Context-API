import { useState } from "react";


const Form2 = () => {

    const [name, setName] = useState('Rojoni')
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [error, setError] = useState()



    const handleSubmit = (e) => {
        e.preventDefault()


        if (phone.length < 11) {
            setError("please Provide phone number 11 creator ")
        } else {
            setError("")
            console.log(name, email, phone);
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)

    }
    const handlePhoneChange = e => {
        setPhone(e.target.value)
    }


    return (
        <div className="ml-10">
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" placeholder="search" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" placeholder="email" />
                <br />
                <input onChange={handlePhoneChange} type="text" name="phone" placeholder="Phone" required />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default Form2;
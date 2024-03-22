import { useEffect, useRef } from "react";


const RefForm = () => {

const nameRef=useRef(null)
const emailRef=useRef(null)
const phoneRef=useRef(null)

useEffect(()=>{
    nameRef.current.focus()
},[])

const handleSubmit=(e)=>{
    e.preventDefault()

    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
}


    return (
        <div className="ml-10">
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="search" name="name" />
                <br />
                <input ref={emailRef} type="email" defaultValue={"shamim@gmail.com"} name="email" id="" placeholder="email" />
                <br />
                <input ref={phoneRef} type="text" name="phone" placeholder="Phone"  />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;
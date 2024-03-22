

const Form = () => {
    const handleSubmit =e=>{
        e.preventDefault()

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div className="ml-10">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search" name="name" />
                <br />
                <input type="email" name="email" id="" placeholder="email" />
                <br />
                <input type="text" name="phone" placeholder="Phone"  />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;
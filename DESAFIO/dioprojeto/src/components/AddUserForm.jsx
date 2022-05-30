import React, {useState} from 'react'

const AddUserForm = (props) => {

    const initForm = {id: null, name: '', username: '', email: '', age: null}
    const [user, setUser] = useState(init)

const handleInputChange = (event) => {
    const {name, value} = event.target

    setUser({...user, [name]: value})

}

    return(
        <form onSubmit={
            (event) => {
                event.preventDefault()
                if(!user.name || !user.username || !user.email || !user.age)
                return

                props.addUser(user)
                setUser(initForm)
            }
        }>
            <input type="text" name='name' value={user.name} onChange={handleInputChange} />
            <input type="text" name='username' value={user.username} onChange={handleInputChange} />
            <input type="email" name='email' value={user.email} onChange={handleInputChange} />
            <input type="number" name='number' value={user.age} onChange={handleInputChange} />

            <button>Registrar</button>
        </form>
    )
}

export default AddUserForm
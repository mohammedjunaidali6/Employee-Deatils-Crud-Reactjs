import React, { useState } from "react";

const AddUserForm = props => {
    const initialFormState = { id: null, name: "", email: "", contact: "" };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    if (!user.name || !user.email) return;

                    props.addUser(user);
                    setUser(initialFormState);
                }}
                className="needs-validation"
            >
                <label htmlFor="Name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Name"
                    required
                />
                <label htmlFor="Email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Email"
                    required
                />
                <label htmlFor="Contact">Contact:</label>
                <input
                    type="number"
                    name="contact"
                    value={user.contact}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Contact"
                    required
                />
                <br />
                <br />
                <br />
                <button className="btn btn-primary">Add new user</button>
            </form>
        </div>
    );
};

export default AddUserForm;

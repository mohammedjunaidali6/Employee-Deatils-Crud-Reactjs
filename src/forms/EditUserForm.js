import React, { useState, useEffect } from "react";

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();

                props.updateUser(user.id, user);
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                class="form-control"
                placeholder="Name"
                required
            />
            <label>Email</label>
            <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                class="form-control"
                placeholder="Email"
                required
            />
            <label for="Contact">Contact:</label>
            <input
                type="text"
                name="contact"
                value={user.contact}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Contact"
                required
            />
            <br />
            <br />
            <button className="button btn btn-primary">Update user</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button btn btn-secondary"
            >
                Cancel
            </button>
        </form>
    );
};

export default EditUserForm;

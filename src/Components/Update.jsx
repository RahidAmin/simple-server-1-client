import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const lodedUser = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        fetch(`http://localhost:5000/users/${lodedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                alert('User Updated successfully')

            }
        }
        );
    }


    return (
        <div>
            <h4>Update Information of:{lodedUser.name}</h4>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={lodedUser?.name} id="" /><br />
                <input type="email" name="email" defaultValue={lodedUser?.email} id="" /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;
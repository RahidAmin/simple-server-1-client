import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const lodedUsers = useLoaderData();
    const [users, setUsers] = useState(lodedUsers);
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'

        }).then((res) => res.json()).then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                alert('Deleted Successfully')
                const remainingUsers = users.filter((user) => user._id !== id);
                setUsers(remainingUsers);

            }
        })

    }
    return (
        <div>
            <h4>{users.length}</h4>
            <div> {users.map((user) => {
                return <p key={user._id}>{user.name}:{user.email},{user._id}:

                    <Link to={`/update/${user._id}`}> <button>Update</button></Link>
                    <button onClick={() => {
                        handleDelete(user._id);
                    }
                    }>Delete</button></p>

            })}</div>
        </div>
    );
};

export default Users;
// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserProfile from './UserProfile'; // Import the new component

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showUserList, setShowUserList] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showClickMessage, setShowClickMessage] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users?limit=10');
                setUsers(response.data);
                setLoading(false);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const toggleUserList = () => {
        setShowUserList(!showUserList);
        setShowClickMessage(false);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setShowClickMessage(false);
    };

    return (
        <div className="container  mt-4 text-white" >
            <div className='container p-2 text-center' style={{ backgroundColor: 'black', border: '2px solid', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                <div onClick={toggleUserList} style={{ cursor: 'pointer' }} className='h2 mx-auto'>User List</div>
            </div>
            {showClickMessage && (
                <div className='text-center  'style={{marginTop:'50px'}} >

                <div style={{color:'black'}} className='p-3 '>
                    <p>Click on User List Please!</p>
                </div>
                </div>
            )}
            {showUserList && (
                <div className="row">
                    <div className="col-md-6  " >
                        <ul className="list-group " >
                            {loading && <p>Loading...</p>}
                            {!loading && users.length === 0 && <p>No data to show</p>}
                            {!loading && users.slice(11, 21).map(user => (
                                <li
                                    key={user.id}
                                    className={`list-group-item shadow ${selectedUser === user ? 'active' : ''}`}
                                    onClick={() => handleUserClick(user)}
                                    style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', marginBottom: '4px', borderRadius: '6px' }}
                                >
                                    <div className="d-flex align-items-center ">
                                        <img src={user.avatar} alt={user.profile.username} className="mr-3 rounded-circle shadow bg-white" style={{ width: '50px', height: '50px' }} />
                                        <div>
                                            <div style={{ marginLeft: '20px' }}>
                                                <div className='h4'>{user.profile.username}</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6 text-center">
                    {selectedUser ? (
                            <UserProfile user={selectedUser} />
                        ) : (
                            <div className='text-center  rounded'style={{marginTop:'50px'}} >

                            <div style={{color:'black'}} className='p-3 shadow'>
                                <p>No user is selected yet...</p>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;

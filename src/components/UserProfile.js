import React, { useState, useEffect } from 'react';
import loader from '../loader/loadergif.gif'

const UserProfile = ({ user }) => {
    const [imageLoading, setImageLoading] = useState(true);


    useEffect(() => {
        if (user) {
            setImageLoading(true);
        }
    }, [user]);

    const handleImageLoaded = () => {
        setImageLoading(false);
    };

    const handleImageError = (event) => {
        setImageLoading(false);
        event.target.src = loader;
    };

    
    if (!user) {
        return <p>No user selected</p>;
    }

    return (
        <>
            <div >
                <h2 style={{ color: 'black' }}>User Details</h2>
                <div className='card' style={{ border: '2px solid'}}>
                    <div className='p-2  shadow-lg' style={{ color: 'white', backgroundColor: 'black' }}>
                    </div>
                    <div>
                        <div style={{ marginBottom: '10px', position: 'relative', height: '200px' }}>
                            <div style={{ width: '100%', height: '50%', position: 'absolute', bottom: '50%', left: 0, backgroundColor: 'black', zIndex: 1 }}></div>
                            <img
                                src={imageLoading ? loader : user.avatar}
                                alt={user.username}
                                className="rounded-circle shadow-lg"
                                style={{ width: '200px', height: '200px', objectFit: 'cover', position: 'relative', zIndex: 2, border: '2px solid white' }}
                                onLoad={handleImageLoaded}
                                onError={handleImageError}
                            />
                        </div>
                        <div className='h3 py-auto' style={{ fontWeight: 'bold' }}>@{user.profile.username}</div>
                        <div className='container'>
                            <div className='text-start shadow text-white'>
                                <div className='border p-3'
                                    style={{
                                        backgroundColor: 'black',
                                        borderTopLeftRadius: '10px',
                                        borderTopRightRadius: '10px'
                                    }}>
                                    <span style={{ fontWeight: 'bold' }}>Bio:</span> <i>{user.Bio}</i>
                                </div>
                                <div className='border p-3' style={{ backgroundColor: 'black' }}>
                                    <span style={{ fontWeight: 'bold' }}>Full Name:</span> {user.profile.firstName + " " + user.profile.lastName}
                                </div>
                                <div className='border p-3' style={{ backgroundColor: 'black' }}>
                                    <span style={{ fontWeight: 'bold' }}>Job Title:</span> {user.jobTitle}
                                </div>
                                <div className='border p-3' style={{ backgroundColor: 'black' }}>
                                    <span style={{ fontWeight: 'bold' }}>Email:</span> {user.profile.email}
                                </div>
                                <div className='border p-1 mb-3 text-center '
                                    style={{
                                        backgroundColor: '#44446a',
                                        borderBottomLeftRadius: '10px',
                                        borderBottomRightRadius: '10px'
                                    }}>
                                    <span style={{ fontWeight: 'bold' }}>Created At:</span> {user.createdAt}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;

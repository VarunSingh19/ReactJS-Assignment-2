import React, { useState , useEffect} from 'react';
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
        <div className='card' style={{ marginTop: '20px', border: '2px solid' }}>
            <div className='p-2 mb-3 shadow-lg' style={{ color: 'white', backgroundColor: 'black' }}>
                <h2>User Details</h2>
            </div>
            <div>
            <img
                    src={imageLoading ? loader : user.avatar}
                    alt={user.username}
                    className="rounded-circle shadow"
                    style={{ width: '200px', height: '200px' }}
                    onLoad={handleImageLoaded}
                    onError={handleImageError}
                />
                <div className='h3 py-auto' style={{ fontWeight: 'bold' }}>@{user.profile.username}</div>
                <div className='container'>
                    <div className='text-start shadow text-white'>
                        <div className='border p-3' style={{ backgroundColor: 'black', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
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
                        <div className='border p-3 mb-3' style={{ backgroundColor: 'black', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                            <span style={{ fontWeight: 'bold' }}>Created At:</span> {new Date(user.createdAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;

import React, { useState,useEffect } from 'react'

const Profile = () => {

    
    // Load profile from localStorage if available, else set defaults
    const [profile, setProfile] = useState(() => {
        const savedProfile = localStorage.getItem("profile");
        return savedProfile ? JSON.parse(savedProfile) : { name: "", age: "" };
    });

    // Update localStorage whenever profile changes
    useEffect(() => {
        localStorage.setItem("profile", JSON.stringify(profile));
    }, [profile]);

    const handleChange=(e)=>{
        const {name,value}=e.target

        setProfile((prevProfile)=>({
            ...prevProfile,
            [name]:value
        }))
    }

  return (
    <div>
        <h2>User Profile</h2>
        <div>
            <label>Name:
                <input type="text"  name="name" value={profile.name} onChange={handleChange}/>
            </label>
        </div>
        <div>
            <label>Age: 
                <input type="number" name="age" value={profile.age} onChange={handleChange} />
            </label>
        </div>
        <h3>Profile Information</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
    </div>
  )
}

export default Profile
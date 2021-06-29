import React from 'react';

export default function Card(profile) {
    return (
        <div className="github-profile">
            <img src={profile.avatar_url} />
            <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
        </div>
    );
}
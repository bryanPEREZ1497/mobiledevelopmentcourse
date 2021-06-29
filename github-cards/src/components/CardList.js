import React from 'react';
import Card from "./Card";
export default function CardList({ profiles }) {
    return (
        <div>
            {profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </div>
    );
}
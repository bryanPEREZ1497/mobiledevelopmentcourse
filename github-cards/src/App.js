import React, { useState } from 'react';
import Form from "./components/Form";
import CardList from "./components/CardList";
const testData = [
  { name: "Dan Abramov", id: '12', avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", id: '13', avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", id: '14', avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];
export default function App({ title }) {
  const [profiles, setProfiles] = useState(testData)
  const addNewProfile = (profileData) => {
    setProfiles([...profiles, profileData])
  };
  return (
    <div>
      <div className="header">{title}</div>
      <Form addNewProfile={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

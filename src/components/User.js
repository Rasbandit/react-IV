import React from 'react';

import people from '../users.json';

const User = (props) => {
  console.log(props);
  const index = people.findIndex((person) => person.id === props.match.params.id*1);
  const person = people[index];
  if(!person) {
    props.history.push('/not found');
    return (<h1>No user found</h1>)
  }
  return (
    <h1 style={{color: person.favorite_color}}>
      {person.first_name} {person.last_name}
    </h1>
  )
}

export default User;
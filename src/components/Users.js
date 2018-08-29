import React from 'react';
import {Link} from 'react-router-dom';


const Users = (props) => {
  console.log(props);
  const peopleJSX = props.people.map((person) =>
  (<Link key={person.id} to={`/users/${person.id}`}>{person.first_name} {person.last_name}</Link>)
)
  return (
    <div>
      <h1>These are the best people!</h1>
      <ul>
        {peopleJSX}
      </ul>
    </div>
  )
}

export default Users;
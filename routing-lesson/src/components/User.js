import React from 'react';

export default function User(props) {
  console.log(props)
  const remainingPerson = props.people.filter((person) => person.id === +props.match.params.id)[0]

  if(remainingPerson) {
    return(
      <div>
        <h1>This is actually the best person</h1>
        <h2 style={{color: remainingPerson.favorite_color, fontSize: '40px'}}>{remainingPerson.first_name} {remainingPerson.last_name}</h2>
        <h3>{remainingPerson.email}</h3>
      </div>
    )
  } else {
    props.history.push('/NotFound')
    return <div />
  }
}
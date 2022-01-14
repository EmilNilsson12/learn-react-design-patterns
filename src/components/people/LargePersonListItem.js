export const LargePersonListItem =({person}) => {
  const {name, age, haircolor, hobbies} = person 

  return (
    <>
      <h3>Name: {name}</h3>
      <p>age: {age}</p>
      <p>haircolor: {haircolor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  )
}
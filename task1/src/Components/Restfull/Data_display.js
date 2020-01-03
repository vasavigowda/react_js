import React from 'react'

const Data_display = ({ list,list1 }) => {
  return (
    <div>
      <h1>contact List</h1>
        <div>
          <h2>{list.login}</h2>
          <h2>{list.id}</h2>
          <h2>{list.avatar_url}</h2>
        </div>
        <hr/>
        <h1>Api List</h1>
      {list1.map((contact) => (
          <div>
          
          <h2>{contact.name}</h2>
          <h2>{contact.email}</h2>
        </div>
        ))}
      </div>
  )
};

export default Data_display;
import React, {useState} from 'react'

import userlist from 'assets/gift_recipients.json';

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState("");
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
    userlist.filter((user) => {
      return user.name.match(searchInput);
  });
  }
  
  return (
  <div>
  
  <input
      type="search"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput} />
      
  {userlist?.map((item) => (
    <li key={item.id} style={{ border: "1px solid white", padding: "1rem", borderRadius: "0.5rem", margin: "0.5rem" }}>
      <img src={item.avatarUri} alt='avatar' style={{ maxHeight: "100%", maxWidth: "100%" }}></img>
      {item.name} {item.username}
    </li>
  ))}
  
  </div>)
  
  
  };

export default SearchBar;
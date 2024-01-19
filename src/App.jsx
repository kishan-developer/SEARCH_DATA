import React, { useState } from 'react';
import './App.css';
import SearchComponent from './component/SearchComponent';
import { Users } from './users';
import Table from './component/Table';

const App = () => {
  const [query, setQuery] = useState("");

  // 3rd Wey 
  const keys = [ "name","email","gender"];
  // console.log(Users[0]["gender"])

// 1 way 
  // console.log(Users.filter(user => user.name.toLowerCase().includes("vi")));

  //2 way
  const search = (data) => {
    return data.filter((item) => 
        keys.some((key) =>item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div>
      <h1>Search Client Details</h1>
      <input type="text"
        placeholder='Search....'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)}/>


      {/* <ul>
        {Users.filter((user)=> 
          user.name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul> */}
      {/* <SearchComponent  /> */}
    </div>
  );
};

export default App;


// The component receives a data prop, which is an array of items to be searched.
// It uses the useState hook to manage the search term (searchTerm) and the filtered data (filteredData).
// The handleSearch function is called when the user types in the input field. It updates the searchTerm state and filters the data accordingly, updating the filteredData state.
// The component renders an input field for the user to type their search term and a list of items based on the filtered data.
// You can use this SearchComponent in a parent component by passing the relevant data as a prop:
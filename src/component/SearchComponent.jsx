import React, { useState } from 'react';
import Table from './Table';

const SearchComponent = ({ data }) => {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) => item.first_name.tolowerCase().includes(query));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        // value={searchTerm}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <Table data = {search(Users)} /> */}
     
        
     
    </div>
  );
};

export default SearchComponent;

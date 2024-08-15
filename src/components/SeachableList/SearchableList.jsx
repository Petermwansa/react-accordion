import { useState } from 'react';

export default function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {/* we add the itemKeyFn as a function that will not be used to render jsx but needed to get a unique key  */}
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>
            {/* we use the children prop called as function to render the result of the search results  */}
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
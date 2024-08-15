import { useRef, useState } from 'react';

export default function SearchableList({ items, itemKeyFn, children }) {

    const lastChange = useRef()

    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = items.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // in this func we are using debouncing to set the searchreasults to be sent after 500ms after a key stroke and not after every key stroke 
    // we are using the ref hook with the help of a timer to achieve this
    function handleChange(event) {

        // we use the the condition to clear the timeout 
        if (lastChange.current) {
            clearTimeout(lastChange.current)
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(event.target.value);
        }, 500)

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
import './App.css';
import { useEffect, useState } from 'react';


const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";

function App() {
  const [items, setItems] = useState([]);
  const [itemIds, setItemIds] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  async function fetchItems(currPage) {
    console.log("Fetching items for page " + currPage);
    setFetchingDetails(true)
    setFetchingDetails(true);
    let itemsList = itemIds;

    if(itemIds === null) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`);
      itemsList = await response.json();
      setItemIds(itemsList);
    }
    
    const itemIdsForPage = itemsList.slice(
      currPage * ITEMS_PER_PAGE,
      currPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    if(itemIdsForPage && itemIdsForPage.length) {
      const itemsForPage = await Promise.all(
        itemIdsForPage.map((id) =>
        fetch(`${API_ENDPOINT}/item/${id}.json`).then((response) => response.json())
      ));
    
    setItems([...items, ...itemsForPage]);
    console.log("Items " + itemsForPage);
    }
    
    setFetchingDetails(false);
  }

  useEffect(() => {
    // Simulate fetching data
    fetchItems(currentPage)
  }, [currentPage]); 
  

  return (
    <div className="App">
      <h1 className="header"> Hacker News Jobs Board </h1>
      {items.length > 0 ? (
        items?.map((job, index) => (
          <div key={index} className="jobListing" type="list">
            <a href={job.url}> {job.title} </a>
            <span>by: {job.by}</span>
          </div>
        ))
      ) : (
        <p> Loading . . . </p>
      )}
      <button
        className={`custom-load-more-button`}
        onClick = { () => setCurrentPage(currentPage + 1)}
        disabled={fetchingDetails}
      >
         { !fetchingDetails ? 'Load more' : 'Loading . . .'}
      </button>
   </div>
  );
}

export default App;

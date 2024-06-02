import './Search.css'

function Search({ sendDataToParent }) {
  function sendData() {
    const country = document.querySelector('.search-input').value
    sendDataToParent(country)
  }

  return (
    <div class='search-container'>
      <input
        type='text'
        className='search-input'
        placeholder='Search...'
      ></input>
      <button className='site-button' onClick={sendData}>
        Search
      </button>
    </div>
  )
}

export default Search

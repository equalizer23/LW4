import { useState } from 'react'

import Overview from './components/Overview'
import Search from './components/Search'
import Header from './components/Header'

function App() {
  const [country, setCountry] = useState('Lithuania')

  const handleSearch = (country) => {
    setCountry(country)
  }

  return (
    <div className='App'>
      <header className='App-header'></header>
      <Header />
      <Search sendDataToParent={handleSearch} />
      <Overview country={country} />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import Container from './Container'
import './Overview.css'

function Overview({ country }) {
  const [universities, setData] = useState([])

  useEffect(() => {
    fetch(`https://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [country])

  return (
    <div className='wrap'>
      {universities.map((university, index) => (
        <Container university={university} index={index} />
      ))}
    </div>
  )
}

export default Overview

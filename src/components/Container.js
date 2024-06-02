import './Container.css'

function Container({ university, index }) {
  const colors = [
    '#EBA39E',
    '#EDE89A',
    '#9EEBA1',
    '#9EEBBF',
    '#9ED9EB',
    '#9EB3EB',
  ]

  function openSite() {
    window.open(university.web_pages[0])
  }

  return (
    <div
      className='container'
      key={index}
      style={{
        backgroundColor: colors[index % colors.length],
        boxShadow: `0 0 30px 2px ${colors[index % colors.length]}`,
      }}
    >
      <div className='description'>
        <h3>{university.name}</h3>
        <p>{university.country}</p>
      </div>

      <button className='site-button' onClick={openSite}>
        Click
      </button>
    </div>
  )
}

export default Container

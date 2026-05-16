export default function SmartFeedFilters() {
  const filters = [
    'Competitive Gaming',
    'Gym Motivation',
    'AI & Tech',
    'Esports',
    'Productivity'
  ]

  return (
    <div className='smartFilters'>
      <h2>Smart Feed Filters</h2>

      <div className='filterGrid'>
        {filters.map((filter) => (
          <button key={filter} className='filterCard'>
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

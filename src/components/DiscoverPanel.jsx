export default function DiscoverPanel() {
  const topics = ['Fortnite', 'Gaming', 'Gym', 'AI', 'Tech', 'Bodybuilding']

  return (
    <div className='discoverPanel'>
      <h2>Trending Communities</h2>

      <div className='topics'>
        {topics.map((topic) => (
          <button key={topic} className='topicBtn'>
            #{topic}
          </button>
        ))}
      </div>
    </div>
  )
}

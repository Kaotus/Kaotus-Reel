export default function TrendingLeaderboard() {
  const creators = [
    { name: '@KaotusGaming', score: '9.8' },
    { name: '@GymFuture', score: '9.4' },
    { name: '@AIReelTech', score: '9.1' },
  ]

  return (
    <div className='leaderboard'>
      <h2>Trending Creators</h2>

      {creators.map((creator, index) => (
        <div key={creator.name} className='leaderboardItem'>
          <span>#{index + 1}</span>
          <div>
            <h3>{creator.name}</h3>
            <p>Community Score: {creator.score}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

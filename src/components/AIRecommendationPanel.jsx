export default function AIRecommendationPanel() {
  const recommendations = [
    'Recommended: Fortnite ranked creators',
    'Trending AI tools for creators',
    'Gym transformation communities'
  ]

  return (
    <div className='aiPanel'>
      <h2>AI Recommendations</h2>

      {recommendations.map((item, index) => (
        <div key={index} className='aiItem'>
          {item}
        </div>
      ))}
    </div>
  )
}

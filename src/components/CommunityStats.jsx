export default function CommunityStats() {
  const stats = [
    { label: 'Active Users', value: '124K' },
    { label: 'Gaming Reels', value: '2.4M' },
    { label: 'Fitness Clips', value: '980K' },
  ]

  return (
    <div className='communityStats'>
      {stats.map((stat) => (
        <div key={stat.label} className='statCard'>
          <h3>{stat.value}</h3>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

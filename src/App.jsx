import { Flame, Dumbbell, Gamepad2, Cpu, Home, Compass, User } from 'lucide-react'

const reels = [
  {
    title: 'Fortnite Competitive Clips',
    category: 'Gaming',
    icon: <Gamepad2 size={32} />,
  },
  {
    title: 'Gym Motivation Feed',
    category: 'Fitness',
    icon: <Dumbbell size={32} />,
  },
  {
    title: 'AI & Tech Discoveries',
    category: 'Tech',
    icon: <Cpu size={32} />,
  },
]

export default function App() {
  return (
    <div className='app'>
      {reels.map((reel, index) => (
        <section key={index} className='reel'>
          <div className='overlay'>
            <div className='topBar'>
              <div className='logo'>KAOTUS REEL</div>
              <div className='aiTag'>AI Community Feed</div>
            </div>

            <div className='content'>
              <div className='icon'>{reel.icon}</div>
              <span className='category'>{reel.category}</span>
              <h1>{reel.title}</h1>
              <p>
                A futuristic TikTok × Reddit experience focused only on Gaming, Fitness and Tech communities.
              </p>
              <button>Explore Community</button>
            </div>
          </div>
        </section>
      ))}

      <nav className='bottomNav'>
        <Home />
        <Compass />
        <Flame />
        <User />
      </nav>
    </div>
  )
}

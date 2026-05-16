import { Flame, Dumbbell, Gamepad2, Cpu } from 'lucide-react'

const reels = [
  {
    title: 'Fortnite Competitive Clips',
    category: 'Gaming',
    icon: <Gamepad2 size={28} />,
  },
  {
    title: 'Gym Motivation Feed',
    category: 'Fitness',
    icon: <Dumbbell size={28} />,
  },
  {
    title: 'AI & Tech Discoveries',
    category: 'Tech',
    icon: <Cpu size={28} />,
  },
]

export default function App() {
  return (
    <div className='app'>
      {reels.map((reel, index) => (
        <section key={index} className='reel'>
          <div className='overlay'>
            <div className='topTag'>
              <Flame size={18} /> Trending Community Reel
            </div>

            <div className='content'>
              <div className='icon'>{reel.icon}</div>
              <h1>{reel.title}</h1>
              <p>
                The Reddit-style TikTok alternative focused only on your interests.
              </p>
              <button>Explore Feed</button>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

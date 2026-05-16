import { Flame, Home, Compass, User } from 'lucide-react'
import ReelCard from './components/ReelCard'
import DiscoverPanel from './components/DiscoverPanel'
import { reels } from './data/reels'

export default function App() {
  return (
    <div className='app'>
      <header className='header'>
        <div className='logo'>KAOTUS REEL</div>
        <div className='feedType'>Gaming • Fitness • Tech</div>
      </header>

      <DiscoverPanel />

      {reels.map((reel, index) => (
        <ReelCard key={index} reel={reel} />
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

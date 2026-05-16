import { Flame, Home, Compass, User } from 'lucide-react'
import ReelCard from './components/ReelCard'
import DiscoverPanel from './components/DiscoverPanel'
import ProfileCard from './components/ProfileCard'
import LiveFeedBadge from './components/LiveFeedBadge'
import CommunityStats from './components/CommunityStats'
import NotificationPanel from './components/NotificationPanel'
import AIRecommendationPanel from './components/AIRecommendationPanel'
import UploadStudio from './components/UploadStudio'
import TrendingLeaderboard from './components/TrendingLeaderboard'
import { reels } from './data/reels'

export default function App() {
  return (
    <div className='app'>
      <header className='header'>
        <div className='logo'>KAOTUS REEL</div>
        <div className='feedType'>Gaming • Fitness • Tech</div>
      </header>

      <DiscoverPanel />
      <ProfileCard />
      <LiveFeedBadge />
      <CommunityStats />
      <NotificationPanel />
      <AIRecommendationPanel />
      <UploadStudio />
      <TrendingLeaderboard />

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

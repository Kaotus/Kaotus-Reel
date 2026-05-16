import { Heart, MessageCircle, Bookmark } from 'lucide-react'

export default function ReelCard({ reel }) {
  return (
    <section className='reel'>
      <div className='overlay'>
        <div className='videoGlow'></div>

        <div className='content'>
          <span className='category'>{reel.category}</span>
          <h1>{reel.title}</h1>
          <p>{reel.description}</p>
          <span className='creator'>{reel.creator}</span>
        </div>

        <div className='actions'>
          <button><Heart /></button>
          <button><MessageCircle /></button>
          <button><Bookmark /></button>
        </div>
      </div>
    </section>
  )
}

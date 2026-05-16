export default function CommentThread() {
  const comments = [
    {
      user: '@FutureGamer',
      text: 'This app concept is actually insane 🔥'
    },
    {
      user: '@GymVision',
      text: 'Finally a reel app without random brainrot.'
    }
  ]

  return (
    <div className='commentThread'>
      <h2>Community Comments</h2>

      {comments.map((comment, index) => (
        <div key={index} className='commentItem'>
          <h3>{comment.user}</h3>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  )
}

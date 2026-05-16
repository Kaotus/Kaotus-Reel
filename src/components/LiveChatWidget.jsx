export default function LiveChatWidget() {
  const messages = [
    {
      user: '@KaotusGaming',
      message: 'New Fortnite tournament reel dropping now 🔥'
    },
    {
      user: '@AIFuture',
      message: 'AI recommendation engine updated.'
    }
  ]

  return (
    <div className='liveChatWidget'>
      <h2>Live Community Chat</h2>

      {messages.map((msg, index) => (
        <div key={index} className='chatMessage'>
          <strong>{msg.user}</strong>
          <p>{msg.message}</p>
        </div>
      ))}
    </div>
  )
}

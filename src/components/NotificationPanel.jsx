export default function NotificationPanel() {
  const notifications = [
    'New Fortnite clip trending',
    'AI Tech community is live',
    'Gym motivation reel reached #1'
  ]

  return (
    <div className='notificationPanel'>
      <h2>Live Notifications</h2>

      {notifications.map((note, index) => (
        <div key={index} className='notificationItem'>
          {note}
        </div>
      ))}
    </div>
  )
}

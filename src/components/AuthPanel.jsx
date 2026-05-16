export default function AuthPanel() {
  return (
    <div className='authPanel'>
      <h2>Join Kaotus Reel</h2>

      <input type='text' placeholder='Username' />
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />

      <button>Create Account</button>
    </div>
  )
}

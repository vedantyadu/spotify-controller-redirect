import { useEffect } from 'react'

function App() {

  useEffect(() => {
    window.location = 'spotify-controller://'
  }, [])

  return (
    <div className='flex flex-col'>
      <span className='mb-2 text-emerald-600 text-3xl font-bold'>Ctrl+Spotify</span>
      <span className='text-sm mb-20 text-neutral-300'>Keybinds for spotify desktop</span>
      <span className='text-neutral-600 text-xs mt-2'>You may close this window now</span>
    </div>
  )
}

export default App

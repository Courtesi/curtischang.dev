import { useEffect, useState } from 'react'
import Home from './Home'
import ReadingList from './ReadingList'

function getRoute() {
  return window.location.hash.replace(/^#/, '') || '/'
}

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      {route === '/reading-list' ? <ReadingList /> : <Home />}
    </div>
  )
}

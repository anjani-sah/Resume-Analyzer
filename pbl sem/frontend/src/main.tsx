import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import PlasmicPreview from './plasmic/PlasmicPreview'
import PlasmicStudioHost from './plasmic/PlasmicStudioHost'

const pathname = window.location.pathname

function resolveRootComponent() {
  if (pathname === '/plasmic-host') {
    return <PlasmicStudioHost />
  }

  if (pathname === '/plasmic-preview') {
    return <PlasmicPreview />
  }

  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {resolveRootComponent()}
  </StrictMode>,
)

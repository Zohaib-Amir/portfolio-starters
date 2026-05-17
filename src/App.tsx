import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './Landing'
import V1App from './routes/v1/App'
import V2App from './routes/v2/App'
import V3App from './routes/v3/App'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/v1/*" element={<V1App />} />
      <Route path="/v2/*" element={<V2App />} />
      <Route path="/v3/*" element={<V3App />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
import { Route, Routes } from 'react-router-dom'
import Home from './views/home/Home'
import NotFound from './views/not-found/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

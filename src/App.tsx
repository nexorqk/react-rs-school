import { Route, Routes } from 'react-router-dom'
import Home from './views/home/Home'
import NotFound from './views/not-found/NotFound'
import AppLayout from './components/app-layout/AppLayout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

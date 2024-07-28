import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/app-layout/AppLayout'
import { Home } from './pages/home/Home'
import { NotFound } from './pages/not-found/NotFound'

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route
                    path="/?page=:pageNum&details=:details"
                    element={<Home />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>
        404 - <span>Not Found</span>
      </h1>
    </div>
  )
}

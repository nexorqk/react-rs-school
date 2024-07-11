import { useEffect, useState } from 'react'

export default function useSearchQuery() {
  const [lsSearch, setLSSearch] = useState(
    localStorage.getItem('searchInput') || ''
  )

  useEffect(() => {
    localStorage.setItem('searchInput', lsSearch)
  }, [lsSearch])

  return {
    lsSearch,
    setLSSearch,
  }
}

import { useEffect, useState } from 'react'

const useSearchQuery = () => {
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

export default useSearchQuery

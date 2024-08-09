import { Pagination } from '@/components/pagination/Pagination'
import { DisplayData } from '@/lib/features/characters/DisplayData'

export default function Home() {
  return (
    <>
      <DisplayData />
      <Pagination />
    </>
  )
}

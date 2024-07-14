import classes from './Pagination.module.css'

export default function Pagination({ pages }: { pages: number }) {
  console.log(pages)
  const pagesArr = new Array(pages).fill(1).map((item, index) => item + index)
  return (
    <div className={classes.wrapper}>
      {pagesArr.map((pageNum) => (
        <div
          key={pageNum}
          onClick={() => console.log(pageNum, 'page')}
          className={classes.searchItem}
        >
          {pageNum}
        </div>
      ))}
    </div>
  )
}

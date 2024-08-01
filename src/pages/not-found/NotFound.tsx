import classes from './NotFound.module.css'

export const NotFound = () => {
    return (
        <div className={classes.container}>
            <a href="/">Home</a>
            <h1 className={classes.text}>
                404 - <span>Not Found</span>
            </h1>
        </div>
    )
}

import { Component, ErrorInfo, ReactNode } from 'react'
import classes from './ErrorBoundary.module.css'

type PropsType = {
    children: ReactNode
}

type StateType = {
    error: Error | null
    errorInfo: ErrorInfo | null
}

export default class ErrorBoundary extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    handleReset = () => {
        this.setState({
            errorInfo: null,
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className={classes.error}>
                    <h2>Something went wrong.</h2>
                    <div className={classes.details}>
                        <p className={classes.bold}>
                            {this.state.error && this.state.error.toString()}
                        </p>
                        {this.state.errorInfo.componentStack}
                    </div>
                    <button
                        className={classes.resetBtn}
                        onClick={() => this.handleReset()}
                    >
                        Reload page
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}

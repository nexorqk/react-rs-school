import { store } from '@/app/store'
import { AppLayout } from '@/components/app-layout/AppLayout'
import ErrorBoundary from '@/components/error-boundary/ErrrorBoundary'
import '@/index.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </ErrorBoundary>
  )
}

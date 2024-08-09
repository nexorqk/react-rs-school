import { AppLayout } from '@/components/app-layout/AppLayout'
import ErrorBoundary from '@/components/error-boundary/ErrrorBoundary'
import './globals.css'
import StoreProvider from './StoreProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <html lang="en">
          <head>
            <meta name="description" content="Rick and Morty characters" />
            <title>Rick And Morty</title>
          </head>
          <body>
            <AppLayout>{children}</AppLayout>
          </body>
        </html>
      </StoreProvider>
    </ErrorBoundary>
  )
}

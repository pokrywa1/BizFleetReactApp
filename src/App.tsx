import { createEmotionCache, MantineProvider } from '@mantine/core'
import { AppRouter } from './views/@Router.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import VerifyJwt from './components/common/api/VerifyJwt.tsx'

const queryClient = new QueryClient()

function App() {
  const myCache = createEmotionCache({ key: 'mantine' })

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider emotionCache={myCache} withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Toaster />
          <VerifyJwt>
            <AppRouter />
          </VerifyJwt>
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App

import { MantineProvider } from '@mantine/core'
import { AppRouter } from './views/@Router.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import VerifyJwt from './components/common/api/VerifyJwt.tsx'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
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

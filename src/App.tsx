import {
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
} from '@mantine/core'
import { AppRouter } from './views/@Router.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import VerifyJwt from './components/common/api/VerifyJwt.tsx'
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import { useState } from 'react'

const queryClient = new QueryClient()
dayjs.locale('pl')
function App() {
  const myCache = createEmotionCache({ key: 'mantine' })

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ colorScheme }}
          emotionCache={myCache}
          withGlobalStyles
          withNormalizeCSS
        >
          <BrowserRouter>
            <Toaster />
            <VerifyJwt>
              <AppRouter />
            </VerifyJwt>
          </BrowserRouter>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  )
}

export default App

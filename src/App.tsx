import { MantineProvider } from '@mantine/core'
import { AppRouter } from './views/@Router.tsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App

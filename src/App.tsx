import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/GlobalStyle'
import { DefaultTheme } from './styles/Themes/DefaultTheme'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}> 
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

import ThemeProvider from "@material-ui/core/styles/ThemeProvider"
import Header from "./UI/Header"
import theme from "./UI/Theme"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App

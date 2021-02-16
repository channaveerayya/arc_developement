import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Header from './UI/Header'
import theme from './UI/Theme'
import Footer from './UI/Footer'
import LandingPage from './LandingPage'
import Services from './Services'
import CustomSoftware from './CustomSoftware'
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/services' component={Services} />
          Services
          <Route exact path='/customsoftware' component={CustomSoftware} />
          <Route
            exact
            path='/mobileapps'
            component={() => <h2>mobileapps</h2>}
          />
          <Route exact path='/websites' component={() => <h2>websites</h2>} />
          <Route
            exact
            path='/revolutions'
            component={() => <h2>revolutions</h2>}
          />
          <Route exact path='/aboutus' component={() => <h2>aboutus</h2>} />
          <Route exact path='/contact' component={() => <h2>contact</h2>} />
          <Route exact path='/estimate' component={() => <h2>estimate</h2>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App

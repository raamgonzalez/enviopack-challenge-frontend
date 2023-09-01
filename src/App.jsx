import { CartContextProvider } from './context/CartContext'
import { UsersContextProvider } from './context/UsersContext'
import { Layout } from './layout/Layout'
import { RouterRoutes } from './routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App () {
  return (
    <>
      <Router>
        <UsersContextProvider>
          <CartContextProvider>
            <Layout>
              <RouterRoutes/>
            </Layout>
          </CartContextProvider>
        </UsersContextProvider>
      </Router>
    </>
  )
}

export default App

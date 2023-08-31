import { CartContextProvider } from './context/CartContext'
import { Layout } from './layout/Layout'
import { RouterRoutes } from './routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>  
      <Router>
        <CartContextProvider>
          <Layout>
            <RouterRoutes/>
          </Layout>
        </CartContextProvider>
      </Router>
    </>
  )
}

export default App

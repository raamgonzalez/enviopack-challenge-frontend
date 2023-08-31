import { CartContextProvider } from './context/CartContext'
import { Layout } from './layout/Layout'
import './App.css'

function App() {

  return (
    <>
      <CartContextProvider>
        <Layout>
        </Layout>
      </CartContextProvider>
    </>
  )
}

export default App

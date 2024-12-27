import './App.css'
import Title from './Title'
import { Discription } from './Title'
import CurlyBrace from './CurlyBrace'
import ProductList from './ProductList'
import AmazonPage from './pages/AmazonPage'
function App() {

  return (
    <> {/*  this is parent opening tags called as react fragment*/ }
    <h1>Hello World</h1>
    <button>Hello,There:</button>
    <Title />  {/* rendered the title component */}
    <Discription />
    <CurlyBrace />
    <ProductList />
   
    <AmazonPage />
    {/*  this is parent closing tags called as react fragment*/ } 
    </>
  )
}

export default App

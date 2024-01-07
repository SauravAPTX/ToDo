import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from './components/AllRoutes';
import { Container } from 'react-bootstrap';
function App() {

  return (
    <div>
      <Container className='my-4'>
      <AllRoutes/>
      </Container>
    </div>
  )
}

export default App

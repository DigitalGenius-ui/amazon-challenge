import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import AlertCom from './Components/Alert';

function App() {
  return (
    <Container >
      <BrowserRouter>
        <Header/>
        <AlertCom/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width : 900px;
`
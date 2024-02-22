import React from 'react';
import Heading from './components/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCounter from './components/DisplayCounter';
import Container from './components/Container';
import Controlls from './components/Controlls';
import './App.css'
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/PrivacyMessage';

function App() {
  const privacy = useSelector((state) => state.privacy);
  return (
    <center>
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <Heading />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayCounter />}
            <Controlls />
          </div>
        </div>
      </Container>
    </center>
  )
}

export default App

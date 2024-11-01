import './App.css'
import SignupPage from './pages/authentication/signup.jsx'
import { Amplify } from 'aws-amplify';
import awsconfig from './../amplify_outputs.json'; // adjust path to your Amplify config
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  Amplify.configure(awsconfig);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

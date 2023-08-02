import logo from './logo.svg';
import './App.css';
import AppRoute from './route/AppRoute';
import axios from 'axios';

function App() {

  const options = {
    method: 'POST',
    url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'aecc19e511mshfd13e0888a2d169p119b7djsn972ac4f57cd1',
      'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
    },
    data: {
      from: 'en',
      to: 'ar',
      q: 'Hello ! Rapid Translate Multi Traduction'
    }
  };

  // try {
  //   const response = axios.request(options);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }
  return (
    <AppRoute />
  );
}

export default App;

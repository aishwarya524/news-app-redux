import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import NewsList from './components/NewsList/NewsList';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleNews from './components/SingleNews'
import About from './components/About.js'
import Contact from './components/Contact.js';
import NotFound from './components/NotFound.js';
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<NewsList/>} />
          <Route path='/news/:id' element={<SingleNews/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

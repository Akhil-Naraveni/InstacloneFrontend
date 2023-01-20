import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostView from './components/Postview/PostView';
import Landing_page from './components/LandingPage/landing_page';
import AddPostForm from './components/addPostForm/addPostForm';

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing_page />} />
          <Route path='/postview' element={<PostView />} />
          <Route path="/postview/addpost" element={<AddPostForm />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

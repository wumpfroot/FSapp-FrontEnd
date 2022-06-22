import './App.css';
import { NavBar } from './components/navBar';
import { useState, useEffect } from 'react';
import { PictureContainer } from './components/pictureContainer';
import { InputForm } from './components/inputBox';
import { LogOrSign } from './components/logOrSign';
import { fetchImages } from './utils';

const App = () => {
  const [images, setImages] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>{user ? user : "LandingPage"}</h1>
      <LogOrSign setter={setUser}/>
      <InputForm />
      <section className='content-container'>
      {images.map((image, index) => {
        return (
        <div className='image-box'>
        <PictureContainer profile={image.author} number={index} url={image.download_url}/>
        </div>
        );
      })}
      </section>
    </div>
  );
}

export default App;

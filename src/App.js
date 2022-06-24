import './App.css';
import { NavBar } from './components/navBar';
import { useState, useEffect } from 'react';
import { PictureContainer } from './components/pictureContainer';
import { LogOrSign, SignOut } from './components/logOrSign';
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
      <h1 className='landing-title'>{user ? user : "LandingPage"}</h1>

      {user ? 
      <div><SignOut user={user} setUser={setUser}/>
      <section className='content-container'>
      {images.map((image, index)=> {
        return(
          <div className='image-box'>
            <PictureContainer number={index} profile={image.author} url={image.download_url} />
            </div>
        )})}
        </section>
        </div>
      : 
      <div><LogOrSign user={user} setUser={setUser} /></div>}
      
      {/* <LogOrSign user={user} setUser={setUser}/>
      <SignOut user={user} setUser={setUser}/>
      <section className='content-container'>
      {images.map((image, index) => {
        return (
        <div className='image-box'>
        <PictureContainer profile={image.author} number={index} url={image.download_url}/>
        </div>
        );
      })}
      </section> */}
    </div>
  );
}

export default App;

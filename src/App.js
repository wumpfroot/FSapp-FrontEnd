import './App.css';
import { useState, useEffect } from 'react';
import { PictureContainer } from './components/pictureContainer';
import { InputForm } from './components/inputBox';

const App = () => {
  const [images, setImages] = useState([]);
  const fetchImageData = async () => {

    try {
      const response = await fetch("https://picsum.photos/v2/list");

      if (!response.ok){
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
      setImages(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchImageData()
  }, [])


  return (
    <div className="App">
      <h1>Instagram</h1>
      <InputForm />
      <section className='content-container'>
      {images.map((image, index) => {
        return (
        <div>
        <PictureContainer number={index} url={image.download_url}/>
        </div>
        );
      })}
      </section>
    </div>
  );
}

export default App;

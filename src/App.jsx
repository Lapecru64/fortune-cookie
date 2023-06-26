import './App.css';
import FortuneCookie from "./components/FortuneCookie";
import Button from "./components/Button";
import phrases from "./data/phrases.json";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");

  const backgroundImages = [
    '/img/fondo1.jpg',
    '/img/fondo2.jpg',
    '/img/fondo3.jpg',
    '/img/fondo4.jpg'
  ];

  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  };

  const changeImage = () => {
    if (index < phrases.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }

    setBackgroundImage(getRandomBackground());
  };

  document.body.style = `background-image: url(${backgroundImage})`;

  return (
    <>
      <FortuneCookie data={phrases[index]} textColor={backgroundImage} />
      <Button onClick={changeImage} />
    </>
  );
}

export default App;


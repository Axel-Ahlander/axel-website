import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './nav/nav';
import Home from './home/home';
import Coffee from './coffee/coffee';

export const CoffeeContext = createContext();

function App() {
  const [images, setImages] = useState([]);
  const [isHovered, setIsHovered] = useState(false); // Add hover state here

  // Function to fetch new coffee images
  const fetchNewImage = async () => {
    if (images.length > 9) return; // Limit to 10 images
    try {
      const response = await fetch("/api/random.json");

      const data = await response.json();
      setImages((prevImages) => [...prevImages, data.file]); // Append new image
    } catch (error) {
      console.error("Error fetching coffee image:", error);
    }
  };

  return (
    <CoffeeContext.Provider value={{ images, fetchNewImage, isHovered, setIsHovered }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
      </Routes>
    </CoffeeContext.Provider>
  );
}

export default App;

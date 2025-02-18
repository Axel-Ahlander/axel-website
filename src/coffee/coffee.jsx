import React from 'react';
import { useContext } from 'react';
import { CoffeeContext } from '../App';

function Coffee() {
    const { images, fetchNewImage } = useContext(CoffeeContext);

    
    if (images.length > 9){
        return (
            <>
            <h1>THATS ENOUGH COFFEES, IF YOU WANT MORE YOU HAVE TO DONATE!!!!</h1>
            <a href="https://www.buymeacoffee.com/axelahlander" target='_blank'>DONATE HERE</a>
            </>
            
        )
    }

    else {
        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Random Coffee Images ☕</h1>
                <button 
                    onClick={fetchNewImage} 
                    style={{ marginBottom: '20px', padding: '10px', cursor: 'pointer' }}
                >
                    Get Another Coffee
                </button>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                    {images.map((image, index) => (
                        <img 
                        key={index} 
                        src={image} 
                        alt={`Coffee ${index}`} 
                        style={{ 
                            width: '300px', 
                            height: '300px', 
                            objectFit: 'cover', 
                            borderRadius: '10px' 
                        }} 
                    />
                    
                    ))}
                </div>
            </div>
        );
    }
   
}

export default Coffee;

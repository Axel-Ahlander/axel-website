import React, { useContext } from 'react'
import { CoffeeContext } from '../App'
import { Link } from 'react-router-dom';

function Home() {
    const { isHovered, setIsHovered } = useContext(CoffeeContext);
  return (
    <main>
        <div className='container'>
          <h1 
            className={`title ${isHovered ? 'hovered' : ''}`}
          >
            Try click me!
          </h1>
          <Link to = '/coffee'>
          <img 
              src="https://th.bing.com/th/id/OIP.8QnMtf_IO3zTLQrXaBmw5QHaE7?w=266&h=180&c=7&r=0&o=5&pid=1.7" 
              alt="Buy Me A Coffee" 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ 
                borderRadius: '10px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                maxWidth: '100%', 
                height: 'auto', 
                transition: 'transform 0.3s ease' 
              }}
            />
          </Link>
            
          
        </div>
      </main>
  )
}

export default Home
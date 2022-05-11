import React from 'react'
import './index.css'
import Products from '../products/index'

const Home = () => {
  return (
    <div>
        <div className="hero">
              <h1>Best App For GIGACHAD .</h1>
              <h2>So Spend Your Money In Here</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
          </div>
        <div className="ProductContent">
          <Products />
        </div>
    </div>
  )
}

export default Home
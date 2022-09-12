import React, { useState } from 'react'
import './header.css'
import Data from '../../data'
import Article from '../Article/article'

const Header = () => {
  const [items, setItems] = useState(Data)

  const filterItem = (categItem) => {
    const updatedItems = Data.filter((curElem) => {
      return curElem.category === categItem
    })

    setItems(updatedItems)
  }

  return (
    <>
      <h1 className='mt-5 text-center main-heading'>Live Spaces</h1>
      <p>
        <i class='fa fa-check-circle' aria-hidden='true'></i> All NFTs on Cyber
        either belong to or were minted by their space creator.
      </p>
      <hr />

      <div className='trends'>
        <div className='cards'>
          <button
            className='btn btn-warning'
            onClick={() => filterItem('24htrending')}
          >
            24h Trending
          </button>
          <button
            className='btn btn-warning'
            onClick={() => filterItem('latestshow')}
          >
            Latest Show
          </button>
          <button
            className='btn btn-warning'
            onClick={() => filterItem('mostpopular')}
          >
            Most Popular
          </button>
          <button
            className='btn btn-warning'
            onClick={() => filterItem('ingenesis')}
          >
            In Genesis
          </button>
          <button
            className='btn btn-warning'
            onClick={() => filterItem('intemple')}
          >
            In Temple
          </button>
          <button className='btn btn-warning' onClick={() => setItems(Data)}>
            All
          </button>
        </div>
      </div>
      <hr />

      {/* my main items section  */}
      <div className='blog section__padding' id='blog'>
        <div className='blog-container'>
          {items.map((elem) => {
            const { id, title, image, owner, hashcode } = elem

            return (
              <div className='blog-container_groupB'>
                <Article
                  id={id}
                  imgUrl={image}
                  title={title}
                  owner={owner}
                  hashcode={hashcode}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Header

import React from 'react'

const A = ({ message, posts }) => {
  return (
    <div>
      <h1>A Copmonent</h1>
      <p>{message}</p>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>{post.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default A
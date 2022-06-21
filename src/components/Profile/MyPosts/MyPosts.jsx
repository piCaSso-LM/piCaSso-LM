import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from './Post/MyPost';



const MyPosts = () => {
  return (

    <div>
      My posts
      <div>
        New post
      </div>
      <div className={classes.post}>
        <MyPost/>
        <MyPost/>
        <MyPost/>
      </div>
    </div>

  )
}

export default MyPosts;
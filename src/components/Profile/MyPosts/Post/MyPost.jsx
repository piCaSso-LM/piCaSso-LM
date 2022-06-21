import React from 'react';
import classes from './MyPost.module.css';



const MyPost = () => {
  return (
    <div className={classes.item}>
      <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' />
      Привет это пост кота
      <div>
        <span>
          like
        </span>
      </div>
    </div>
  )
}

export default MyPost;
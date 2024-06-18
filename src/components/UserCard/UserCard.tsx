import React from 'react'
import './userCard.scss'

interface UserCard {
    src: string;
    alt: string;
    text: string;
    numbers: string;
}
const UserCard = (props: UserCard) => {
  return (
    <div className='userCard'>
        <img src={props.src} alt={props.alt} />
        <p>{props.text}</p>
        <p>{props.numbers}</p>
    </div>
  )
}

export default UserCard
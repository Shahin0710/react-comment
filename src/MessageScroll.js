import React, { useEffect, useState } from 'react';
import Message from './Components/Message/Message';

function MessageScroll(props) {

  const [message, setMessage] = useState([]);
  const [showBottomBar, setShowBottomBar] = useState(true);

    useEffect( () =>{
        setShowBottomBar(true);
        fetch('http://localhost:8000/comments')
          .then( res => res.json())
          .then(data => setMessage(data));
    },  [])

  return (
    <>
    {message.map(item => (
      <Message
        key={item?._id} 
        useKey={item?._id} 
        user={item?.user} 
        editable={item?.editable} 
        message={item?.message} 
        likes={item?.likes} 
        replies={item?.replies} 
      />
    ))}
    {message.length > 9 && showBottomBar ? <div className="bottomBar"><div className='loader'></div></div> : null}
    </>
  )
}

export default MessageScroll;

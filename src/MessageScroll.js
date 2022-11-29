import React, { useEffect, useState } from 'react';
import Message from './Components/Message/Message';
import { useMainContext } from './context/Context';

function MessageScroll(props) {

  const {messageResult} = useMainContext();
  const [message, setMessage] = useState([]);
  const [showBottomBar, setShowBottomBar] = useState(true);

    useEffect( () =>{
        setShowBottomBar(true);
        fetch('http://localhost:8000/comments')
          .then( res => res.json())
          .then(data => setMessage(data));
    },  [messageResult])

    console.log(message.length);

  return (
    <>
    {message.map(item => (
      <Message
        key={item?._id} 
        useKey={item?._id} 
        user={item?.user} 
        editable={item?.editable} 
        message={item?.user_message} 
        likes={item?.likes} 
        replies={item?.replies} 
      />
    ))}
    {message.length > 9 && showBottomBar ? <div className="bottomBar"><div className='loader'></div></div> : null}
    </>
  )
}

export default MessageScroll;

import React from 'react';
import Message from './Components/Message/Message';

function MessageScroll(props) {
  return (
    <>
    <Message user="Dummy User" editable={false} message="Dummy Message" likes={25} />
    <div className="bottomBar">
        <div className='loader'>
            
        </div>
    </div>
    </>
  )
}

export default MessageScroll;

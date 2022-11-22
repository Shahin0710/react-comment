import React, { useRef, useState } from 'react';
import './Message.css';

function Message(props) {
    const likeIcon = useRef();
    const numLikes = useRef();

    const [arrowUp, setArrowUp] = useState(false);
    const [openReply, setOpenReply] = useState(false);

    const changeOpenReply = () => {
        console.log('Hello');
    };

    const likeComment = () => {
        console.log('Hello');
    };

    const deleteMessage = () => {
        console.log('Hello');
    };

    const changeArrow = () => {
        console.log('Hello');
    };

    return (
        <>
        <section className="messageContainer">
            <div className="messageUser">{props.user}</div>
            <i className="fas fa-user-circle"></i>
            <div className="messageText">{props.message}</div>
            <section className="messageIconsContainer">
                <i className="fas fa-thumbs-up" ref={likeIcon} onClick={likeComment}></i>
                <div ref={numLikes}>{props.likes}</div>
                <i className="fas fa-thumbs-down"></i>
                {
                    !props.editable ? (
                        <div style={{cursor: "pointer"}}
                            onClick={changeOpenReply}
                        >
                            REPLY
                        </div>
                        ) : (
                            <div style={{cursor: "pointer"}}
                                onClick={deleteMessage}
                            >
                                DELETE
                            </div>
                        )
                        
                }
            </section>
            <section className="arrowReplies" onClick={changeArrow}>
                {/* <div>View {props.replies.length} Replies</div> */}
                <div>View 4 Replies</div>
            </section>
        </section>
        </>
    );
}

export default Message;
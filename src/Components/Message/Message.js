import React, { useContext, useRef, useState } from 'react';
import CommentsBox from '../CommentsBox/CommentsBox';
import SubMessage from '../Message/subMessage/SubMessage';
import './Message.css';

const showReply = React.createContext();

export function useOneReply() {
    return useContext(showReply);
}

function Message(props) {
    const likeIcon = useRef();
    const numLikes = useRef();

    const [arrowUp, setArrowUp] = useState(false);
    const [openReply, setOpenReply] = useState(false);

    // TOGGLED WHEN CANCEL BUTTON AND REPLY BUTTON ARE PRESSED
    const changeOpenReply = () => {
        setOpenReply(prevState => prevState = !prevState);
    };

    // TOGGLED ARROW UP AND DOWN
    let arrow = <i className="fas fa-caret-down"></i>

    const changeArrow = () => {
        setArrowUp(prevState => prevState = !prevState);
    };

    if(arrowUp) {
        arrow = <i className="fas fa-caret-up"></i>
    }else{
        arrow = <i className="fas fa-caret-down"></i>
    }

    // LIKE MESSAGE
    let toggleLike = false;
    let likes = props.likes;
    const likeComment = () => {
        toggleLike = !toggleLike;
        if(toggleLike){
            likes++;
            likeIcon.current.style.color = "#4688de";
        }else{
            likes--;
            likeIcon.current.style.color = "gray";
        }
        numLikes.current.innerHTML = likes;
    };

    const deleteMessage = () => {
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
            <showReply.Provider value={changeOpenReply}>
                {openReply && <CommentsBox 
                autoFocus={true} />}
            </showReply.Provider>

            {props?.replies?.length > 0 &&(
                <section className="arrowReplies" onClick={changeArrow}>
                {arrow}
                <div>View {props?.replies?.length} Replies</div>
                </section>
            )}

            { arrowUp && (
            <section className="subMessages">
                   {props.replies.map(item => (
                        <SubMessage
                            key={Math.random}
                            parentKey={props?.useKey}
                            subId={item?._id}
                            user={item?.user}
                            message={item?.user_message}
                            likes={item?.likes}
                        />
                    ))}
            </section>
            )}
        </section>
        </>
    );
}

export default Message;
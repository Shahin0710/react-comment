import React, { useContext, useRef, useState } from 'react';
import SubCommentsBox from '../../CommentsBox/SubCommentsBox/SubCommentsBox';

const showReply = React.createContext();

export function useOneReply() {
    return useContext(showReply);
}

function SubMessage(props) {
    const likeIcon = useRef();
    const numLikes = useRef();

    const [openReply, setOpenReply] = useState(false);

    // TOGGLED WHEN CANCEL BUTTON AND REPLY BUTTON ARE PRESSED
    const changeOpenReply = () => {
        setOpenReply(prevState => prevState = !prevState);
    };

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
                {openReply && <SubCommentsBox
                autoFocus={true} />}
            </showReply.Provider>
        </section>
        </>
    );
}

export default SubMessage;
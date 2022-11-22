import React, { useRef, useState } from 'react';
import '../CommentsBox.css';

function TopCommentsBox(props) {

    const message = useRef(null);
    // TRIGGER THE UNDERLINE ANIMATION
    const [showCommentLine, setCommentLine] = useState(false);
    // TRUE ON FOCUS. FALSE ON CANCEL PRESS
    const [showButtons, setShowButtons] = useState(false);
    // TRUE ON INPUT DATA. FALSE WHEN INPUT IS BLANK
    const [enableBtn, setEnableBtn] = useState(true);

    const commentFocus = () => {
        setCommentLine(true);
        setShowButtons(true);
    }

    const commentFocusOut = () => {
        setCommentLine(false);
    }

    const commentStroke = (event) => {
        let currMessage = event.target.value;
        if(currMessage){
            setEnableBtn(false);
        }else{
            setEnableBtn(true);
        }
    }

    const sendComment = (event) => {
        event.preventDefault();
    }

    return (
        <form>
        <section className="commentBox">
            <input
                type="text"
                placeholder="Add a public comment..."
                ref={message}
                onFocus={commentFocus}
                onBlur={commentFocusOut}
                onKeyUp={commentStroke}
            />
            {/* UNDERLINE BEGINS HERE  */}
            {showCommentLine && <div className="commentLine"></div>}
        </section>
        {showButtons && (
            <>
            <button className="commentButton sendButton" disabled={enableBtn}
                onClick={sendComment}
            >
                COMMENT
            </button>
            <button className="commentButton" style={{color: "gray", backgroundColor: "transparent"}}
                onClick={() => {
                    setShowButtons(false);
                    message.current.value = ""
                }}
            >
                CANCEL
            </button>
            </>
        )}
        </form>
    );
}

export default TopCommentsBox;
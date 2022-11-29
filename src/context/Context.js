import React, { useContext, useState } from 'react';

const MainContext = React.createContext();

export function useMainContext() {
    return useContext(MainContext);
}

export function ContextProvider(props) {
    const [messageUpdate, setMessageUpdate] = useState();
    const [messageResult, setMessageResult] = useState(false);
    const [commentIncrement, setCommentIncrement] = useState(10);

    const value = {
        messageResult,
        setMessageResult,
        messageUpdate, 
        setMessageUpdate,
        commentIncrement, 
        setCommentIncrement
    }

    return (
        <MainContext.Provider value={value}>
            {props.children}
        </MainContext.Provider>
    )
}



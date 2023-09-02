import { mount } from 'auth/AuthApp';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {

    const ref = useRef(null);
    const history = useHistory(); // this is a copy of browser history

    useEffect(() => {
       const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathName}) => {

                const { pathname } = history.location;
                if(pathname !== nextPathName){ // this is just to prevent infinite loop issue
                    history.push(nextPathName);
                }               
            },
            onSignIn,
        });

        history.listen(onParentNavigate);
    }, []); // empty array ensure only run useEffect function once when marketing app first time render in screen

    return <div ref = {ref}/>
}
import React from 'react';
import  ReactDOM  from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';  // this is memory history 
import App from './App';

// Mount function to start up the app
const mount = (el,{onSignIn, onNavigate, defaultHistory, initialPath }) => {

    // defaultHistory only be provided when we are in isolation other wise parent callback method onNavigate()
    const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath], }); // createMemoryHistory will create initial path coming from props not '/' anymore

    if(onNavigate){ // this check is just for running app in isolation bcz onNavigate() callback is there in parent app
    history.listen(onNavigate); // this listen function will call onNavigate() in container app and sync memory hiostory with browser history
    }
    
    ReactDOM.render(<App history={history} onSignIn={onSignIn}/>,el);

    return {  // as a method return we are returning a callback function
        onParentNavigate({pathname: nextPathname}) {
            const {pathname} = history.location;            
            if(pathname !== nextPathname){
                history.push(nextPathname);
            }
        }
    }
};

// if we are in development and in isolation,
// call mount immediately
if(process.env.NODE_ENV === 'development'){    
    const devRoot = document.querySelector('#_auth-dev-root');

    if(devRoot){      
        mount(devRoot, {  defaultHistory: createBrowserHistory() });    // defaultHistory contains browser history
    }
}

// We are running through container
// and we should export the mount function
export { mount };
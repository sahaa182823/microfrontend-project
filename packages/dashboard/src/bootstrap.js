import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up the app
const mount = (el) => {  ;  
  createApp(Dashboard).mount(el);
};

// if we are in development and in isolation,
// call mount immediately
if(process.env.NODE_ENV === 'development'){    
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if(devRoot){      
        mount(devRoot);    // defaultHistory contains browser history
    }
}

// We are running through container
// and we should export the mount function
export { mount };
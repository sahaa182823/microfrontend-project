import { mount } from 'dashboard/DashboardApp';
import React, {useRef, useEffect} from 'react';

export default () => {

    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    } ,[]); // empty array ensure only run useEffect function once when marketing app first time render in screen

    return <div ref = {ref}/>
}
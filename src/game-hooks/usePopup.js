import {useState} from 'react'

export default function usePopup(){
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return [isShowing, toggle]
}
import React from 'react';
import s from './Next.module.css'


let Next = (props) => {
    return (
        <button
            onClick={() => props.setNewArray()}
            className={props.isClickedRandomlySelectedBirdForButtonNext ? s.next : s.next__active}>
            Next level
        </button>
    )
};

export default Next;
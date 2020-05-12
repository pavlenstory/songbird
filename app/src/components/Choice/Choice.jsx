import React from 'react';
import s from './Choice.module.css'


let Choice = (props) => {

    let handleClick = (e) => {
        let targetId = e.target.id;
        let targetElement = e.target;
        let previousStateOfTheClickedElementChoiceTargetElement = props.namesBirds[e.target.id].clicked;
        props.setBirdNameColor(targetId, targetElement, previousStateOfTheClickedElementChoiceTargetElement);
        props.setSelectedBird(targetId);
    };

    if (props.choiceTargetElementClassName === 'green' && props.previousStateOfTheClickedElementChoiceTargetElement === false) {
        props.choiceTargetElement.className = s.choice__green;
        props.setScore(5);
    } else if (props.choiceTargetElementClassName === 'red' && props.isClickedRandomlySelectedBird === false && props.previousStateOfTheClickedElementChoiceTargetElement === false) {
        props.choiceTargetElement.className = s.choice__red;
        props.setScore(1);
    } else if (props.choiceTargetElementClassName === "default") {
        props.choiceTargetElement.parentElement.querySelectorAll('li').forEach(e =>
            e.classList.remove(s.choice__red, s.choice__green));
        props.choiceTargetElement.parentElement.querySelectorAll('li').forEach(e =>
            e.classList.add(s.choice__element));
    }

    let choiceElements = props.namesBirds.map((e) => {
        return <li
            key={e.id}
            onClick={handleClick}
            id={e.id}
            className={s.choice__element}
        >{e.name}
        </li>
    });

    return (
        <div>
            <ul className={s.choice}>
                {choiceElements}
            </ul>
        </div>
    )
};


export default Choice;
import React from 'react'
import './App.css'
import MenuContainer from "./Menu/MenuContainer";
import ChoiceContainer from "./Choice/ChoiceContainer";
import CharacterContainer from "./Character/CharacterContainer";
import MusicContainer from "./Music/MusicContainer";
import NextContainer from "./Next/NextContainer";
import HeaderContainer from "./Header/HeaderContainer";
import CongratulationsContainer from "./Сongratulations/CongratulationsContainer";
import MaximumScoreContainer from "./Сongratulations/MaximumScore/MaximumScoreContainer";


let App = (props) => {
    if (props.countForArray <= 5) {
        return (
            <div>
                <HeaderContainer/>
                <MenuContainer/>
                <MusicContainer/>
                <ChoiceContainer/>
                <CharacterContainer/>
                <NextContainer/>
            </div>
        );
    }else if(props.score === 30){
        return (
            <div>
                <HeaderContainer/>
                <MenuContainer/>
                <MaximumScoreContainer/>
            </div>
        )
    }else if(props.score <= 29){
        return (
            <div>
                <HeaderContainer/>
                <MenuContainer/>
                <CongratulationsContainer/>
            </div>
        );
    }

};

export default App;

import birdsData from "../Rounds/birdsData";

const SET_SELECTED_BIRD = 'SET_SELECTED_BIRD';
const SET_NEW_ARRAY = 'SET_NEW_ARRAY';
const SET_BIRD_NAME_COLOR = 'SET_BIRD_NAME_COLOR';
const SET_SCORE = 'SET_SCORE';
const SET_FIRST_ARRAY = 'SET_FIRST_ARRAY';

let initialState = {
    typesBirds: [
        {id: 1, name: 'Разминка', active: true},
        {id: 2, name: 'Воробьиные', active: false},
        {id: 3, name: 'Лесные птицы', active: false},
        {id: 4, name: 'Певчие птицы', active: false},
        {id: 5, name: 'Хищные птицы', active: false},
        {id: 6, name: 'Морские птицы', active: false},
    ],
    namesBirds: birdsData[0],
    selectedBird: {},
    isClickedSelectedBird: false,
    randomlySelectedBird: birdsData[0][Math.floor(Math.random() * Math.floor(6))],
    isClickedRandomlySelectedBird: false,
    countForArray: 0,
    isClickedRandomlySelectedBirdForButtonNext: false,
    choiceTargetElementClassName: '',
    choiceTargetElement: '',
    choiceTargetElementId: '',
    previousStateOfTheClickedElementChoiceTargetElement: false,
    score: 0,
};

const birdReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_BIRD: {
            if (action.selectedBirdId == state.randomlySelectedBird.id) {
                return {
                    ...state,
                    selectedBird: state.namesBirds[action.selectedBirdId],
                    isClickedSelectedBird: true,
                    isClickedRandomlySelectedBird: true,
                    isClickedRandomlySelectedBirdForButtonNext: true,
                }
            } else {
                return {
                    ...state,
                    selectedBird: state.namesBirds[action.selectedBirdId],
                    isClickedSelectedBird: true
                }
            }
        }
        case SET_NEW_ARRAY: {
            if (state.isClickedRandomlySelectedBird === true) {
                return {
                    ...state,
                    randomlySelectedBird: birdsData[state.countForArray + 1][Math.floor(Math.random() * Math.floor(6))],
                    countForArray: state.countForArray + 1,
                    isClickedRandomlySelectedBird: false,
                    isClickedSelectedBird: false,
                    isClickedRandomlySelectedBirdForButtonNext: false,
                    choiceTargetElementClassName: "default",
                    typesBirds: state.typesBirds.map(e => {
                        const countForName = state.countForArray + 2;
                        if (e.active === true) {
                            return {...e, active: false};
                        }
                        if (e.id === countForName) {
                            return {...e, active: true}
                        }
                        return {...e}
                    }),
                    namesBirds: birdsData[state.countForArray + 1].map(e => {
                        return {...e, clicked: false};
                    })
                }
            } else if (state.isClickedRandomlySelectedBird === false) {
                return state
            }
        }
        case SET_BIRD_NAME_COLOR: {
            if (state.randomlySelectedBird.id == action.targetId) {
                return {
                    ...state,
                    choiceTargetElementClassName: 'green',
                    choiceTargetElement: action.targetElement,
                    choiceTargetElementId: action.targetId,
                    previousStateOfTheClickedElementChoiceTargetElement: action.prevChoiceTarget,
                    namesBirds: state.namesBirds.map(e => {
                        if (e.id == action.targetId) {
                            return {...e, clicked: true};
                        }
                        return {...e}
                    })
                }
            } else {
                return {
                    ...state,
                    choiceTargetElementClassName: 'red',
                    choiceTargetElement: action.targetElement,
                    choiceTargetElementId: action.targetId,
                    previousStateOfTheClickedElementChoiceTargetElement: action.prevChoiceTarget,
                    namesBirds: state.namesBirds.map(e => {
                        if (e.id == action.targetId) {
                            return {...e, clicked: true};
                        }
                        return {...e}
                    })
                }
            }
        }
        case SET_SCORE: {
            if (action.score === 5) {
                return {
                    ...state,
                    score: state.score + 5
                }
            } else if (action.score === 1) {
                return {
                    ...state,
                    score: state.score - 1
                }
            }
        }
        case SET_FIRST_ARRAY: {
            if (action.bool === true) {
                return {
                    ...state,
                    typesBirds: [
                        {id: 1, name: 'Разминка', active: true},
                        {id: 2, name: 'Воробьиные', active: false},
                        {id: 3, name: 'Лесные птицы', active: false},
                        {id: 4, name: 'Певчие птицы', active: false},
                        {id: 5, name: 'Хищные птицы', active: false},
                        {id: 6, name: 'Морские птицы', active: false},
                    ],
                    selectedBird: {},
                    isClickedSelectedBird: false,
                    randomlySelectedBird: birdsData[0][Math.floor(Math.random() * Math.floor(6))],
                    isClickedRandomlySelectedBird: false,
                    countForArray: 0,
                    isClickedRandomlySelectedBirdForButtonNext: false,
                    choiceTargetElementClassName: '',
                    choiceTargetElement: '',
                    score: 0,
                    isClickedCongratulationsButtonFirstArray: false,
                    namesBirds: birdsData[0].map(e => {
                        return {...e, clicked: false};
                    })
                }
            } else {
                return state
            }
        }
        default: {
            return state
        }
    }
};

export const setSelectedBird = (selectedBirdId) =>
    ({type: SET_SELECTED_BIRD, selectedBirdId});
export const setNewArray = () =>
    ({type: SET_NEW_ARRAY});
export const setBirdNameColor = (targetId, targetElement, prevChoiceTarget) =>
    ({type: SET_BIRD_NAME_COLOR, targetId: targetId, targetElement: targetElement, prevChoiceTarget: prevChoiceTarget});
export const setFirstArray = (bool) =>
    ({type: SET_FIRST_ARRAY, bool});
export const setScore = (score) =>
    ({type: SET_SCORE, score});

export default birdReducer
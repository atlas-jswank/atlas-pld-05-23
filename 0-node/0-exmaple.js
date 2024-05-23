import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

/*
 * There is a single state object for the entire application 
 *  represented as a javascript object.
 */
const DEFAULT_STATE = {
    firstName: '',
    ageInDogYears: 0,
};

/*
 * The reducer function is a pure function that takes the 
 * current state and an action and returns a new state.
 */
const reducer = (state = DEFAULT_STATE, action) => {
    // Deep Copy to avoid mutating current state
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'SET_FIRST_NAME':
            newState.firstName = action.payload.firstName;
            break;
        case 'SET_AGE':
            newState.ageInDogYears = action.payload.age * 7;
            break;
    }

    return newState;
}

/*
 * The store holds the state and the reducer. It is the single 
 * source of truth for state in the application.
 */
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger.default) // This adds a console log every time the state changes
});

/*
 * State is immutable. The only way to change state is to dispatch
 * an action. Actions are plain javascript objects with a type and
 * a payload.
 */

store.dispatch({
    type: "SET_FIRST_NAME",
    payload: {
        firstName: "Lumi",
    },
});

store.dispatch({
    type: "SET_AGE",
    payload: {
        age: 12,
    },
});


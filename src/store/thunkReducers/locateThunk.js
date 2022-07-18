/* Importing the action creators from the lgaSlice and stateSlice files. */
import { lgaAction } from "../Slice/lgaSlice";
import { stateAction } from "../Slice/stateSlice";

/**
 * It's an async function that returns a function that dispatches an action creator that returns an
 * object with a property called isPending, stateList, and error.
 * @returns An object with a function as a property.
 */
export const getState = () =>{
    return async(dispatch) =>{
        /**
         * It fetches data from an API and returns the data as a JSON object.
         * @returns The data is being returned as a promise.
         */
        const fetchData = async() =>{
            dispatch(stateAction.createList({isPending: true, stateList: [], error: ''}))
            const res = await fetch("https://countriesnow.space/api/v0.1/countries/states/");
            const data = res.json()
            return data
        }

        /* A try catch block. It is used to catch errors. */
        try {
            const response = await fetchData();
            dispatch(stateAction.createList({isPending: false, stateList: response.data, error: ''}))
        } catch (error) {
            dispatch(stateAction.createList({isPending: false, stateList: [], error: error.message}))
        }
    }
}

/**
 * It fetches data from an API and returns the data in JSON format
 * @param ele - The element that was clicked.
 * @returns An object with a promise.
 */
export const getLGA = (ele) =>{
    return async(dispatch) =>{
        /**
         * It fetches data from an API and returns the data in JSON format.
         * @returns An object with a promise.
         */
        const fetchData = async() =>{
            dispatch(lgaAction.createList({isPending: true, lgaList: [], error: ''}))

            const res = await fetch("http://locationsng-api.herokuapp.com/api/v1/lgas");
            const data = res.json()
            return data
        }

        /* A try catch block. It is used to catch errors. */
        try {
            const response = await fetchData();
            dispatch(lgaAction.createList({isPending: false, lgaList: response, error: ''}))
        } catch (error) {
            dispatch(lgaAction.createList({isPending: false, lgaList: [], error: error.message}))
        }
    }
}
import { lgaAction } from "../Slice/lgaSlice";
import { stateAction } from "../Slice/stateSlice";

export const getState = () =>{
    return async(dispatch) =>{
        const fetchData = async() =>{
            dispatch(stateAction.createList({isPending: true, stateList: [], error: ''}))
            const res = await fetch("http://locationsng-api.herokuapp.com/api/v1/states");
            const data = res.json()
            return data
        }

        try {
            const response = await fetchData();
            dispatch(stateAction.createList({isPending: false, stateList: response, error: ''}))
        } catch (error) {
            dispatch(stateAction.createList({isPending: false, stateList: [], error: error.m}))
        }
    }
}

export const getLGA = (ele) =>{
    return async(dispatch) =>{
        const fetchData = async() =>{
            dispatch(lgaAction.createList({isPending: true, lgaList: [], error: ''}))

            const res = await fetch("http://locationsng-api.herokuapp.com/api/v1/lgas");
            const data = res.json()
            return data
        }

        try {
            const response = await fetchData();
            dispatch(lgaAction.createList({isPending: false, lgaList: response, error: ''}))
        } catch (error) {
            dispatch(lgaAction.createList({isPending: false, lgaList: [], error: error.message}))
        }
    }
}
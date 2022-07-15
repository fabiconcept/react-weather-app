import { locationAction } from "../Slice/locationSlice";

export const getState = () =>{
    return async(dispatch) =>{
        const fetchData = async() =>{
            dispatch(locationAction.isLoad({isLoad: true}))
            const res = await fetch("http://locationsng-api.herokuapp.com/api/v1/states");
            const data = res.json()
            return data
        }

        try {
            const response = await fetchData();
            dispatch(locationAction.isLoad({isLoad: false}))
            dispatch(locationAction.addState({area: response}))
        } catch (error) {
            dispatch(locationAction.isLoad({isLoad: false}))
            dispatch(locationAction.err({err: error.message}))
        }
    }
}

export const getLGA = (ele) =>{
    return async(dispatch) =>{
        const fetchData = async() =>{
            dispatch(locationAction.isLoad({isLoad: true}))

            const res = await fetch("http://locationsng-api.herokuapp.com/api/v1/lgas");
            const data = res.json()
            return data
        }

        try {
            const response = await fetchData();
            dispatch(locationAction.isLoad({isLoad: false}))
            dispatch(locationAction.addLGA({lgas: response}))
        } catch (error) {
            dispatch(locationAction.isLoad({isLoad: false}))
            dispatch(locationAction.err({err: error.message}))
        }
    }
}
import {
    useReducer
} from 'react'
import {
    Route,
    Routes
} from 'react-router-dom'
import {
    useNavigate
} from 'react-router-dom'
import ProfileForm from './ProfileForm'
import DayForm from './DayForm'
import { DAYS } from '../../constants'

const initialState = {
    name: '',
    active: true,
    daySettings: Object.keys(DAYS).map(day => ({
        day,
        active: false
    })),
    zoneSettings: []
}

function reducer(state, action){
    console.log(action)
    switch(action.type){
        case 'profile_update':
            return {...state, ...action.payload}
        default:
            return state
    }
}

//navigates between each step of form submission

/**
 * <Route path="zones" element={<ZoneForm  store={store} dispatch={dispatch} handleNext={(data)=>{}}/>} />
 * 
 */

export default function SprinklerProfileForm(){
    const [store, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate()
    return (
        <Routes>
            <Route index element={<ProfileForm store={store} dispatch={dispatch} navigate={navigate} />} />
            <Route path="days" element={<DayForm store={store} dispatch={dispatch} navigate={navigate} />} />
            <Route path="zones" element={<div>Hello Zones</div>}/>
        </Routes>
    )
}
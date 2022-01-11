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
import ZoneForm from './ZoneForm'
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
        case 'day_settings_update':
        case 'zone_settings_update':
            return {...state, ...action.payload}
        default:
            console.error('Action did not match switch case', action)
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
            <Route path="zones" element={<ZoneForm store={store} dispatch={dispatch} navigate={navigate} />}/>
        </Routes>
    )
}
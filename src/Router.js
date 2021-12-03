import {
    Routes,
    Route
} from 'react-router-dom'
import ProfileList from './containers/ProfileList'
import SprinklerProfileForm from './containers/SprinklerProfileForm'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<ProfileList />} />
            <Route path="/AddSprinklerProfile" element={<SprinklerProfileForm />} />
        </Routes>
    )
}
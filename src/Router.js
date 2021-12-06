import {
    Routes,
    Route
} from 'react-router-dom'
import ProfileList from './containers/ProfileList'
import SprinklerProfileForm from './containers/SprinklerProfileForm'
import ZoneList from './containers/ZoneList'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<ProfileList />} />
            <Route path="/addSprinklerProfile" element={<SprinklerProfileForm />} />
            <Route path="/zones" element={<ZoneList />} />
        </Routes>
    )
}
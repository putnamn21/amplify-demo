import React from 'react'
import {
    Routes,
    Route,
    Outlet
} from 'react-router-dom'
import Modal from './components/Modal'
import SprinklerProfileForm from './containers/SprinklerProfileForm'
import ProfileList from './containers/ProfileList'
import ZoneList from './containers/ZoneList'

export default function Router() {
    return (
        <Routes>
            <Route path="/zones" element={<ZoneList />} />
            <Route path="/*" element={<ProfileList />}>
                <Route element={<Modal><Outlet/></Modal>}>
                    <Route path="add/*" element={<SprinklerProfileForm />} />
                    <Route path="edit/:id/*" element={<SprinklerProfileForm />} />
                </Route>
            </Route>
        </Routes>
    )
}
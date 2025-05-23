/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainBox from "./components/MainBox.jsx";
import GlobeBg from "./components/GlobeBg.jsx";

export default App;

function App() {
    return (
        <>
            <GlobeBg />
            <div lang="en" className="flex lg:m-2 items-center justify-center">
                <MainBox />
            </div>
        </>

    );
}
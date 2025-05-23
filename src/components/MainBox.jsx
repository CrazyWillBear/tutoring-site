/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import MainTitle from "./MainTitle.jsx";
import TutoringPrograms from "./TutoringPrograms.jsx";
import AboutMe from "./AboutMe.jsx";
import Footers from "./Footers.jsx";
import PricingAndPayment from "./PricingAndPayment.jsx";
import TutoringStructure from "./TutoringStructure.jsx";
import Curricula from "./Curricula.jsx";
import MainSubtitle from "./MainSubtitle.jsx";
import WhatIOffer from "./WhatIOffer.jsx";
import BookButton from "./BookButton.jsx";
import Copyright from "./Copyright.jsx";

export default MainBox;

/**
 * Main box component. Contains the styling for the box itself, within box are all necessary components.
 *
 * @returns {JSX.Element} Main box component
 */
function MainBox() {
    return (
        <>
            <div className="bg-blur-mb lg:bg-blur-dt m-5 lg:m-auto lg:w-3/4 w-full rounded-3xl lg:rounded-lg lg:rounded-md lg:border-4 bg-teal-800/50">
                <div className="px-6 pt-6">
                    <MainTitle />
                    <MainSubtitle />
                    <BookButton />
                    <div className="hyphens-auto break-words">
                        <WhatIOffer />
                        <TutoringPrograms />
                        <TutoringStructure />
                        <Curricula />
                        <AboutMe />
                        <PricingAndPayment />
                    </div>
                </div>

                <div className="hyphens-auto break-words px-6 py-2">
                    <Footers />
                    <Copyright />
                </div>
            </div>
        </>
    );
}

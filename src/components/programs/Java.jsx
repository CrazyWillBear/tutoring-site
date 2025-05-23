/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import {useState} from "react";

export default Java;

/**
 * Python component. Expandable, when expanded displays information on Python.
 *
 * @returns {JSX.Element}
 */
function Java() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            { /* Expand button */ }
            <button
                onClick={() => setExpanded(!expanded)}
                className="text-left font-bold cursor-pointer"
            >
                {expanded ? '🍵 Java (AP Computer Science / general) ▲' : '🍵 Java (AP Computer Science / general) ▼'}
            </button>

            { /* Curriculum overview */ }
            <div
                className={`lg:px-5 transition-all duration-300 overflow-hidden ${
                    expanded ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <p className="pt-2">
                    Java is a fast and powerful language that was released in 1995. It has stood the test of time,
                    used mostly for mobile apps (specifically Android), backend development, and enterprise software
                    for banks and large businesses.
                </p>
                <p className="pt-2">
                    We offer Java classes oriented specifically towards the AP Computer Science curriculum. You and
                    your student can choose whether or not to focus on AP Computer Science prep.
                </p>
            </div>
        </>
    );
}

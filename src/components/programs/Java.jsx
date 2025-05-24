/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import {useState} from "react";
import Link from "../Link.jsx";

export default Java;

const ap_csci_url = "https://apstudents.collegeboard.org/courses/ap-computer-science-a";

/**
 * Python component. Expandable, when expanded displays information on Python.
 *
 * @returns {JSX.Element}
 */
function Java() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            { /* Expand button */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="text-left font-bold cursor-pointer"
            >
                {expanded ? '🍵 Java (AP Comp Sci) ▲' : '🍵 Java (AP Comp Sci) ▼'}
            </button>

            { /* Curriculum overview */}
            <div
                className={`lg:px-5 transition-all duration-300 overflow-hidden ${
                    expanded ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <p className="pt-2">
                    Java is a fast and powerful language that was released in 1995. It has stood the test of time, used
                    today in mobile apps (specifically Android), backend development, and enterprise software for banks
                    and other large businesses.
                </p>
                <p className="pt-2">
                    We offer Java classes oriented specifically towards the <Link _href={ap_csci_url} txt="AP Computer
                    Science A"/> curriculum.
                </p>
            </div>
        </>
    );
}

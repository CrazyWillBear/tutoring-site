/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import {useState} from "react";
import Link from "../Link.jsx";

export default JavaAPPrep;

// Links to an explanation of a Hello World program, in case people don't know
const hello_world_url = "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program";

/**
 * Java AP Prep component. Expandable, when expanded displays ordered list of curriculum.
 *
 * @returns {JSX.Element}
 */
function JavaAPPrep() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="px-5">
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
                <ol className="list-decimal list-inside">
                    <li>Setup, <Link _href={hello_world_url} txt="Hello World"/>, & Variables - (<i>1 session</i>)</li>
                    <li>Objects & Classes - (<i>1-2 session(s)</i>)</li>
                    <li>Conditionals & Booleans - (<i>1-2 session</i>)</li>
                    <li>Looping - (<i>1-2 session(s)</i>)</li>
                    <li>Arrays & ArrayList - (<i>2-3 session(s)</i>)</li>
                    <li>Inheritance & Polymorphism - (<i>2-3 session(s)</i>)</li>
                    <li>Basic Algorithms - (<i>2-3 session(s)</i>)</li>
                    <li>Recursion - (<i>2-3 session(s)</i>)</li>
                    <li>Exam Style Review - (<i>1-2 session</i>)</li>
                </ol>
            </div>
        </div>
    );
}

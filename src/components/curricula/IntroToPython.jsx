/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import {useState} from "react";
import Link from "../Link.jsx";

export default IntroToPython;

const hello_world_url = "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program";

/**
 * Intro To Python component. Expandable, when expanded displays ordered list of curriculum.
 *
 * @returns {JSX.Element}
 */
function IntroToPython() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="px-5">
            { /* Expand button */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="text-left font-bold cursor-pointer"
            >
                {expanded ? '🐍 Python ▲' : '🐍 Python ▼'}
            </button>

            { /* Curriculum overview */}
            <div
                className={`lg:px-5 transition-all duration-300 overflow-hidden ${
                    expanded ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <ol className="list-decimal list-inside">
                    <li>Setup & <Link _href={hello_world_url} txt="Hello World"/> - (<i>1 session</i>)</li>
                    <li>Variables & Data Types - (<i>1-2 session(s)</i>)</li>
                    <li>Input & Output - (<i>1 session</i>)</li>
                    <li>Conditionals & Booleans - (<i>1-2 session(s)</i>)</li>
                    <li>Loops - (<i>2-3 session(s)</i>)</li>
                    <li>Lists - (<i>1-2 session(s)</i>)</li>
                    <li>Functions - (<i>2-3 session(s)</i>)</li>
                    <li>Strings & Text Processing - (<i>1-2 session(s)</i>)</li>
                    <li>Dictionaries - (<i>2-3 session(s)</i>)</li>
                </ol>
            </div>
        </div>
    );
}

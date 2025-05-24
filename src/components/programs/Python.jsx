/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import {useState} from "react";

export default Python;

/**
 * Python component. Expandable, when expanded displays information on Python.
 *
 * @returns {JSX.Element}
 */
function Python() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
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
                <p className="pt-2">
                    An incredibly powerful and versatile language with intuitive syntax, Python is <i>perfect for
                    new coders</i>. It's most commonly used for artificial intelligence/machine learning, web
                    development, and data science.
                </p>
            </div>
        </>
    );
}

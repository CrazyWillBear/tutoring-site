/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import {useState} from "react";

export default HTMLCSSReact;

/**
 * HTML, CSS, & React.js component. Expandable, when expanded displays information on those three.
 *
 * @returns {JSX.Element}
 */
function HTMLCSSReact() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            { /* Expand button */ }
            <button
                onClick={() => setExpanded(!expanded)}
                className="text-left font-bold cursor-pointer"
            >
                {expanded ? '📄 HTML, CSS, & React.js ▲' : '📄 HTML, CSS, & React.js ▼'}
            </button>

            { /* Curriculum overview */ }
            <div
                className={`lg:px-5 transition-all duration-300 overflow-hidden ${
                    expanded ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <p className="pt-2">
                    HTML and CSS are the backbone of frontend web development. Students will learn how to design and
                    create websites using these.
                </p>
                <p className="pt-2">
                    React.js is a library for JavaScript. It allows developers to add interactivity and advanced
                    design features to their websites. Students will learn how to use React.js upon learning HTML
                    and CSS.
                </p>
            </div>
        </>
    );
}

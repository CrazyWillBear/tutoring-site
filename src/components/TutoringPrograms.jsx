/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import Python from "./programs/Python.jsx";
import Java from "./programs/Java.jsx";
import HTMLCSSReact from "./programs/HTMLCSSReact.jsx";

export default TutoringPrograms;

const ap_class_url = "https://apstudents.collegeboard.org/courses/ap-computer-science-a";

/**
 * Tutoring Programs component. Contains a list of each program offered and a description for each.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function TutoringPrograms() {
    return (
        <div className="py-2">
            <h2 className="text-lg font-bold">📖 Tutoring Programs:</h2>
            <ul className="list-disc px-10 text-justify">
                { /* Python section */ }
                <div className="pt-2"><Python /></div>

                { /* Java section */ }
                <div className="pt-2"><Java /></div>

                { /* HTML/CSS/React.js section */ }
                <div className="pt-2"><HTMLCSSReact /></div>
            </ul>
        </div>
    );
}

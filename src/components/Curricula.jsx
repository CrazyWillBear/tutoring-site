/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import IntroToPython from "./curricula/IntroToPython.jsx";
import JavaAPPrep from "./curricula/JavaAPPrep.jsx";

export default Curricula;

/**
 * Curricula component, consists of expandable ordered lists of curriculum outlines.
 *
 * @returns {JSX.Element} Curricula component
 */
function Curricula() {
    return (
        <div className="py-2">
            { /* Title */ }
            <h2 className="text-lg font-bold">🎓 Curricula:</h2>

            { /* Description */ }
            <p className="px-5 text-justify pt-2">
                Curricula are tailored to the individual student, but are largely pre-planned.
            </p>

            { /* Expandable program curricula */ }
            <div className="px-5">
                <div className="pt-2"><IntroToPython /></div>
                <div className="pt-2"><JavaAPPrep /></div>
            </div>

            { /* Additional curriculum */ }
            <p className="pt-2 px-5 text-justify">
                Other subjects, including data science and web development, don't have specific curricula. Students are
                assigned more highly tailored projects in these subjects.
            </p>
        </div>
    );
}

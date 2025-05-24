/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import Link from "./Link.jsx";

export default TutoringStructure;

const google_meet_url = "https://meet.google.com/";

/**
 * Tutoring Structure component. Contains information about structure of tutoring programs.
 *
 * @returns {JSX.Element} Tutoring Structure component
 */
function TutoringStructure() {
    return (
        <div className="py-2">
            { /* Title */}
            <h2 className="text-lg font-bold">⏱ Tutoring Structure:</h2>

            { /* Description */}
            <div className="px-5 text-justify">
                <p className="pt-2">
                    Sessions are <b>1 hour long</b> and take place online (via <Link _href={google_meet_url} txt="Google
                    Meet"/>). Students are recommended to enroll in <b>1-2 sessions per week</b>. Students learn
                    through hands-on coding projects that focus on specific aspects of their chosen program's
                    curriculum.
                </p>
            </div>
        </div>
    );
}

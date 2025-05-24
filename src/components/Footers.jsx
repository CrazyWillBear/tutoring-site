/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

export default Footers;

/**
 * Footers component, displayed at bottom of box.
 *
 * @returns {JSX.Element} The footer component
 */
function Footers() {
    return (
        <div className="text-xs">
            { /* Curricula notice */}
            <p>
                <sup>*</sup> These fields are more flexible to student interests, which will shape project and
                curriculum planning.
            </p>

            { /* Notice regarding sessions */}
            <p>
                <sup>**</sup> This is reserved for those who <i>actually</i> need it. Please do not try to take unfair
                advantage of this policy.
            </p>
        </div>
    );
}

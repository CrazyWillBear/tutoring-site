/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

export default MainSubtitle;

/**
 * The main subtitle component.
 *
 * @returns {JSX.Element} The main subtitle component
 */
function MainSubtitle() {
    return (
        <h2 className="text-center text-xl font-semibold pt-2">
            Computer science tutoring
            <br/>
            Summer 2025
        </h2>
    );
}

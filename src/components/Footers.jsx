/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import Link from "./Link.jsx";

export default Footers;

const policy_url = "https://docs.google.com/document/d/e/2PACX-1vTzjDG-TrWVMK8LP3louS1EUoTQlPVtGSJpnJZjMQmse8HvttPg506BHsHlGsywa3M23dGFxeImWxI0/pub";

/**
 * Footers component, displayed at bottom of box.
 *
 * @returns {JSX.Element} The footer component
 */
function Footers() {
    return (
        <div className="text-sm">
            { /* Notice for resume */ }
            <p>
                <sup>*</sup> For detailed information about me and my resume, check out <Link
                    _href="https://www.capbear.net"
                    txt="my website"
                />.
            </p>

            { /* Notice regarding sessions */ }
            <p>
                <sup>**</sup> This is reserved for those who <i>actually need</i> it. Please do not try to take unfair
                advantage of this <Link _href={policy_url} txt="policy" />.
            </p>
        </div>
    );
}

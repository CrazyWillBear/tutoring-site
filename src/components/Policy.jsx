/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import {useState} from "react";
import Link from "./Link.jsx";

export default Policy;

const policy_url = "https://docs.google.com/document/d/e/2PACX-1vTzjDG-TrWVMK8LP3louS1EUoTQlPVtGSJpnJZjMQmse8HvttPg506BHsHlGsywa3M23dGFxeImWxI0/pub";

/**
 * Payment and Cancellation Policy component. Expandable, when expanded displays information on our policies.
 *
 * @returns {JSX.Element}
 */
function Policy() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            { /* Expand button */ }
            <button
                onClick={() => setExpanded(!expanded)}
                className="font-bold cursor-pointer"
            >
                {expanded ? '⚖️ Policy ▲' : '⚖️ Policy ▼'}
            </button>

            { /* Policy overview */ }
            <div
                className={`px-5 transition-all duration-300 overflow-hidden ${
                    expanded ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <p className="pt-2">
                    <Link _href={policy_url} txt="The full Payment and Cancellation Policy" /> is only one page, so we
                    recommend reading it. The following it a summary of it:
                </p>
                <p className="pt-2">
                    Payments must be made <b>in cash</b> if in person and <b>via check</b> if via Google Meet. Payments
                    can be made at any time the week of a meeting. Payments not made are considered late, and while they
                    incur <b>no fees</b>, tutoring services <b>will be suspended</b> until payment is made.
                </p>
                <p className="pt-2">
                    There is no cancellation fee. If you pay for a session before it takes place (during the same week)
                    and cancel within the rules established previously, you are eligible for a <b>refund</b> or can have
                    the payment <b>roll over</b> into the next session.
                </p>
            </div>
        </>
    );
}

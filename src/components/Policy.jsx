/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import {useState} from "react";

export default Policy;

/**
 * Payment and Cancellation Policy component. Expandable, when expanded displays information on our policies.
 *
 * @returns {JSX.Element}
 */
function Policy() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            { /* Expand button */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="font-bold cursor-pointer"
            >
                {expanded ? '⚖️ Policy ▲' : '⚖️ Policy ▼'}
            </button>

            { /* Policy overview */}
            <div
                className={`transition-all duration-300 overflow-hidden ${
                    expanded ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <p className="pt-2">
                    The full policy is only one page, so we recommend reading it. The following is a summary of it:
                </p>
                <p className="pt-2">
                    Payments must be made <b>via check</b>. A session's payment must be paid by midnight on Sunday the
                    week of. If payment is not made by this deadline, future tutoring sessions will be suspended until
                    said payment is received. Late payments <b>incur no fees</b>.
                </p>
                <p className="pt-2">
                    If you cancel within the rules -- at least 1 hour before session start time -- then you are eligible
                    for a <b>refund</b> or can have the payment <b>roll over</b> to the next week. We ask that in these
                    events, you reach out promptly. Improper cancellations incur a <b>$10 penalty</b>, except for the
                    first one.
                </p>
            </div>
        </>
    );
}

/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import Policy from "./Policy.jsx";

export default PricingAndPayment;

/**
 * PricingAndPayment component. Contains information about tutor pricing.
 *
 * @returns {JSX.Element} PricingAndPayment component
 */
function PricingAndPayment() {
    return (
        <div className="py-2">
            { /* Title */ }
            <h2 className="text-lg font-bold">💵 Pricing, Payment, & Cancellations:</h2>

            { /* Description */ }
            <div className="px-5 text-justify">
                <p className="pt-2">
                    First sessions have a reduced price of <b>only $20</b>. Further tutoring is priced at <b>$40 per
                    session</b>, and we recommend 1-2 sessions per week. Need-based pricing is available at <b>$20 per
                    session</b><sup>**</sup>.
                </p>
                <p className="pt-2">
                    Cancellations can be made up to an hour before a session's scheduled start time. There is no
                    cancellation fee.
                </p>
            </div>

            { /* Policy Section */ }
            <div className="pt-2 px-5 text-justify">
                <Policy />
            </div>

        </div>
    );
};

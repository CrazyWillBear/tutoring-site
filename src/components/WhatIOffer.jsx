/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

export default WhatIOffer;

/**
 * What I Offer component. Explains what service is offered.
 *
 * @returns {JSX.Element} What I Offer component
 */
function WhatIOffer() {
    return (
        <div className="py-2">
            { /* Title */}
            <h2 className="text-lg font-bold">🔍 What I offer:</h2>

            { /* Description */}
            <div className="px-5 text-justify">
                <p className="pt-2">
                    I offer one-on-one tutoring tailored to your goals and experience level. Whether you're just
                    starting out, preparing for AP Computer Science next year, or looking to build a strong foundation
                    in core concepts, my tutoring can help.
                </p>
            </div>
        </div>
    );
}

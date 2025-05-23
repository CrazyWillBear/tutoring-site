/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import Link from "./Link.jsx";

export default AboutMe;

// First paragraph link urls
const comp_sci_url = "https://coursecatalog.bucknell.edu/collegeofengineeringcurricula/areasofstudy/computersciencecsci/";
const bucknell_link = "https://www.usnews.com/best-colleges/bucknell-university-3238/overall-rankings";

// Second paragraph link urls
const ufc_prediction_url = "https://github.com/CrazyWillBear/ufc_prediction_model";
const blogman_url = "https://github.com/CrazyWillBear/blogman"
const linked_list_url = "https://github.com/CrazyWillBear/linkedlist-cpp";

/**
 * About me component. Explains who I am and provides links to various projects and other sources.
 *
 * @returns {JSX.Element} About me component
 */
function AboutMe() {
    return (
        <div className="py-2">
            { /* Title */ }
            <h2 className="text-lg font-bold">💻 About me:</h2>

            { /* Description */ }
            <div className="px-5 text-justify">
                <p className="pt-2">
                    I am a <Link _href={comp_sci_url} txt="Computer Science and Engineering Major" /> at <Link
                    _href={bucknell_link} txt="Bucknell University" /> with internships across multiple fields of
                    computer science<sup>*</sup>, including low-level application development and data
                    analysis/processing.
                </p>
                <p className="pt-2">
                    My personal projects include <Link _href={ufc_prediction_url} txt="predictive machine learning models" />
                    , <Link _href={blogman_url} txt="personal-use websites" />, and <Link _href={linked_list_url}
                    txt="demonstrations of common computer science principles" />. Each link takes you to each
                    respective project's Git repo (hosted on Github), where you can read about them and see their source code.
                </p>
            </div>
        </div>
    );
}

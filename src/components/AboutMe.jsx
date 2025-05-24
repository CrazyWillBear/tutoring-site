/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/

import Link from "./Link.jsx";

export default AboutMe;

// First paragraph link urls
const comp_sci_url = "https://coursecatalog.bucknell.edu/collegeofengineeringcurricula/areasofstudy/computersciencecsci/";
const website_url = "https://www.capbear.net";

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
            { /* Title */}
            <h2 className="text-lg font-bold">💻 About me:</h2>

            { /* Description */}
            <div className="px-5 text-justify">
                <p className="pt-2">
                    My name is William Chastain, and I'm a <Link _href={comp_sci_url} txt="Computer Science and
                    Engineering Major"/> at Bucknell University. I've had internships across multiple fields of computer
                    science, including client-side application development and data processing + analysis. You can learn
                    more about me and my resume through my website, <Link _href={website_url} txt="capbear.net"/>.
                </p>
                <p className="pt-2">
                    My personal projects include <Link _href={ufc_prediction_url} txt="predictive machine learning
                    models"/>, <Link _href={blogman_url} txt="websites"/>, and <Link _href={linked_list_url}
                    txt="demonstrations of computer science principles"/>. Each link takes you to the respective
                    project's Git repo (all hosted on Github), where you can read about them and see their source code.
                </p>
            </div>
        </div>
    );
}

import Link from "./Link.jsx";

export default Copyright;

const gh_url = "https://github.com/CrazyWillBear/tutoring-site";
const license_url = "https://github.com/CrazyWillBear/tutoring-site/blob/main/LICENSE.txt";

function Copyright() {
    return (
        <div className="text-[9px]">
            { /* Notice for resume */}
            <p className="pt-2 text-center">
                &copy; 2025 William Chastain. All rights reserved.
                <br/>
                <Link _href={gh_url} txt="Source code"/> - <Link _href={license_url} txt="License"/>
            </p>
        </div>
    );
}

/*
 This code was in part developed via ChatGPT.
*/

import React, {useEffect, useRef, useState} from 'react';

export default BookButton;

// This can be simple (no need for media queries)
const isMobile = window.innerWidth < 768;

function Desktop() {
    const buttonRef = useRef(null);

    useEffect(() => {
        const scriptId = 'google-calendar-script';
        const linkId = 'google-calendar-style';

        // Add stylesheet if it's not already added
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }

        // Add script if it's not already added
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
            script.async = true;
            script.onload = () => {
                if (window.calendar?.schedulingButton && buttonRef.current) {
                    window.calendar.schedulingButton.load({
                        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0UsfDVmW6bLo_P11xJCKVZ2jpMVQqjdtT_YKCcm5IJtxGmdt7Gpr5DiF341qae62g1YuCve8Lm?gv=true',
                        color: '#0B8043',
                        label: 'Book a session',
                        target: buttonRef.current,
                    });
                }
            };
            document.body.appendChild(script);
        } else {
            // If script is already loaded, then run the button setup
            if (window.calendar?.schedulingButton && buttonRef.current) {
                window.calendar.schedulingButton.load({
                    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0UsfDVmW6bLo_P11xJCKVZ2jpMVQqjdtT_YKCcm5IJtxGmdt7Gpr5DiF341qae62g1YuCve8Lm?gv=true',
                    color: '#0B8043',
                    label: 'Book a session',
                    target: buttonRef.current,
                });
            }
        }
    }, []);

    return <div ref={buttonRef}/>;
}

function Mobile() {
    const [clicked, setClicked] = useState(false);

    return (
        <a
            href="https://calendar.app.google/k6rRXAeAdZcttxAg8"
            onClick={() => setClicked(!clicked)}
            className={`rounded-sm p-2 px-4 ${clicked ? 'bg-green-800' : 'bg-green-700'}`}
        >
            <p className="font-semibold">Book a session</p>
        </a>
    );
}

function BookButton() {
    return (
        <div className="flex justify-center pt-2 text-base">
            {isMobile ? Mobile() : Desktop()}
        </div>
    );
}

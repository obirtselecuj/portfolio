import React, { useEffect, useState } from 'react'

const FooterBottom = () => {
    const [currentYear, setCurrentYear] = useState(null);
    useEffect(() => {
        const currentDate = new Date();
        const fullyear = currentDate.getFullYear();
        setCurrentYear(fullyear);
    })
    return (
        <div className="w-full py-10">
            <p className="text-center text-gray-500 text-base">
                © {currentYear}. All rights reserved by Jucel Estribo
            </p>
        </div>
    );
}

export default FooterBottom
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaReact,FaVuejs,FaLaravel } from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';
const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Front-end Developer.", "Back-end Developer.", "Junior Full Stack Web Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
            <h4 className='text-lg font-normal'>WELCOME TO MY WORLD!</h4>
            <h1 className="text-6xl font-bold text-white">
                Hi, I'm {" "}
                <span className='text-designColor capitalize'>Jucel Estribo</span>
            </h1>
            <h2 className='text-4xl font-bold text-white'>
                a <span >{text}</span>
                <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor='#ff014f'
                />
            </h2>
            <p className='text-base font-bodyFont leading-6 tracking-wide'>
                a passionate and dedicated web developer, on a mission to shape the digital world with creativity and innovation. As a code enthusiast and design aficionado, I blend technical expertise with artistic vision to craft seamless, visually stunning web experiences.
            </p>
        </div>
        <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
            <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'>
                        <FaFacebook />
                    </span>
                    <span className='bannerIcon'>
                        <FaTwitter />
                    </span>
                    <span className='bannerIcon'>
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
            <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>BEST SKILL ON</h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'>
                        <FaReact />
                    </span>
                    <span className='bannerIcon'>
                        <FaVuejs />
                    </span>
                    <span className='bannerIcon'>
                        <SiTailwindcss />
                    </span>
                    <span className='bannerIcon'>
                        <FaLaravel />
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}
export default LeftBanner
"use client";

import React from "react";
import { PhoneCall } from "lucide-react";

const Banner = () => {
    return (
        <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
            {/* ✅ Background Video from public folder */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/banner-video.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-3xl px-4">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                    In-Home <br />
                    Manicure $25 / Pedicure $35 <br /> for Seniors
                </h1>

                <p className="text-gray-200 text-sm md:text-base mb-8">
                    No more waiting in line or struggling to get to the salon. Rest easy,
                    we’ll come to you! If you’re 55 or older, get your manicures and
                    pedicures done in the comfort of your own home!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-10 rounded-lg shadow-md transition">
                        Register Now
                    </button>
                    <button className="border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold py-3 px-10 rounded-lg shadow-md transition">
                        Sign In
                    </button>
                </div>

                {/* Phone Contact */}
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="flex items-center gap-2">
                        <PhoneCall size={22} className="text-white" />
                        <span className="text-xl font-semibold">(855) 622-6264</span>
                    </div>
                    <span className="text-sm text-gray-300">Call for Appointment</span>
                </div>
            </div>
        </section>
    );
};

export default Banner;

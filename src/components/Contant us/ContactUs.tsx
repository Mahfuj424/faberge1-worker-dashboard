"use client"

import { IMAGES } from "@/constant/image.index"
import Image from "next/image"
import type React from "react"

export default function ContactSection() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log("Form submitted")
    }

    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="md:flex">
                    {/* Image Section */}
                    <div>
                        <Image src={IMAGES.perfume.src} alt="Contact Us" width={600} height={400} className="w-full h-[570px] rounded-s-lg shadow-lg" />
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-[#FDE4DB] rounded-e-lg p-8 sm:p-10 lg:p-12 shadow-lg">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">Contact Us</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* First Name and Last Name Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <textarea
                                    placeholder="Message"
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center lg:justify-start">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-12 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

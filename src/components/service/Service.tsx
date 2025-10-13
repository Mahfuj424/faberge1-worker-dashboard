
import { ServiceCard } from "../ui/ServiceCard"
import Image from "next/image"
import { IMAGES } from "@/constant/image.index"
import SectionHeader from "../ui/SectionHeader"


export default function ServicesSection() {
    const manicureData = {
        title: "Manicure",
        image: IMAGES.serviceCardImage1.src,
        services: [
            {
                title: "Manicure",
                options: ["With Gel", "Without Gel"],
            },
            {
                title: "Nail Polish",
                note: "Customer provided",
                options: ["Clear", "Colored"],
            },
        ],
        serviceTypes: ["Water Method", "Waterless Method"],
    }

    const pedicureData = {
        title: "Pedicure",
        image: IMAGES.serviceCardImage2.src,
        services: [
            {
                title: "Pedicure",
                options: ["With Gel", "Without Gel"],
            },
            {
                title: "Nail Polish",
                note: "Customer provided",
                options: ["Clear", "Colored"],
            },
        ],
        serviceTypes: ["Water Method", "Waterless Method"],
    }

    return (
        <section className="relative min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none">
                <Image src={`${IMAGES.serviceBgImage.src}`} alt="Pink wave background" fill className="object-fill" priority />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                {/* Section Header */}
                <SectionHeader sectionName={"Our Service"} />
                {/* Service Cards Grid */}
                <div className="md:flex justify-around">
                    <ServiceCard {...manicureData} />
                    <ServiceCard {...pedicureData} />
                </div>
            </div>
        </section>
    )
}
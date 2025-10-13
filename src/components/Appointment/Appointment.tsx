import { Phone, Clock, MapPin } from "lucide-react"
import SectionHeader from "../ui/SectionHeader"
import Image from "next/image"
import { IMAGES } from "@/constant/image.index"

export default function AppointmentSection() {
    return (
        <div>
            {/* utilites */}
            <div>

                <div className="flex justify-around items-center md:flex-row flex-col md:gap-0 gap-6">
                    <div>
                        <div className="text-end mb-20">
                            <SectionHeader sectionName="Call or Book Appointment Online" />
                        </div>
                        <div className="grid grid-cols-3 text-center">
                            <div>
                                <div>
                                    <Image src={IMAGES.mobileIcon.src} alt="appointment" width={10} height={10} className="mx-auto h-20 w-20 object-cover rounded-lg mb-10" />
                                    <div>
                                        <h2 className="text-lg font-bold">Mobile</h2>
                                        <p>T : 1 (855) 622-6264</p>
                                        <p>staff@inhomebeautyservices.com</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image src={IMAGES.houricon.src} alt="appointment" width={10} height={10} className="mx-auto h-20 w-20 object-cover rounded-lg mb-10" />
                                <div>
                                    <h2 className="text-lg font-bold">HOURS</h2>
                                    <p>Mon-Sun 9am-7pm</p>
                                </div>
                            </div>
                            <div>
                                <Image src={IMAGES.locationIcon.src} alt="appointment" width={10} height={10} className="mx-auto h-20 w-20 object-cover rounded-lg mb-10" />
                                <div>
                                    <h2 className="text-lg font-bold">LOCATION</h2>
                                    <p>Main Office:
                                        <br /> 31 W. 34th St. Suite 7162
                                        <br /> New York, NY 10001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={IMAGES.supporterImage.src} alt="appointment" width={400} height={300} className="w-full h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

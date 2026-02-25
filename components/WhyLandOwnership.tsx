import { HugeiconsIcon } from "@hugeicons/react";
import { SecurityCheckIcon, ChartLineData01Icon, Tag01Icon, Agreement01Icon } from "@hugeicons/core-free-icons";

const reasons = [
    {
        title: "Verified & Secure",
        description: "Every plot of land we sell undergoes rigorous title verification to ensure 100% legal security for your investment.",
        icon: SecurityCheckIcon
    },
    {
        title: "High Growth Potential",
        description: "We strategically select land in emerging development corridors, ensuring rapid value appreciation and high ROI.",
        icon: ChartLineData01Icon
    },
    {
        title: "Flexible Payments",
        description: "We offer structured payment plans that make landownership accessible and affordable for everyone.",
        icon: Tag01Icon
    },
    {
        title: "Professional Guidance",
        description: "Our experts guide you through every step, from site inspection to final documentation and allocation.",
        icon: Agreement01Icon
    }
];

export default function WhyLandOwnership() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                            Why <span className="text-pace-green">Land Ownership</span> is Your Best Move
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            In Nigeria, land is more than just property—it&apos;s a legacy. At Pace Consult, we prioritize land because it offers the most stable long-term growth. We help you navigate the complexities of acquisition with transparency and trust.
                        </p>
                        <div className="grid gap-8 sm:grid-cols-2">
                            {reasons.map((reason) => (
                                <div key={reason.title}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pace-green/10 text-pace-green">
                                            <HugeiconsIcon icon={reason.icon} size={20} />
                                        </div>
                                        <h3 className="font-bold text-gray-900">{reason.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-pace-green/5">
                        <div className="absolute inset-0 flex items-center justify-center text-pace-green opacity-20 transform -rotate-12">
                            <HugeiconsIcon icon={SecurityCheckIcon} size={200} />
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white shadow-xl">
                            <p className="text-pace-green font-bold text-lg mb-1">Guaranteed Allocation</p>
                            <p className="text-sm text-gray-600">Peace of mind is standard with every purchase at Pace Consult.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

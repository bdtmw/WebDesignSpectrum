import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export const metadata = {
    title: "Page Not Found | Web Design Spectrum",
    description:
        "The page you're looking for could not be found. Return to Web Design Spectrum's homepage or explore our services.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center px-5 py-20">
            <div className="mx-auto w-full max-w-[850px] text-center">

                {/* Icon */}
                <div className="mb-7 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#A31621]/10">
                        <SearchX
                            size={38}
                            strokeWidth={1.8}
                            className="text-[#A31621]"
                        />
                    </div>
                </div>

                {/* 404 */}
                <p className="mb-2 font-[var(--font-poppins)] text-[90px] font-bold leading-none text-[#A31621] sm:text-[120px]">
                    404
                </p>

                {/* Heading */}
                <h1 className="mb-4 font-[var(--font-poppins)] text-3xl font-bold text-[rgb(20,18,50)] sm:text-4xl md:text-5xl">
                    Oops! Page Not Found
                </h1>

                {/* Description */}
                <p className="mx-auto mb-9 max-w-[600px] text-base leading-7 text-[#4B5563] sm:text-lg">
                    The page you are looking for may have been removed, renamed, or is
                    temporarily unavailable. Let's get you back on the right path.
                </p>

                {/* Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <Link
                        href="/"
                        className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-md bg-[#A31621] px-7 py-3.5 font-[var(--font-poppins)] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8C111B]"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>

                    <Link
                        href="/contact"
                        className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-md border border-[#A31621] px-7 py-3.5 font-[var(--font-poppins)] text-sm font-semibold text-[#A31621] transition-all duration-300 hover:bg-[#A31621] hover:text-white"
                    >
                        Contact Us
                        <ArrowLeft size={17} className="rotate-180" />
                    </Link>

                </div>

                {/* Helpful links */}
                <div className="mt-12 border-t border-[#E3E3E3] pt-7">
                    <p className="mb-4 text-sm font-medium text-[#4B5563]">
                        Or explore our services
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
                        <Link
                            href="/wyoming-web-design"
                            className="text-[#4B5563] transition-colors hover:text-[#A31621]"
                        >
                            Web Design
                        </Link>

                        <Link
                            href="/ecommerce-web-development"
                            className="text-[#4B5563] transition-colors hover:text-[#A31621]"
                        >
                            Ecommerce Development
                        </Link>

                        <Link
                            href="/seo-friendly-web-design"
                            className="text-[#4B5563] transition-colors hover:text-[#A31621]"
                        >
                            SEO
                        </Link>

                        <Link
                            href="/portfolio"
                            className="text-[#4B5563] transition-colors hover:text-[#A31621]"
                        >
                            Portfolio
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
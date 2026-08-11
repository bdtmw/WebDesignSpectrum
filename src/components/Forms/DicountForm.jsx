"use client";

import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { discountSchema } from "@/schema/Schema";

import axios from "axios";

const DicountForm = () => {
    const pathname = usePathname();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(discountSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            service: "",
            src: "",
        },
    });

    useEffect(() => {
        const pageName =
            pathname === "/"
                ? "Home"
                : pathname
                    .replace("/", "")
                    .split("/")
                    .pop()
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());

        setValue("src", pageName);
    }, [pathname, setValue]);

    const onSubmit = async (data) => {
        const loading = toast.loading("Submitting...");

        try {
            const response = await axios.post("/api/forms", {
                formType: "discount",
                ...data,
            });

            if (response.data.success) {
                toast.dismiss(loading);
                toast.success("Discount request submitted!");

                reset({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    src: data.src,
                });
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            toast.dismiss(loading);

            toast.error(
                error.response?.data?.message ||
                error.message ||
                "Something went wrong!"
            );
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                id="wds-pop-name"
                placeholder="Full name"
                aria-label="Full name"
                autoComplete="name"
                {...register("name")}
            />
            {errors.name && (
                <p className="wds-pop-err">{errors.name.message}</p>
            )}

            <input
                type="email"
                id="wds-pop-email"
                placeholder="Email address"
                aria-label="Email address"
                autoComplete="email"
                {...register("email")}
            />
            {errors.email && (
                <p className="wds-pop-err">{errors.email.message}</p>
            )}

            <input
                type="tel"
                id="wds-pop-phone"
                placeholder="Phone number"
                aria-label="Phone number"
                autoComplete="tel"
                {...register("phone")}
            />
            {errors.phone && (
                <p className="wds-pop-err">{errors.phone.message}</p>
            )}

            <select
                id="wds-pop-service"
                aria-label="Service interested in"
                defaultValue=""
                {...register("service")}
            >
                <option value="" disabled>
                    What do you need?
                </option>
                <option value="Web Design">Web Design</option>
                <option value="SEO Friendly Web Design">
                    SEO Friendly Web Design
                </option>
                <option value="Ecommerce Website">Ecommerce Website</option>
                <option value="CMS Website">CMS Website</option>
                <option value="Web Application">Web Application</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Logo & Branding">Logo & Branding</option>
                <option value="Social Media Marketing">
                    Social Media Marketing
                </option>
                <option value="Something else">Something else</option>
            </select>
            {errors.service && (
                <p className="wds-pop-err">{errors.service.message}</p>
            )}

            <input type="hidden" {...register("src")} />

            <button
                className="wds-pop-btn"
                id="wds-pop-submit"
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting
                    ? "Submitting..."
                    : "Get My 50% Discount"}
            </button>

            <p className="wds-pop-fine">
                By submitting you agree to be contacted about your quote. We
                never share your details. Reply STOP to opt out of texts.
            </p>
        </form>
    );
};

export default DicountForm;

"use client";

import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schema/Schema";
import axios from "axios";


const ContactForm = () => {
    const pathname = usePathname();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            budget: "",
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
            const response = await axios.post("/api/contact", {
                formType: "contact",
                ...data,
            });

            if (response.data.success) {
                toast.dismiss(loading);
                toast.success("Quote request submitted successfully!");

                reset({
                    fullName: "",
                    email: "",
                    phone: "",
                    budget: "",
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
        <form className="hero-form form" onSubmit={handleSubmit(onSubmit)}>
            <span className="hero-form-badge">50% OFF · Limited Time</span>

            <h3>Save 50% on Your First Website</h3>

            <p className="hero-form-lead">
                Tell us about your project and we'll send a fixed quote — no
                obligation.
            </p>

            <input
                type="text"
                placeholder="Full name"
                aria-label="Full name"
                autoComplete="name"
                {...register("fullName")}
            />
            {errors.fullName && (
                <small className="text-danger">{errors.fullName.message}</small>
            )}

            <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                autoComplete="email"
                {...register("email")}
            />
            {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
            )}

            <input
                type="tel"
                placeholder="Phone number"
                aria-label="Phone number"
                autoComplete="tel"
                {...register("phone")}
            />
            {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
            )}

            <select
                className="wds-budget"
                defaultValue=""
                aria-label="Budget range"
                {...register("budget")}
            >
                <option value="" disabled>
                    Estimated budget
                </option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
                <option value="Not sure yet">Not sure yet</option>
            </select>
            {errors.budget && (
                <small className="text-danger">{errors.budget.message}</small>
            )}

            <input
                type="hidden"
                className="wds-src"
                {...register("src")}
            />

            <button
                className="btn btn-accent"
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : "Get My Free Quote"}
            </button>

            <p className="hero-form-fine">
                We'll never share your details. No spam, ever.
            </p>
        </form>
    );
};

export default ContactForm;

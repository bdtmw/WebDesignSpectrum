"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { journeySchema } from "@/schema/Schema";
import axios from "axios";

const JourneyForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(journeySchema),
        defaultValues: {
            customer_name: "",
            customer_email: "",
            customer_phone: "",
            mesg_checked: false,
        },
    });

    const onSubmit = async (data) => {
        const loading = toast.loading("Sending...");

        try {
            const response = await axios.post("/api/contact", {
                formType: "journey",
                ...data,
            });

            console.log(response)

            if (response.data.success) {

                console.log("🔥 GA4 form_submit firing", {
    form_name: "contact_form",
    page_name: data.src,
});

                if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
        form_name: "journey_form",
        page_name: data.src,
    });
}
                toast.dismiss(loading);
                toast.success("Form submitted successfully!");

                reset({
                    customer_name: "",
                    customer_email: "",
                    customer_phone: "",
                    mesg_checked: false,
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
        <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }} className="leadForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input
                    style={{ marginBottom: 0 }}
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    {...register("customer_name")}
                />
                {errors.customer_name && (
                    <small className="text-danger">
                        {errors.customer_name.message}
                    </small>
                )}
            </div>

            <div className="form-group">
                <input
                    type="email"
                    style={{ marginBottom: 0 }}
                    className="form-control"
                    placeholder="Email Address"
                    {...register("customer_email")}
                />
                {errors.customer_email && (
                    <small className="text-danger">
                        {errors.customer_email.message}
                    </small>
                )}
            </div>

            <div className="form-group">
                <input
                    type="text"
                    style={{ marginBottom: 0 }}
                    className="form-control"
                    maxLength={10}
                    placeholder="Phone Number"
                    {...register("customer_phone")}
                />
                {errors.customer_phone && (
                    <small className="text-danger">
                        {errors.customer_phone.message}
                    </small>
                )}
            </div>

            <div className="form-group">
                <label>
                    <input
                        type="checkbox"
                        style={{ height: "unset", marginBottom: 0 }}
                        {...register("mesg_checked")}
                    />
                    {" "}
                    By entering your phone number, you agree to receive text messages to
                    our <Link href="/terms">terms of use</Link> and{" "}
                    <Link href="/privacy">privacy policy</Link>
                </label>

                {errors.mesg_checked && (
                    <small className="text-danger d-block">
                        {errors.mesg_checked.message}
                    </small>
                )}
            </div>

            <div className="form-group">
                <button
                    name="modal_form"
                    className="home-btn left-right-mov"
                    type="submit"
                    id="signupBtn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Now"}
                </button>
            </div>
        </form>
    );
};

export default JourneyForm;

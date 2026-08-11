"use client";

import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { packageSchema } from "@/schema/Schema";



const PackageForm = ({ packageTitle }) => {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(packageSchema),
        defaultValues: {
            email: "",
            phone: "",
            packageName: packageTitle,
        },
    });



    const onSubmit = async (data) => {
        const loading = toast.loading("Submitting...");

        try {
            const response = await axios.post("/api/forms", {
                formType: "package",
                ...data,
            });

            if (response.data.success) {
                toast.dismiss(loading);
                toast.success("Package request submitted!");

                reset({
                    name: "",
                    email: "",
                    phone: "",
                    packageName: packageTitle,
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
            <div id="wds-pop-form">

                <input
                    type="text"
                    id="wds-pop-fullname"
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

                <input
                    type="text"
                    id="wds-pop-name"
                    value={packageTitle}
                    disabled
                />

                <input
                    type="hidden"
                    {...register("packageName")}
                />


                <button
                    className="wds-pop-btn"
                    id="wds-pop-submit"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                <p className="wds-pop-fine">
                    By submitting you agree to be contacted about your quote. We
                    never share your details. Reply STOP to opt out of texts.
                </p>
            </div>
        </form>
    );
};

export default PackageForm;
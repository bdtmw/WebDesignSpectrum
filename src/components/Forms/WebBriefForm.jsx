"use client";

import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { webBriefSchema } from "@/schema/Schema";
import axios from "axios";

const defaultValues = {
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websitePurpose: "",
    targetAudience: "",
    competitors: "",
    pageTitles: "",
    designPreferences: "",
    referenceLink: "",
    overallFeeling: "",
    goLive: "",
    comments: "",
    attachment: undefined,
    hasDomain: "",
    needsHosting: "",
    mobileApp: "",
};

const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result).split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

const Field = ({ label, required, help, error, children }) => (
    <div className="wb-field">
        {label && (
            <label className="wb-label">
                {label}
                {required && <span className="wb-req">(Required)</span>}
            </label>
        )}
        {children}
        {help && <span className="wb-help">{help}</span>}
        {error && <small className="text-danger wb-error">{error.message}</small>}
    </div>
);

const YesNo = ({ name, label, register, error }) => (
    <fieldset className="wb-field">
        <legend className="wb-label">
            {label}
            <span className="wb-req">(Required)</span>
        </legend>
        <div className="wb-choices">
            {["Yes", "No"].map((value) => (
                <label key={value} className="wb-choice">
                    <input type="radio" value={value} {...register(name)} />
                    <span>{value}</span>
                </label>
            ))}
        </div>
        {error && <small className="text-danger wb-error">{error.message}</small>}
    </fieldset>
);

const WebBriefForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(webBriefSchema),
        defaultValues,
    });

    const designPreferences = watch("designPreferences");
    const selectedFile = watch("attachment")?.[0];

    const onSubmit = async (data, event) => {
        const loading = toast.loading("Submitting your brief...");

        try {
            const { attachment, ...fields } = data;
            const file = attachment?.[0];

            if (fields.designPreferences === "No") {
                fields.referenceLink = "";
                fields.overallFeeling = "";
            }

            const response = await axios.post("/api/contact", {
                formType: "webBrief",
                ...fields,
                attachment: file
                    ? {
                        filename: file.name,
                        mimetype: file.type || "application/octet-stream",
                        fileblob: await fileToBase64(file),
                    }
                    : null,
            });

            if (response.data.success) {
                if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "form_submit", {
                        form_name: "web_brief_form",
                        page_name: window.location.pathname,
                    });
                }

                toast.dismiss(loading);
                toast.success("Thank you! Your website brief has been submitted.");

                reset(defaultValues);
                event?.target?.reset();
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
        <form className="wb-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* ===== Website Design Questionnaire ===== */}
            <div className="wb-section-head">
                <h3>
                    Website Design <span>Questionnaire</span>
                </h3>
                <p>
                    <strong>Place Your Order with Confidence:</strong> Your security and
                    confidentiality is of the utmost importance at Web Design Spectrum.
                    Any and all information provided to us is treated as &ldquo;Confidential
                    Information&rdquo; and is only used for understanding and executing your
                    orders in the most profound manner. We respect your creativity, privacy
                    and intellectual property right and shall abide by all rules and
                    regulations defined by USPTO and US Copyright Office.
                </p>
                <p>
                    <strong>Note:</strong> It is our top priority to create your ideal
                    website and provide you with the best in class service. It is necessary
                    for us to know your business the best we can to do so. Following are
                    some questions that will help us do our job better. We request you take
                    some time and provide us with the needed information.
                </p>
            </div>

            <div className="wb-grid">
                <Field label="Name" required help="First Name" error={errors.name}>
                    <input type="text" autoComplete="name" placeholder="Full name" {...register("name")} />
                </Field>

                <Field label="Email" required error={errors.email}>
                    <input type="email" autoComplete="email" placeholder="Email address" {...register("email")} />
                </Field>

                <Field label="Contact Number" required error={errors.phone}>
                    <input type="tel" autoComplete="tel" placeholder="(999) 999-9999" {...register("phone")} />
                </Field>

                <Field
                    label="Exact name of your business/organization?"
                    required
                    help="(What type of products or services does your company supply? etc...)"
                    error={errors.businessName}
                >
                    <input type="text" autoComplete="organization" {...register("businessName")} />
                </Field>
            </div>

            <Field
                label="Kindly state the purpose of your website:"
                required
                help="(Is it a selling/informative website or a personal blog? etc.)"
                error={errors.websitePurpose}
            >
                <input type="text" {...register("websitePurpose")} />
            </Field>

            <Field label="State the target audience of your website" error={errors.targetAudience}>
                <textarea rows={4} {...register("targetAudience")} />
            </Field>

            <Field label="Please list some of your competitors and their websites (if any)" error={errors.competitors}>
                <textarea rows={4} {...register("competitors")} />
            </Field>

            <Field
                label="As per the navigation of your website, kindly state the title of your WebPages"
                help="(E.g.: Home, About Us, Shop, Contact us, etc.)"
                error={errors.pageTitles}
            >
                <textarea rows={4} {...register("pageTitles")} />
            </Field>

            <YesNo
                name="designPreferences"
                label="Do you have any specific design, preferences?"
                register={register}
                error={errors.designPreferences}
            />

            {designPreferences === "Yes" && (
                <div className="wb-conditional">
                    <Field label="Reference Link" required help="www.example.com" error={errors.referenceLink}>
                        <input type="text" placeholder="https://" {...register("referenceLink")} />
                    </Field>

                    <Field
                        label="What type of overall feeling would you like to project with your new Website Domain?"
                        help="(Corporate, fun, high-tech, etc...) Leave this field blank if you would like us to make this determination."
                        error={errors.overallFeeling}
                    >
                        <textarea rows={4} {...register("overallFeeling")} />
                    </Field>
                </div>
            )}

            <Field label="When would you like your website to go live?" error={errors.goLive}>
                <input type="text" placeholder="Website to go live?..." {...register("goLive")} />
            </Field>

            <Field label="Do you have any additional comments?" error={errors.comments}>
                <textarea rows={4} {...register("comments")} />
            </Field>

            <Field
                label="Do you have any images, sketches or documents that might be helpful?"
                help="Max. file size: 2 MB."
                error={errors.attachment}
            >
                <label className="wb-file">
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.webp"
                        {...register("attachment")}
                    />
                    <span className="wb-file-btn">Choose File</span>
                    <span className="wb-file-name">
                        {selectedFile ? selectedFile.name : "No file chosen"}
                    </span>
                </label>
            </Field>

            {/* ===== Domain and Web Hosting Details ===== */}
            <div className="wb-section-head wb-section-head--spaced">
                <h3>
                    Domain and <span>Web Server Details</span>
                </h3>
            </div>

            <YesNo
                name="hasDomain"
                label="Do you have a Domain Name?"
                register={register}
                error={errors.hasDomain}
            />

            <YesNo
                name="needsHosting"
                label="Do you want us to provide server hosting for your website?"
                register={register}
                error={errors.needsHosting}
            />

            <YesNo
                name="mobileApp"
                label="Would you like to have mobile application of this business in future?"
                register={register}
                error={errors.mobileApp}
            />

            <div className="wb-actions">
                <button className="btn btn-accent wb-submit" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    );
};

export default WebBriefForm;

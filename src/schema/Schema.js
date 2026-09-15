import { z } from "zod";

export const journeySchema = z.object({
  customer_name: z.string().min(1, "Name is required"),
  customer_email: z.string().email("Please enter a valid email"),
  customer_phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),
  mesg_checked: z.boolean().refine((val) => val, {
    message: "Please accept the terms & privacy policy",
  }),
});


export const contactSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    budget: z.string().min(1, "Please select a budget"),
    src: z.string(),
});


export const discountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  src: z.string(),
});


export const BRIEF_MAX_FILE_SIZE = 2 * 1024 * 1024;

const yesNo = z.enum(["Yes", "No"], { message: "Please select Yes or No" });

export const webBriefSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().email("Please enter a valid email"),
    phone: z.string().trim().min(10, "Please enter a valid phone number"),
    businessName: z.string().trim().min(1, "Business name is required"),
    websitePurpose: z.string().trim().min(1, "Please state the purpose of your website"),
    targetAudience: z.string().optional(),
    competitors: z.string().optional(),
    pageTitles: z.string().optional(),
    designPreferences: yesNo,
    referenceLink: z.string().optional(),
    overallFeeling: z.string().optional(),
    goLive: z.string().optional(),
    comments: z.string().optional(),
    attachment: z
      .any()
      .refine(
        (files) => !files?.length || files[0].size <= BRIEF_MAX_FILE_SIZE,
        "Max. file size is 2 MB"
      ),
    hasDomain: yesNo,
    needsHosting: yesNo,
    mobileApp: yesNo,
  })
  .superRefine((data, ctx) => {
    if (data.designPreferences === "Yes" && !data.referenceLink?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["referenceLink"],
        message: "Please add a reference link",
      });
    }
  });


export const packageSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  packageName: z.string(),
});
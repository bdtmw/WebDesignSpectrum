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


export const packageSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  packageName: z.string(),
});
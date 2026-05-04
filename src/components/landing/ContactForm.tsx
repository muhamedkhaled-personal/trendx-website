"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/shared/Button";

interface ContactFormProps {
  label: string;
  title: string;
  subtitle: string;
  fields: {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    role: string;
    audience: string;
    goal: string;
  };
  submitText: string;
  sentText: string;
  trustNote: string;
}

export default function ContactForm({
  label,
  title,
  subtitle,
  fields,
  submitText,
  sentText,
  trustNote,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[15px] focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition";

  return (
    <section id="contact">
      <div className="bg-white rounded-3xl mx-6 p-16 max-md:p-6 shadow-form relative overflow-hidden form-gradient-blob">
        {/* Header */}
        <div className="text-center mb-10 max-w-[620px] mx-auto">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-white text-green border border-green-light/50 mb-5">
            {label}
          </span>
          <h2 className="text-section-title font-bold text-navy">{title}</h2>
          <p className="text-[17px] text-gray-500 leading-relaxed mt-4">
            {subtitle}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 max-md:grid-cols-1 gap-5 max-w-[720px] mx-auto"
        >
          {/* Full Name */}
          <input
            type="text"
            placeholder={fields.fullName}
            required
            className={inputClasses}
          />

          {/* Email */}
          <input
            type="email"
            placeholder={fields.email}
            required
            className={inputClasses}
          />

          {/* Phone — with country prefix */}
          <div className="flex gap-2">
            <div className="bg-white border border-gray-200 rounded-xl px-3 text-[14px] text-gray-500 flex items-center whitespace-nowrap flex-shrink-0">
              <span>&#x1F1F8;&#x1F1E6; 966+</span>
            </div>
            <input
              type="tel"
              placeholder={fields.phone}
              className={inputClasses}
            />
          </div>

          {/* Company */}
          <input
            type="text"
            placeholder={fields.company}
            className={inputClasses}
          />

          {/* Role */}
          <input
            type="text"
            placeholder={fields.role}
            className={inputClasses}
          />

          {/* Audience size */}
          <input
            type="text"
            placeholder={fields.audience}
            className={inputClasses}
          />

          {/* Goal / Message */}
          <textarea
            placeholder={fields.goal}
            className={`${inputClasses} min-h-[110px] resize-y col-span-full`}
          />

          {/* Submit */}
          <div className="col-span-full">
            <Button
              type="submit"
              variant="green"
              className="w-full"
              disabled={submitted}
            >
              {submitted ? sentText : submitText}
            </Button>
          </div>

          {/* Trust note */}
          <p className="col-span-full text-center text-[13px] text-gray-400">
            {trustNote}
          </p>
        </form>
      </div>
    </section>
  );
}

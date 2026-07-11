"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function EstimateForm() {
  const [state, handleSubmit] = useForm("xeebyybz");

  if (state.succeeded) {
    return (
      <section id="estimate" className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-black text-yellow-400">
            Thanks!
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We&apos;ve received your request and will be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate" className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-5xl font-black text-yellow-400">
            Get a Free Estimate
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Tell us what&apos;s going on and we&apos;ll get back to you fast.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="mt-2 w-full rounded-lg border border-yellow-500/30 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-400" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-300">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              className="mt-2 w-full rounded-lg border border-yellow-500/30 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1 text-sm text-red-400" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-lg border border-yellow-500/30 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-400" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-300">
              What do you need help with?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-lg border border-yellow-500/30 bg-black px-4 py-3 text-white outline-none focus:border-yellow-500"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-400" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-xl bg-yellow-500 px-10 py-4 text-lg font-bold text-black transition hover:scale-105 disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Request Estimate"}
          </button>
        </form>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

import {
  FiArrowLeft,
  FiCheckCircle,
  FiDatabase,
  FiEye,
  FiFileText,
  FiLock,
  FiMail,
  FiShield,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-5 py-12">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Shop.co
              </p>

              <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl">
                Terms & Conditions
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
                Please read these terms carefully before using our website,
                purchasing products, or using any of our services.
              </p>
            </div>

            <Link
              href="/"
              className="hidden items-center gap-2 rounded-full border border-black px-5 py-3 text-sm font-medium transition hover:bg-black hover:text-white md:flex"
            >
              <FiArrowLeft />
              Back Home
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto max-w-5xl px-5 py-12">
        {/* Intro */}
        <div className="mb-10 rounded-3xl bg-black p-7 text-white md:p-10">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
            <FiFileText size={22} />
          </div>

          <h2 className="text-2xl font-bold md:text-3xl">Welcome to Shop.co</h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
            These Terms & Conditions govern your use of the Shop.co website and
            your relationship with us when purchasing products from our online
            store. By accessing or using our website, you agree to these terms.
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 01 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                01
              </div>

              <h2 className="text-xl font-bold">Use of Our Website</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              You agree to use Shop.co only for lawful purposes. You must not
              use our website in a way that could damage, disable, overburden,
              or interfere with the website or its services.
            </p>
          </div>

          {/* 02 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                02
              </div>

              <h2 className="text-xl font-bold">Products & Information</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              We make reasonable efforts to ensure that product descriptions,
              images, prices, and other information are accurate. However,
              colors, dimensions, availability, and other details may vary.
            </p>
          </div>

          {/* 03 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                03
              </div>

              <h2 className="text-xl font-bold">Orders & Payments</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              When you place an order, you agree to provide accurate and
              complete information. We reserve the right to refuse or cancel an
              order when necessary, including cases involving pricing errors,
              product availability, or suspected fraudulent activity.
            </p>
          </div>

          {/* 04 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                04
              </div>

              <h2 className="text-xl font-bold">Pricing</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              All prices displayed on our website are subject to change without
              prior notice. Promotional prices may have additional conditions
              and may only be available for a limited period.
            </p>
          </div>

          {/* 05 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                05
              </div>

              <h2 className="text-xl font-bold">Shipping & Delivery</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              Delivery times may vary depending on your location, shipping
              method, product availability, and circumstances outside our
              control. Estimated delivery dates are provided as guidance and are
              not guaranteed unless specifically stated.
            </p>
          </div>

          {/* 06 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                06
              </div>

              <h2 className="text-xl font-bold">Returns & Refunds</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              Returns and refunds are subject to our return policy. Products may
              need to meet specific conditions before a return or refund can be
              approved.
            </p>
          </div>

          {/* 07 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                07
              </div>

              <h2 className="text-xl font-bold">Account Responsibility</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              If you create an account, you are responsible for maintaining the
              confidentiality of your login credentials and for activities
              performed through your account.
            </p>
          </div>

          {/* 08 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                08
              </div>

              <h2 className="text-xl font-bold">Intellectual Property</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              The Shop.co website, including its branding, logos, graphics,
              text, design, and other content, is protected by applicable
              intellectual property laws. You may not reproduce or distribute
              our content without permission.
            </p>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gray-100 p-7">
            <FiShield size={24} className="mb-5" />

            <h2 className="text-xl font-bold">Privacy & Security</h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              We take reasonable measures to protect information associated with
              your account and purchases. Please review our Privacy Policy for
              additional information about how information is collected and
              used.
            </p>

            <Link
              href="/privacy"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            >
              Read Privacy Policy
            </Link>
          </div>

          <div className="rounded-3xl bg-gray-100 p-7">
            <FiShoppingBag size={26} className="mb-5" />

            <h2 className="text-xl font-bold">Changes to These Terms</h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Shop.co may update these Terms & Conditions from time to time.
              Updated terms will become effective when published on this page.
              We recommend checking this page periodically.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-6 rounded-3xl border border-black p-7 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <FiMail size={21} />
              </div>

              <h2 className="text-2xl font-bold">Questions?</h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                If you have any questions about these Terms & Conditions, please
                contact our support team.
              </p>
            </div>

            <a
              href="mailto:support@shop.co"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              <FiMail />
              Contact Support
            </a>
          </div>
        </div>

        {/* Last Updated */}
        <p className="mt-8 text-center text-xs text-gray-500">
          Last updated: September 30, 2026
        </p>

        {/* Mobile Home Button */}
        <div className="mt-6 flex justify-center md:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-sm font-medium"
          >
            <FiArrowLeft />
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}

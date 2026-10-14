"use client";

import Link from "next/link";
import { DiDatabase } from "react-icons/di";
import { FaLongArrowAltLeft, FaShieldAlt } from "react-icons/fa";
import {
  FaArrowLeft,
  FaCookieBite,
  FaEye,
  FaLock,
  FaUser,
} from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { IoMail } from "react-icons/io5";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-5 py-12">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Shop.co
              </p>

              <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl">
                Privacy Policy
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
                Your privacy matters to us. This Privacy Policy explains how
                Shop.co collects, uses, protects, and handles your information.
              </p>
            </div>

            <Link
              href="/"
              className="hidden items-center gap-2 rounded-full border border-black px-5 py-3 text-sm font-medium transition hover:bg-black hover:text-white md:flex"
            >
              <FaLongArrowAltLeft />
              Back Home
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto max-w-5xl px-5 py-12">
        {/* Introduction */}
        <div className="mb-8 rounded-3xl bg-black p-7 text-white md:p-10">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
            <FaShieldAlt size={23} />
          </div>

          <h2 className="text-2xl font-bold md:text-3xl">
            Your privacy is important to us
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
            Shop.co respects your privacy and is committed to protecting the
            personal information you provide when using our website. This policy
            describes what information we may collect, why we collect it, and
            how we use and protect it.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-gray-200 p-6">
            <DiDatabase size={24} className="mb-4" />
            <h3 className="font-bold">Data Collection</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              We collect information necessary to provide our services.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-6">
            <FaLock size={24} className="mb-4" />
            <h3 className="font-bold">Data Security</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              We use reasonable measures to protect your information.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-6">
            <FaEye size={24} className="mb-4" />
            <h3 className="font-bold">Transparency</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              We explain how information may be used on our website.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-6">
            <FaUser size={24} className="mb-4" />
            <h3 className="font-bold">Your Rights</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              You may have rights regarding your personal information.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {/* 01 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="01" title="Information We Collect" />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              When you use Shop.co, we may collect information that you
              voluntarily provide and information generated automatically when
              you interact with our website.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <ListItem>Email address</ListItem>
              <ListItem>Name and contact information</ListItem>
              <ListItem>Shipping and billing information</ListItem>
              <ListItem>Account login information</ListItem>
              <ListItem>Order and purchase information</ListItem>
              <ListItem>
                Information you provide when contacting support
              </ListItem>
            </ul>
          </section>

          {/* 02 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader
              number="02"
              title="Automatically Collected Information"
            />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              When you visit our website, certain technical information may
              automatically be collected. This can include information about
              your browser, device, operating system, pages visited, and
              interactions with our website.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              This information may help us understand website performance,
              improve user experience, and identify technical problems.
            </p>
          </section>

          {/* 03 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="03" title="How We Use Your Information" />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              We may use collected information for purposes including:
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <CheckItem>Processing and managing orders</CheckItem>
              <CheckItem>Providing customer support</CheckItem>
              <CheckItem>Managing customer accounts</CheckItem>
              <CheckItem>Sending order-related communications</CheckItem>
              <CheckItem>Improving our products and website</CheckItem>
              <CheckItem>Preventing fraud and unauthorized activity</CheckItem>
              <CheckItem>Maintaining website security</CheckItem>
              <CheckItem>Complying with legal obligations</CheckItem>
            </div>
          </section>

          {/* 04 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="04" title="Payment Information" />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Payments may be processed through third-party payment providers.
              Depending on the payment method used, your payment information may
              be handled directly by the relevant payment processor.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              We recommend reviewing the privacy practices of the payment
              provider you use for additional information about how payment data
              is handled.
            </p>
          </section>

          {/* 05 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="05" title="Cookies & Similar Technologies" />

            <div className="mt-5 flex gap-4 rounded-2xl bg-gray-100 p-5">
              <FaCookieBite className="mt-1 shrink-0" size={24} />

              <p className="text-sm leading-7 text-gray-600">
                Shop.co may use cookies and similar technologies to remember
                preferences, maintain functionality, understand website traffic,
                and improve your browsing experience.
              </p>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              You may be able to control or disable cookies through your browser
              settings. Disabling certain cookies may affect some website
              functionality.
            </p>
          </section>

          {/* 06 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="06" title="How We Share Information" />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              We do not sell personal information as part of our ordinary
              ecommerce operations. Information may be shared with trusted
              service providers when necessary to operate our business.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <ListItem>Payment processing providers</ListItem>
              <ListItem>Shipping and delivery providers</ListItem>
              <ListItem>Website hosting and technology providers</ListItem>
              <ListItem>Analytics and security providers</ListItem>
              <ListItem>Customer support services</ListItem>
            </ul>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              We may also disclose information when required by law or when
              reasonably necessary to protect our rights, users, or business.
            </p>
          </section>

          {/* 07 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="07" title="Data Security" />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              We take reasonable administrative, technical, and organizational
              measures to protect personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>

            <div className="mt-6 rounded-2xl bg-black p-6 text-white">
              <div className="flex gap-4">
                <FaLock className="mt-1 shrink-0" size={24} />

                <div>
                  <h3 className="font-bold">Security reminder</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    No method of transmission or electronic storage can be
                    guaranteed to be completely secure. Please use strong,
                    unique passwords and keep your account credentials private.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 08 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="08" title="Your Privacy Choices" />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Depending on your location and applicable law, you may have
              certain rights relating to your personal information.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <CheckItem>Request access to your information</CheckItem>
              <CheckItem>
                Request correction of inaccurate information
              </CheckItem>
              <CheckItem>Request deletion where applicable</CheckItem>
              <CheckItem>Manage certain communication preferences</CheckItem>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              To make a privacy-related request, contact us using the contact
              information provided below.
            </p>
          </section>

          {/* 09 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="09" title="Third-Party Links" />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Our website may contain links to third-party websites or services.
              Shop.co is not responsible for the privacy practices, security, or
              content of third-party websites. We recommend reviewing their
              privacy policies before providing personal information.
            </p>
          </section>

          {/* 10 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="10" title="Children's Privacy" />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Shop.co is not intended to knowingly collect personal information
              from children where prohibited by applicable law. If you believe
              that a child has provided personal information to us improperly,
              please contact us so that we can review the situation.
            </p>
          </section>

          {/* 11 */}
          <section className="rounded-3xl border border-gray-200 p-7 md:p-8">
            <SectionHeader number="11" title="Changes to This Privacy Policy" />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              We may update this Privacy Policy from time to time to reflect
              changes to our services, technology, legal requirements, or
              business practices.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              When changes are made, the updated version will be published on
              this page with a revised effective date.
            </p>
          </section>
        </div>

        {/* Contact */}
        <section className="mt-6 rounded-3xl bg-gray-100 p-7 md:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <IoMail size={22} />
              </div>

              <h2 className="text-2xl font-bold">
                Questions about your privacy?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
                If you have questions about this Privacy Policy or want to make
                a privacy-related request, please contact our support team.
              </p>
            </div>

            <a
              href="mailto:privacy@shop.co"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              <IoMdMail />
              Contact Us
            </a>
          </div>
        </section>

        {/* Footer Info */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 Shop.co. All rights reserved.</p>

          <p>Last updated: September 30, 2026</p>
        </div>

        {/* Mobile Back */}
        <div className="mt-6 flex justify-center md:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-sm font-medium"
          >
            <FaArrowLeft />
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}

/* -----------------------------
   Reusable Components
----------------------------- */

function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
        {number}
      </div>

      <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
    </div>
  );
}

function ListItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <FiCheckCircle className="mt-0.5 shrink-0 text-black" size={17} />
      <span>{children}</span>
    </li>
  );
}

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-gray-100 p-4">
      <FiCheckCircle className="mt-0.5 shrink-0" size={18} />
      <span className="text-sm leading-6 text-gray-700">{children}</span>
    </div>
  );
}

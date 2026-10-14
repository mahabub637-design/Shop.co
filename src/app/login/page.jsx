"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState("");

  // =========================
  // Email / Password Login
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const rememberMe = e.target.rememberMe.checked;

    // Basic validation
    if (!email || !password) {
      setError("Please enter your email and password.");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        rememberMe,
      });

      if (error) {
        setError(error.message || "Invalid email or password.");
        setLoading(false);
        return;
      }

      if (data?.user) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Google / GitHub Login
  // =========================
  const handleSocialLogin = async (provider) => {
    setError("");
    setSocialLoading(provider);

    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });
    } catch (err) {
      console.error(err);
      setError(`Unable to sign in with ${provider}. Please try again.`);
      setSocialLoading("");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#fbfbfb] text-black font-syne flex items-center justify-center p-4 selection:bg-black selection:text-white">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="w-full rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-xl shadow-zinc-950/[0.04] sm:p-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Welcome To Shop
            </h1>

            <p className="mt-2 text-sm text-black">
              Enter your details to Sign In
            </p>
          </div>

          {/* =========================
              Social Login
          ========================= */}
          <div className="grid grid-cols-2 gap-3">
            {/* Google */}
            <button
              type="button"
              disabled={loading || socialLoading !== ""}
              onClick={() => handleSocialLogin("google")}
              className="group flex items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaGoogle className="h-4 w-4 text-black transition-colors group-hover:text-white" />

              <span>
                {socialLoading === "google" ? "Connecting..." : "Google"}
              </span>
            </button>

            {/* GitHub */}
            <button
              type="button"
              disabled={loading || socialLoading !== ""}
              onClick={() => handleSocialLogin("github")}
              className="group flex items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaGithub className="h-4 w-4 text-black transition-colors group-hover:text-white" />

              <span>
                {socialLoading === "github" ? "Connecting..." : "GitHub"}
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6 flex items-center justify-center">
            <div className="w-full border-t border-zinc-200" />

            <span className="absolute bg-white px-3 text-xs font-medium uppercase tracking-wider text-black">
              or continue with email
            </span>
          </div>

          {/* =========================
              Login Form
          ========================= */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold tracking-wide text-black"
              >
                Email Address
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-black">
                  <FiMail className="h-4 w-4" />
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 pl-10 pr-4 text-sm text-black placeholder:text-zinc-400 transition-all duration-200 hover:bg-white focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold tracking-wide text-black"
                >
                  Password
                </label>

                {/* Forgot Password */}
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-black underline-offset-4 transition-colors hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-black">
                  <FiLock className="h-4 w-4" />
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 pl-10 pr-4 text-sm text-black placeholder:text-black/70 transition-all duration-200 hover:bg-white focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center pt-1">
              <label className="flex cursor-pointer items-center gap-2.5">
                <input
                  type="checkbox"
                  name="rememberMe"
                  disabled={loading}
                  className="h-4 w-4 rounded border-zinc-300 accent-black focus:ring-black/20"
                />

                <span className="select-none text-xs text-black">
                  Remember me
                </span>
              </label>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || socialLoading !== ""}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-md shadow-black/10 transition-all duration-200 hover:bg-white hover:text-black active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{loading ? "Signing in..." : "Sign in"}</span>

              {!loading && (
                <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              )}
            </button>
          </form>

          {/* =========================
              Register
          ========================= */}
          <div className="mt-8 text-center text-xs text-black">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-black underline underline-offset-4 transition-colors hover:text-white hover:bg-black"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* =========================
            Terms & Privacy
        ========================= */}
        <p className="mt-6 text-center text-xs text-black">
          By continuing, you agree to our{" "}
          <Link
            href="/terms"
            className="underline transition-colors hover:text-zinc-600"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline transition-colors hover:text-zinc-600"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

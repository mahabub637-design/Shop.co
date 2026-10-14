"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

export default function signUpPage() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name")?.toString().trim();
      const email = formData.get("email")?.toString().trim();
      const password = formData.get("password")?.toString();
      const confirmPassword = formData.get("confirmPassword")?.toString();

      // Basic validation
      if (!name || !email || !password || !confirmPassword) {
        setError("Please fill in all fields.");
        return;
      }

      if (password.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      // Better Auth signup
      const { data, error: signUpError } = await authClient.signUp.email({
        name,
        email,
        password,
      });

      if (signUpError) {
        setError(signUpError.message || "Unable to create your account.");
        return;
      }

      if (data?.user) {
        router.push("/");
        router.refresh();
      } else {
        setError("Account creation failed. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);

      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Google / GitHub signup
  const handleSocialSignUp = async (provider) => {
    setError("");
    setLoading(true);

    try {
      const { error: socialError } = await authClient.signUp.social({
        provider,
        callbackURL: "/",
      });

      if (socialError) {
        setError(socialError.message || `Unable to continue with ${provider}.`);
        setLoading(false);
      }
    } catch (err) {
      console.error(`${provider} login error:`, err);

      setError(err?.message || `Unable to continue with ${provider}.`);

      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#fbfbfb] text-black font-syne flex items-center justify-center p-4 selection:bg-black selection:text-white">
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="w-full rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-xl shadow-zinc-950/[0.04] sm:p-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Welcome To SHOP.CO
            </h1>

            <p className="mt-2 text-sm text-black">
              Register to create your account and get started
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            {/* Google */}
            <button
              type="button"
              disabled={loading}
              onClick={() => handleSocialSignUp("google")}
              className="group flex items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaGoogle className="h-4 w-4 transition-colors group-hover:text-white" />
              <span>Google</span>
            </button>

            {/* GitHub */}
            <button
              type="button"
              disabled={loading}
              onClick={() => handleSocialSignUp("github")}
              className="group flex items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaGithub className="h-4 w-4 transition-colors group-hover:text-white" />
              <span>GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6 flex items-center justify-center">
            <div className="w-full border-t border-zinc-200" />

            <span className="absolute bg-white px-3 text-xs font-medium uppercase tracking-wider text-black">
              or continue with email
            </span>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-semibold tracking-wide text-black"
              >
                Name
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-black">
                  <RxAvatar className="h-4 w-4" />
                </div>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  autoComplete="name"
                  disabled={loading}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 pl-10 pr-4 text-sm text-black placeholder:text-zinc-400 transition-all duration-200 hover:bg-white focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            </div>

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
                  placeholder="name@example.com"
                  autoComplete="email"
                  disabled={loading}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 pl-10 pr-4 text-sm text-black placeholder:text-zinc-400 transition-all duration-200 hover:bg-white focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="text-xs font-semibold tracking-wide text-black"
              >
                Password
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-black">
                  <FiLock className="h-4 w-4" />
                </div>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  disabled={loading}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 pl-10 pr-11 text-sm text-black placeholder:text-zinc-400 transition-all duration-200 hover:bg-white focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-black"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FiEyeOff className="h-4 w-4" />
                  ) : (
                    <FiEye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label
                htmlFor="confirmPassword"
                className="text-xs font-semibold tracking-wide text-black"
              >
                Confirm Password
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-black">
                  <FiLock className="h-4 w-4" />
                </div>

                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  disabled={loading}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 pl-10 pr-11 text-sm text-black placeholder:text-zinc-400 transition-all duration-200 hover:bg-white focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/5 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-black"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <FiEyeOff className="h-4 w-4" />
                  ) : (
                    <FiEye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600"
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-md shadow-black/10 transition-all duration-200 hover:bg-white hover:text-black active:scale-[0.99] disabled:opacity-60"
            >
              <span>{loading ? "Creating account..." : "Sign Up"}</span>

              {!loading && (
                <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              )}
            </button>
          </form>

          {/* Login */}
          <div className="mt-8 text-center text-xs text-black">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-black underline underline-offset-4 transition-colors hover:bg-black hover:text-white"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Terms */}
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

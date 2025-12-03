"use client";

// File: /dashboard/page.tsx (Landing Page after login with buttons and several forms)
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Form1Type = { firstName: string; lastName: string };
type Form2Type = { email: string; phone: string };

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("authenticated")) {
      router.replace("/");
    }
  }, [router]);

  const [form1, setForm1] = useState<Form1Type>({
    firstName: "",
    lastName: "",
  });
  const [form2, setForm2] = useState<Form2Type>({ email: "", phone: "" });
  const [msg, setMsg] = useState<string>("");

  const handleLogout = () => {
    sessionStorage.removeItem("authenticated");
    router.push("/");
  };

  const handleChangeForm1 = (e: ChangeEvent<HTMLInputElement>) =>
    setForm1((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleChangeForm2 = (e: ChangeEvent<HTMLInputElement>) =>
    setForm2((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitForm1 = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg(`Form1 submitted: ${form1.firstName} ${form1.lastName}`);
  };

  const submitForm2 = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg(`Form2 submitted: ${form2.email}, ${form2.phone}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Dashboard
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Welcome back! Manage your information below.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => alert("Button 1 clicked")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Button 1
              </button>
              <button
                onClick={() => alert("Button 2 clicked")}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Button 2
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Forms Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Form 1 Card */}
          <div className="rounded-2xl bg-white dark:bg-zinc-800 shadow-xl p-6 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6 pb-3 border-b border-zinc-200 dark:border-zinc-700">
              Personal Information
            </h2>
            <form onSubmit={submitForm1} className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={form1.firstName}
                  onChange={handleChangeForm1}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form1.lastName}
                  onChange={handleChangeForm1}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter last name"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit Form 1
              </button>
            </form>
          </div>

          {/* Form 2 Card */}
          <div className="rounded-2xl bg-white dark:bg-zinc-800 shadow-xl p-6 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6 pb-3 border-b border-zinc-200 dark:border-zinc-700">
              Contact Information
            </h2>
            <form onSubmit={submitForm2} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form2.email}
                  onChange={handleChangeForm2}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form2.phone}
                  onChange={handleChangeForm2}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter phone number"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit Form 2
              </button>
            </form>
          </div>
        </div>

        {/* Success Message */}
        {msg && (
          <div className="mt-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 shadow-md">
            <p className="text-sm text-green-700 dark:text-green-400 font-medium text-center">
              ✓ {msg}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

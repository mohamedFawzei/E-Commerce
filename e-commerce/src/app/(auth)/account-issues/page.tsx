"use client";

import Footer from "@/app/_components/footer/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/app/_components/navbar/Navbar";

const issues = [
  { value: "", label: "< Please make a selection >" },
  { value: "cannot-create-account", label: "I cannot create an account" },
  {
    value: "no-account-assistance",
    label: "I do not have an Amazon account but need assistance",
  },
  { value: "cannot-sign-in", label: "I cannot sign in to my account" },
];

export default function AccountIssuesPage() {
  const [selectedIssue, setSelectedIssue] = useState("");

  // render dynamic content based on selection
  const renderContent = () => {
    switch (selectedIssue) {
      case "cannot-create-account":
        return (
          <div className="space-y-4">
            <h3 className="text-[#c45500] font-bold text-lg">Did You Know?</h3>
            <p className="text-sm">
              Sorry that you're having trouble creating an Amazon account.
            </p>
            <p className="text-sm">
              Have you tried our{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:underline hover:text-[#c45500]"
              >
                Create Account page
              </Link>
              .
            </p>
            <p className="text-sm">
              If you need more help creating an account, call us at{" "}
              <span className="font-bold">01066587947</span>.
            </p>
          </div>
        );
      case "no-account-assistance":
        return (
          <div className="space-y-4">
            <h3 className="text-[#c45500] font-bold text-lg">Did You Know?</h3>
            <p className="text-sm">
              You can quickly set up an Amazon account from our{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:underline hover:text-[#c45500]"
              >
                Create Account page
              </Link>
              .
            </p>
            <p className="text-sm">
              If you need more help creating an account, call us at{" "}
              <span className="font-bold">01066587947</span>.
            </p>
          </div>
        );
      case "cannot-sign-in":
        return (
          <div className="space-y-4">
            <h3 className="text-[#c45500] font-bold text-lg">Did You Know?</h3>
            <p className="text-sm">
              If you're having trouble logging in, you may be entering incorrect
              account information. Refer to{" "}
              <Link
                href="#"
                className="text-blue-600 hover:underline hover:text-[#c45500]"
              >
                Why Can't I Log into My Account?
              </Link>
            </p>
            <p className="text-sm">
              You can also check if you need to{" "}
              <Link
                href="#"
                className="text-blue-600 hover:underline hover:text-[#c45500]"
              >
                Reset Your Password
              </Link>
            </p>
            <p className="text-sm">
              If you've already tried to reset your password, but haven't
              received an email from Amazon, check your Junk or Spam folder.
            </p>
            <p className="text-sm">
              If you wish to create a new account already associated to an
              Amazon account, you'll need to verify that you can access your
              e-mail address and mobile account. Refer to{" "}
              <Link
                href="#"
                className="text-blue-600 hover:underline hover:text-[#c45500]"
              >
                Verify Your E-mail Address and Mobile number
              </Link>
            </p>
            <p className="text-sm">
              If you need further assistance, you can call us directly at{" "}
              <span className="font-bold">01066587947</span> if you're located
              within Egypt.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Simple Header matching Auth style */}
      <Navbar categories={[]} subCategories={[]} />

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl p-6 grow">
        <h1 className="text-3xl text-[#c45500] font-normal mb-6">
          Account & Login Issues
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="grow space-y-6">
            {/*  Container */}
            <div className="border border-gray-300 rounded-md overflow-hidden bg-white shadow-sm">
              {/* Header  */}
              <div className="bg-linear-to-b from-[#f7f7f7] to-[#eaeaea] px-4 py-3 border-b border-gray-300 flex items-center gap-3">
                <span className="bg-[#232f3e] text-white text-base font-bold w-8 h-8 flex items-center justify-center rounded-sm shadow-sm">
                  1
                </span>
                <h2 className="font-bold text-gray-900 text-sm">
                  What can we help you with?
                </h2>
              </div>

              {/* Content  */}
              <div className="p-8 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="text-[#e77600] text-xs">➤</span>
                    <label className="text-xs font-bold text-gray-700">
                      Select an issue
                    </label>
                  </div>

                  <div className="relative">
                    <select
                      value={selectedIssue}
                      onChange={(e) => setSelectedIssue(e.target.value)}
                      className="appearance-none border border-gray-400 rounded px-2 py-1 text-xs bg-linear-to-b from-[#f7f7f7] to-[#dcdcdc] shadow-sm hover:bg-[#e3e6e6] focus:ring-1 focus:ring-[#e77600] focus:border-[#e77600] outline-none min-w-[350px] cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.7em top 50%",
                        backgroundSize: "0.65em auto",
                      }}
                    >
                      {issues.map((issue) => (
                        <option
                          key={issue.value}
                          value={issue.value}
                          className="bg-white"
                        >
                          {issue.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Content  */}
            {selectedIssue && (
              <div className="border border-gray-300 rounded-md p-6 bg-white shadow-sm transition-all duration-300">
                {renderContent()}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[280px] shrink-0">
            <div className="space-y-6">
              <h3 className="text-[#c45500] font-normal text-xl">
                Quick solutions
              </h3>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-14 h-10 bg-white flex items-center justify-center overflow-hidden shrink-0">
                  <Image
                    src="/images/acc-issues/box-icon.png"
                    alt="Orders"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-[#0066c0] text-sm font-medium hover:underline hover:text-[#c45500]"
                  >
                    Your Orders
                  </Link>
                  <p className="text-xs text-gray-500">Track & return orders</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-10 bg-white flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/images/acc-issues/payment.png"
                      alt="Orders"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full object-center"
                    />
                  </div>
                  <Link
                    href="#"
                    className="text-[#0066c0] text-sm font-medium hover:underline hover:text-[#c45500]"
                  >
                    Payment Settings
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-10 bg-white flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/images/acc-issues/devices.png"
                      alt="Orders"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full object-center"
                    />
                  </div>
                  <Link
                    href="#"
                    className="text-[#0066c0] text-sm font-medium hover:underline hover:text-[#c45500]"
                  >
                    Devices & Content
                  </Link>
                </div>
              </div>

              <div className="pt-4 space-y-1">
                <p>
                  <Link
                    href="#"
                    className="text-[#0066c0] text-xs hover:underline hover:text-[#c45500]"
                  >
                    Return or replace items
                  </Link>
                </p>
                <p>
                  <Link
                    href="#"
                    className="text-[#0066c0] text-xs hover:underline hover:text-[#c45500]"
                  >
                    Manage Address Book
                  </Link>
                </p>
                <p>
                  <Link
                    href="#"
                    className="text-[#0066c0] text-xs hover:underline hover:text-[#c45500]"
                  >
                    Change Name, E-mail, or Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

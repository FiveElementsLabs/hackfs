import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold text-tide-lighter opacity-70 uppercase tracking-wide">
          404 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
          Oh! You&apos;ve been caught by the tide.
        </h1>
        <p className="mt-2 text-lg font-medium text-tide-lighter opacity-70">
          It looks like the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div
          className="mt-8 inline-flex items-center px-8 py-2 border border-transparent text-sm 
            font-medium rounded-md bg-elements hover:bg-opacity-50"
        >
          <Link href="/">Go back home</Link>
        </div>
      </div>
    </>
  );
}

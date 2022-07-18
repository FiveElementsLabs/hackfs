import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold text-tide-lighter text-opacity-50 uppercase tracking-wide">
          404 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Oh! You've been caught by the tide.
        </h1>
        <p className="mt-2 text-lg font-medium text-tide-lighter text-opacity-50">
          It looks like the page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
          >
            <a>Go back home</a>
          </Link>
        </div>
      </div>
    </>
  );
}

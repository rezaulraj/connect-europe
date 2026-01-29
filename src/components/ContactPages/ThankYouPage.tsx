import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your message has been sent successfully. We will get back to you within
          24 hours.
        </p>
        <Link
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-heading transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

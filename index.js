import React from 'react';

export default function Home() {
  return (
    <main className="p-4 space-y-10">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Interstate Concierge</h1>
        <p className="text-lg mt-2">Empowering You Through Credit & Financial Clarity</p>
        <button className="mt-6 text-lg bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-semibold">Credit Repair</h3>
            <p className="mt-2 text-sm">Dispute inaccurate items, build strong credit, and reach your financial goals.</p>
            <button className="mt-4 bg-blue-500 text-white px-3 py-1 rounded">Learn More</button>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-semibold">Inquiry Deletion</h3>
            <p className="mt-2 text-sm">Remove unauthorized hard inquiries that may be damaging your score.</p>
            <button className="mt-4 bg-blue-500 text-white px-3 py-1 rounded">Learn More</button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Full Name" className="border p-2 rounded" required />
          <input type="email" placeholder="Email Address" className="border p-2 rounded" required />
          <textarea placeholder="Your Message" rows="5" className="border p-2 rounded" required></textarea>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>

      <section className="text-center border-t pt-10">
        <h2 className="text-xl font-semibold mb-2">Ready to Pay?</h2>
        <p className="mb-4">Please contact us for manual payment options.</p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">Contact for Payment</button>
      </section>
    </main>
  );
}

'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Medical Service Society</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#opportunities" className="hover:underline">Opportunities</a>
            <a href="#contact" className="hover:underline">Join</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Making a Difference Through Medicine
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Our mission is to provide students at Saugus High School with medical volunteering opportunities, community service, and outreach initiatives to help those in need.
        </p>
        <a href="#contact" className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded hover:bg-gray-100 transition">
          Join the Club
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">About Us</h3>
        <p className="text-lg leading-relaxed">
          The Medical Service Society is a student-run organization dedicated to helping the community through medical volunteering and charitable initiatives. We partner with local hospitals, clinics, and non-profits to give our members hands-on experience while making a positive impact.
        </p>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="shadow-md p-6 bg-white rounded">
              <h4 className="text-xl font-semibold mb-2">Hospital Volunteering</h4>
              <p>Assist healthcare professionals, greet patients, and help with non-medical tasks at local hospitals.</p>
            </div>
            <div className="shadow-md p-6 bg-white rounded">
              <h4 className="text-xl font-semibold mb-2">Toy & Donation Drives</h4>
              <p>Collect and distribute toys, clothing, and essentials for children facing medical challenges.</p>
            </div>
            <div className="shadow-md p-6 bg-white rounded">
              <h4 className="text-xl font-semibold mb-2">Community Health Events</h4>
              <p>Participate in local health fairs, blood drives, and awareness campaigns to support public health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Join */}
      <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">Join the Medical Service Society</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
            <div>
              <label className="block mb-1 font-semibold">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Why do you want to join?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold">
              Submit
            </button>
          </form>
        ) : (
          <div className="bg-green-100 text-green-700 p-6 rounded-xl shadow-md text-center">
            <h4 className="text-xl font-bold mb-2">Thank you for signing up!</h4>
            <p>We will reach out to you shortly via email with more details.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 mt-10 text-center text-sm">
        © {new Date().getFullYear()} Medical Service Society - Saugus High School. All Rights Reserved.
      </footer>
    </div>
  );
}

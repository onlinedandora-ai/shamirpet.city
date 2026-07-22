import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const AdvertisePage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    packageType: 'Sponsored Real Estate Placement',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-white min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-900 border border-neutral-300">
            <span>Developer & Business Media Kit</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Advertise on shamirpet.city
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            Reach 18,500+ monthly high-intent real-estate buyers, land investors, and Genome Valley professionals researching ORR Exit 7 developments.
          </p>
        </div>

        {/* Pricing & Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-neutral-400 transition-all duration-200">
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-500 uppercase">Local Business</span>
              <h3 className="text-xl font-bold text-neutral-900">Featured Directory Slot</h3>
              <div className="text-2xl font-extrabold text-neutral-900">₹4,999 <span className="text-xs font-normal text-neutral-400">/ year</span></div>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" /> Featured Badge on Directory</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" /> Top Priority in Category Search</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" /> Map Marker Highlight</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-extrabold bg-white text-neutral-900 uppercase">Most Popular</div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-300 uppercase">Real Estate Developers</span>
              <h3 className="text-xl font-bold text-white">Sponsored Layout Card</h3>
              <div className="text-2xl font-extrabold text-white">₹14,999 <span className="text-xs font-normal text-neutral-400">/ month</span></div>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Homepage Sponsored Slot</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Direct WhatsApp & Lead Form</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Article Outbound Link Credit</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-neutral-400 transition-all duration-200">
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-500 uppercase">Dandora Growth Partner</span>
              <h3 className="text-xl font-bold text-neutral-900">Full Digital Campaign</h3>
              <div className="text-2xl font-extrabold text-neutral-900">Custom Tier</div>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" /> Network Sitewide Banner (5 Sites)</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" /> Dedicated Real Estate Journal Feature</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" /> Performance SEO & Ad Execution</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Lead Inquiry Form */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">
            Inquire for Placement & Media Kit
          </h3>
          <p className="text-xs text-neutral-500 mb-6">
            Fill in your project details and our team will get back to you within 12 hours.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-neutral-100 text-neutral-900 text-sm font-bold text-center border border-neutral-300">
              Thank you! Our advertising desk will contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Company / Developer Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. ORR Exit 7 Realty Developers"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Contact Person *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Phone Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98490 00000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sales@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Project Details / Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project location, layout size, or advertising objectives..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
              >
                Submit Inquiry to Media Team
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

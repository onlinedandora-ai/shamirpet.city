import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-white min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="pb-6 border-b border-neutral-200">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Contact Local Desk
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Have a story tip, directory update, or inquiry? Get in touch with our Shamirpet editorial team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
              <h3 className="font-bold text-neutral-900 text-base">Local Desk Info</h3>
              
              <div className="space-y-3 text-xs text-neutral-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <span>Shamirpet Main Road, near ORR Exit 7, Medchal-Malkajgiri, Telangana 500078</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-neutral-700 flex-shrink-0" />
                  <span>editor@shamirpet.city</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-neutral-700 flex-shrink-0" />
                  <span>+91 98490 88990 (Editorial Desk)</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
              <span className="font-bold text-neutral-900 block mb-1">Community Tip Hotline</span>
              Got news about lake conservation, new road infrastructure, or Genome Valley developments? Send your tip directly for verification.
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-neutral-900 mx-auto" />
                <h3 className="text-lg font-bold text-neutral-900">Message Sent!</h3>
                <p className="text-xs text-neutral-500">Thank you. Our desk will respond to your email promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ramesh Kumar"
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
                    placeholder="ramesh@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Directory Correction / News Tip"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your query or message here..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Editorial Team</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

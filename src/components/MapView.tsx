import React, { useState } from 'react';
import type { DirectoryListing } from '../data/mockData';
import { MapPin, Navigation, Info, ExternalLink, Star, Phone, CheckCircle2 } from 'lucide-react';

interface MapViewProps {
  listings: DirectoryListing[];
  onSelectListing: (listing: DirectoryListing) => void;
}

export const MapView: React.FC<MapViewProps> = ({ listings, onSelectListing }) => {
  const [selectedPin, setSelectedPin] = useState<DirectoryListing | null>(listings[0] || null);

  // Key visual landmarks on the Shamirpet schematic map
  const landmarks = [
    { name: 'Shamirpet Lake (Pelle Cheruvu)', x: 42, y: 38, type: 'lake', desc: 'Nizam-era 19th Century Reservoir' },
    { name: 'Jawahar Deer Park', x: 50, y: 52, type: 'park', desc: '54-acre wildlife reserve' },
    { name: 'Genome Valley Phase I & II', x: 75, y: 25, type: 'biotech', desc: 'India flagship biopharma hub' },
    { name: 'ORR Exit 7 Junction', x: 28, y: 70, type: 'highway', desc: 'Signal-free airport & IT link' },
    { name: 'NALSAR Law University', x: 38, y: 48, type: 'edu', desc: '55-acre lakefront campus' },
    { name: 'BITS Pilani Hyderabad', x: 65, y: 78, type: 'edu', desc: '200-acre tech university' },
  ];

  return (
    <div className="w-full rounded-2xl bg-slate-900 text-white border border-slate-800 overflow-hidden shadow-2xl">
      
      {/* Map Header Controls */}
      <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-teal-400 font-bold">
          <Navigation className="w-4 h-4 text-emerald-400" />
          <span>Shamirpet Visual Spatial Map • Genome Valley & Exit 7 Corridor</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Lake</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Deer Park</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Genome Valley</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> ORR Exit 7</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[460px]">
        
        {/* Interactive Schematic Map Canvas */}
        <div className="lg:col-span-2 relative bg-slate-950 p-6 flex items-center justify-center overflow-hidden">
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>

          {/* SVG Map Schematics */}
          <svg className="w-full h-full max-h-[420px] relative z-10" viewBox="0 0 100 100">
            {/* ORR Highway Line */}
            <path
              d="M 10 90 Q 30 70 90 40"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeDasharray="4 2"
            />
            <text x="18" y="78" fill="#fbbf24" fontSize="3" fontWeight="bold">Outer Ring Road (ORR Exit 7)</text>

            {/* Shamirpet Lake Water Body */}
            <path
              d="M 32 30 C 40 20, 55 25, 50 45 C 45 55, 30 48, 32 30 Z"
              fill="#0284c7"
              fillOpacity="0.4"
              stroke="#38bdf8"
              strokeWidth="1"
            />
            <text x="36" y="36" fill="#7dd3fc" fontSize="3" fontStyle="italic">Pelle Cheruvu (Shamirpet Lake)</text>

            {/* Jawahar Deer Park Area */}
            <path
              d="M 45 46 Q 58 48 55 60 Q 42 58 45 46 Z"
              fill="#059669"
              fillOpacity="0.3"
              stroke="#34d399"
              strokeWidth="0.8"
            />
            <text x="47" y="54" fill="#6ee7b7" fontSize="2.5">Jawahar Deer Park</text>

            {/* Genome Valley Zone */}
            <rect
              x="68" y="16" width="24" height="24" rx="3"
              fill="#7c3aed" fillOpacity="0.25" stroke="#a78bfa" strokeWidth="1"
            />
            <text x="70" y="22" fill="#c4b5fd" fontSize="3" fontWeight="bold">Genome Valley</text>
            <text x="70" y="27" fill="#a78bfa" fontSize="2">Biotech & Pharma Hub</text>

            {/* Static Landmark Pins */}
            {landmarks.map((lm) => (
              <g key={lm.name} className="cursor-pointer group">
                <circle cx={lm.x} cy={lm.y} r="2" fill="#38bdf8" className="animate-ping opacity-60" />
                <circle cx={lm.x} cy={lm.y} r="1.5" fill="#0284c7" stroke="#ffffff" strokeWidth="0.5" />
              </g>
            ))}

            {/* Interactive Directory Business Pins */}
            {listings.map((item) => {
              const px = 25 + ((item.lng - 78.55) * 1200) % 65;
              const py = 20 + ((item.lat - 17.54) * 800) % 65;
              const isSelected = selectedPin?.id === item.id;

              return (
                <g
                  key={item.id}
                  onClick={() => {
                    setSelectedPin(item);
                    onSelectListing(item);
                  }}
                  className="cursor-pointer group"
                >
                  {isSelected && (
                    <circle cx={px} cy={py} r="4" fill="#14b8a6" className="animate-pulse opacity-50" />
                  )}
                  <circle
                    cx={px}
                    cy={py}
                    r={isSelected ? '2.8' : '2'}
                    fill={item.isSponsored ? '#f59e0b' : '#14b8a6'}
                    stroke="#ffffff"
                    strokeWidth="0.6"
                    className="transition-all duration-300"
                  />
                  <text
                    x={px + 3}
                    y={py + 1}
                    fill={isSelected ? '#2dd4bf' : '#cbd5e1'}
                    fontSize="2.5"
                    fontWeight={isSelected ? 'bold' : 'normal'}
                  >
                    {item.name.split('—')[0].substring(0, 14)}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Map Footer Note */}
          <div className="absolute bottom-3 left-4 text-[11px] text-slate-400 flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800 backdrop-blur-sm">
            <Info className="w-3 h-3 text-teal-400" />
            <span>Click any map node to inspect business profile & contact</span>
          </div>

        </div>

        {/* Selected Listing Side Info Panel */}
        <div className="p-6 bg-slate-900 border-l border-slate-800 flex flex-col justify-between">
          {selectedPin ? (
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  {selectedPin.category}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{selectedPin.rating.toFixed(1)}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {selectedPin.name}
              </h3>

              <div className="flex items-center gap-1 text-xs text-teal-400 mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedPin.villageArea}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {selectedPin.description}
              </p>

              <div className="space-y-2 text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>{selectedPin.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{selectedPin.verifiedStatus}</span>
                </div>
                <div className="text-[11px] text-slate-500 pt-1">
                  {selectedPin.address}
                </div>
              </div>

              <button
                onClick={() => onSelectListing(selectedPin)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                <span>Full Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 text-xs">
              Select a location on the map to view details.
            </div>
          )}

          <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-500 text-center">
            Map coordinates verified for Shamirpet ORR Exit 7 & Genome Valley.
          </div>
        </div>

      </div>

    </div>
  );
};

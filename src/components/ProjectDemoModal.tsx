import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ShoppingBag,
  UtensilsCrossed,
  Scissors,
} from 'lucide-react';
import { DemoProject } from '../types.ts';
import { getWhatsAppUrl } from '../data/content.ts';

interface ProjectDemoModalProps {
  project: DemoProject | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // State for interactive features inside the demo modal
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('interactive');

  // Restaurant interactive demo state
  const [foodCategory, setFoodCategory] = useState<'specialties' | 'mains' | 'beverages'>('specialties');
  const [restaurantGuests, setRestaurantGuests] = useState('2');
  const [restaurantTime, setRestaurantTime] = useState('8:00 PM Tonight');

  // Salon interactive demo state
  const [selectedServices, setSelectedServices] = useState<string[]>(['Executive Haircut & Styling']);
  const [salonDate, setSalonDate] = useState('Tomorrow');
  const [salonTime, setSalonTime] = useState('11:00 AM');

  // Fashion interactive demo state
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedItem, setSelectedItem] = useState('Cyber Monolith Heavyweight Hoodie');

  const toggleSalonService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const menuItems = {
    specialties: [
      { name: 'Truffle Glazed Wild Salmon', price: '₹750', desc: 'Charred asparagus, citrus reduction, micro herbs' },
      { name: 'Smoked Wood-Fired Sourdough Pizza', price: '₹550', desc: 'Fior di latte, san marzano, aged balsamic glaze' },
      { name: 'Artisan Burrata Tartine', price: '₹480', desc: 'Confit cherry tomatoes, crushed pistachios, basil oil' },
    ],
    mains: [
      { name: 'Slow-Braised Mushroom Risotto', price: '₹520', desc: 'Arborio rice, porcini dust, aged parmesan crisp' },
      { name: 'Herb Crusted Cottage Cheese Steak', price: '₹490', desc: 'Roasted red pepper coulis, grilled garden greens' },
      { name: 'Smoked Garlic Butter Tagliatelle', price: '₹460', desc: 'Handmade pasta, cracked pepper, crushed pine nuts' },
    ],
    beverages: [
      { name: 'Iced Pistachio Spanish Latte', price: '₹260', desc: 'Double espresso, sweetened condensed milk, pistachio foam' },
      { name: 'Cascara Berry Sparkling Brew', price: '₹240', desc: 'Coffee cherry infusion, sparkling soda, fresh mint' },
      { name: 'Midnight Dark Mocha', price: '₹280', desc: 'Single-origin 70% dark chocolate, steamed silky oat milk' },
    ],
  };

  const salonServicesList = [
    { name: 'Executive Haircut & Styling', price: 600, duration: '45 mins' },
    { name: 'Beard Sculpting & Hot Towel Treatment', price: 400, duration: '30 mins' },
    { name: 'Deep Conditioning Protein Treatment', price: 1200, duration: '60 mins' },
    { name: 'Charcoal Detox Scalp Scrub', price: 500, duration: '30 mins' },
  ];

  const calculateSalonTotal = () => {
    return selectedServices.reduce((sum, sName) => {
      const match = salonServicesList.find((s) => s.name === sName);
      return sum + (match ? match.price : 0);
    }, 0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090d18] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-[#070a13]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-[11px] font-mono font-medium tracking-wide text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 rounded">
              Concept / Demo Project
            </span>
            <span className="text-slate-400 text-xs hidden sm:inline">·</span>
            <span className="text-xs text-slate-300 font-medium hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Project Title & Bio */}
          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'interactive'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Interactive Live Flow Simulator
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Key Deliverables &amp; Architecture
            </button>
          </div>

          {activeTab === 'interactive' && (
            <div className="rounded-xl border border-white/10 bg-[#060913] p-4 sm:p-6 space-y-6">
              {/* RESTAURANT INTERACTIVE FLOW */}
              {project.id === 'restaurant-cafe' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <UtensilsCrossed className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">Aura Bistronomy &amp; Cafe</div>
                        <div className="text-[11px] text-slate-400">Interactive Concept Preview</div>
                      </div>
                    </div>

                    {/* Category tabs */}
                    <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg text-xs">
                      <button
                        onClick={() => setFoodCategory('specialties')}
                        className={`px-2.5 py-1 rounded transition-colors ${
                          foodCategory === 'specialties' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Specialties
                      </button>
                      <button
                        onClick={() => setFoodCategory('mains')}
                        className={`px-2.5 py-1 rounded transition-colors ${
                          foodCategory === 'mains' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Mains
                      </button>
                      <button
                        onClick={() => setFoodCategory('beverages')}
                        className={`px-2.5 py-1 rounded transition-colors ${
                          foodCategory === 'beverages' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Artisan Drinks
                      </button>
                    </div>
                  </div>

                  {/* Sample Menu Items */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {menuItems[foodCategory].map((item, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-semibold text-white text-xs">{item.name}</span>
                            <span className="font-mono text-xs text-blue-400 font-bold shrink-0">{item.price}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between">
                          <span className="text-[10px] text-slate-500">Chef Recommendation</span>
                          <span className="text-[10px] text-emerald-400">Available</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Table Booking Widget */}
                  <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 space-y-3">
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>Interactive WhatsApp Table Booking Preview</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <label className="block text-slate-400 text-[11px] mb-1">Guests</label>
                        <select
                          value={restaurantGuests}
                          onChange={(e) => setRestaurantGuests(e.target.value)}
                          className="w-full bg-[#0a0e1a] border border-white/10 rounded-md px-2.5 py-1.5 text-slate-200"
                        >
                          <option value="2">2 Guests (Couple)</option>
                          <option value="4">4 Guests (Family/Group)</option>
                          <option value="6">6+ Guests (Party)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-[11px] mb-1">Time Slot</label>
                        <select
                          value={restaurantTime}
                          onChange={(e) => setRestaurantTime(e.target.value)}
                          className="w-full bg-[#0a0e1a] border border-white/10 rounded-md px-2.5 py-1.5 text-slate-200"
                        >
                          <option value="Lunch (1:00 PM)">Lunch (1:00 PM)</option>
                          <option value="8:00 PM Tonight">Dinner (8:00 PM)</option>
                          <option value="9:30 PM Tonight">Late Dinner (9:30 PM)</option>
                        </select>
                      </div>

                      <div className="flex items-end">
                        <a
                          href={getWhatsAppUrl(
                            `Hi, I saw the Aura Bistronomy concept on YN Interactive. I want to book a table for ${restaurantGuests} guests at ${restaurantTime}.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Test WhatsApp Booking</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SALON INTERACTIVE FLOW */}
              {project.id === 'premium-salon' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <Scissors className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">Luxe Atelier &amp; Studio</div>
                        <div className="text-[11px] text-slate-400">Interactive Booking &amp; Rate Card</div>
                      </div>
                    </div>
                    <span className="text-xs text-cyan-400 font-mono">
                      Estimated: ₹{calculateSalonTotal()}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-slate-300">
                      Select Services (Click to toggle):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {salonServicesList.map((svc) => {
                        const isSelected = selectedServices.includes(svc.name);
                        return (
                          <button
                            key={svc.name}
                            type="button"
                            onClick={() => toggleSalonService(svc.name)}
                            className={`p-3 rounded-lg border text-left flex items-center justify-between transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-cyan-950/30 border-cyan-500/40 text-white'
                                : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/10'
                            }`}
                          >
                            <div>
                              <div className="text-xs font-medium">{svc.name}</div>
                              <div className="text-[10px] text-slate-500">{svc.duration}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-mono font-semibold text-cyan-300">
                                ₹{svc.price}
                              </div>
                              <span className="text-[10px] text-slate-400">
                                {isSelected ? 'Selected' : '+ Add'}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Salon Booking Trigger */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-300">
                      <div><strong className="text-white">Services:</strong> {selectedServices.join(', ')}</div>
                      <div className="text-slate-400 mt-0.5">Total Estimated: <strong className="text-white">₹{calculateSalonTotal()}</strong></div>
                    </div>

                    <a
                      href={getWhatsAppUrl(
                        `Hi, I saw the Luxe Atelier Salon demo on YN Interactive. I'd like to inquire about booking: ${selectedServices.join(', ')} (Est ₹${calculateSalonTotal()}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Test WhatsApp Appointment</span>
                    </a>
                  </div>
                </div>
              )}

              {/* FASHION STORE INTERACTIVE FLOW */}
              {project.id === 'fashion-store' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">NOVA Streetwear Studio</div>
                        <div className="text-[11px] text-slate-400">Direct WhatsApp Checkout Catalog</div>
                      </div>
                    </div>
                    <span className="text-xs text-indigo-400 font-mono font-bold">₹1,899</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0a0f1e] border border-white/10 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-white">{selectedItem}</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        450 GSM Heavy French Terry Cotton · Boxy Drop-Shoulder Silhouette · Mineral Washed
                      </p>
                    </div>

                    {/* Size Selector */}
                    <div>
                      <span className="text-xs text-slate-300 font-medium block mb-2">Select Size:</span>
                      <div className="flex items-center gap-2">
                        {['S', 'M', 'L', 'XL'].map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-9 h-9 rounded-md text-xs font-semibold font-mono border transition-all cursor-pointer ${
                              selectedSize === size
                                ? 'bg-blue-600 border-blue-400 text-white'
                                : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-slate-400">
                        Direct customer message generates with selected product &amp; size code.
                      </div>
                      <a
                        href={getWhatsAppUrl(
                          `Hi, I saw the NOVA Fashion demo on YN Interactive. I'd like to inquire about ordering: ${selectedItem} in Size ${selectedSize} (₹1,899).`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Test WhatsApp Order Flow</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Target Business Archetype
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.liveDetails.conceptRole}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Included Core Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#07090e] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Footer Note */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Want a similar custom website built for your exact business?
            </div>
            <a
              href={getWhatsAppUrl(`Hi YN Interactive, I want to build a website similar to the ${project.title} concept.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-2"
            >
              <span>Get Free Quote for This Concept</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Star, MessageSquarePlus, Quote, CheckCircle2, Trash2 } from 'lucide-react';
import { Testimonial } from '../types';

interface ReviewsSectionProps {
  testimonials: Testimonial[];
  isEditing: boolean;
  onAddTestimonial: (t: Testimonial) => void;
  onDeleteTestimonial: (id: string) => void;
  onUpdateTestimonial: (id: string, updated: Partial<Testimonial>) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  testimonials,
  isEditing,
  onAddTestimonial,
  onDeleteTestimonial,
  onUpdateTestimonial
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newClient, setNewClient] = useState('');
  const [newRestaurant, setNewRestaurant] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newQuote, setNewQuote] = useState('');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.trim() || !newQuote.trim()) return;

    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      clientName: newClient.trim(),
      roleOrRestaurant: newRestaurant.trim() || 'Restaurant Partner',
      location: newCity.trim() || 'UK',
      quote: newQuote.trim(),
      stars: 5,
      avatarLetter: newClient.trim()[0].toUpperCase(),
      isSample: false
    };

    onAddTestimonial(newRev);
    setNewClient('');
    setNewRestaurant('');
    setNewCity('');
    setNewQuote('');
    setShowAddForm(false);
  };

  return (
    <section id="reviews" className="pt-20 pb-6">
      <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
        <div className="flex items-baseline gap-4 flex-wrap">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Client reviews
          </h2>
          <span className="font-mono-code text-xs md:text-sm text-[#38bdf8] uppercase tracking-widest">
            In their words
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowAddForm(!showAddForm)}
          className="font-mono-code text-xs px-3.5 py-1.5 rounded-full bg-[#170f4a] text-[#38bdf8] border border-[#302a7c] hover:bg-[#201569] flex items-center gap-1.5 transition-colors"
        >
          <MessageSquarePlus className="w-3.5 h-3.5" />
          <span>{showAddForm ? 'Close Add Form' : 'Add New Review'}</span>
        </button>
      </div>

      {showAddForm && (
        <form
          onSubmit={handleCreate}
          className="mb-8 p-6 rounded-2xl bg-[#110c33] border border-[#8b5cf6]/50 space-y-4 max-w-xl"
        >
          <h4 className="font-display font-bold text-white text-lg">Add Client Testimonial</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Client Name (e.g. Tariq R.)"
              value={newClient}
              onChange={(e) => setNewClient(e.target.value)}
              required
              className="bg-[#170f4a] border border-[#302a7c] rounded-xl px-3 py-2 text-sm text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Restaurant (e.g. Spice Lounge)"
              value={newRestaurant}
              onChange={(e) => setNewRestaurant(e.target.value)}
              className="bg-[#170f4a] border border-[#302a7c] rounded-xl px-3 py-2 text-sm text-white focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="City (e.g. Birmingham, UK)"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3 py-2 text-sm text-white focus:outline-none"
          />
          <textarea
            placeholder="Review quote / what results did Sakil achieve?"
            value={newQuote}
            onChange={(e) => setNewQuote(e.target.value)}
            rows={3}
            required
            className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl p-3 text-sm text-white focus:outline-none"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-xs font-mono-code text-[#aaa8dc] hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-[#8b5cf6] text-white text-xs font-mono-code font-bold hover:bg-[#7c3aed]"
            >
              Save Review
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((rev) => (
          <figure
            key={rev.id}
            className="relative animated-card-border p-7 rounded-2xl bg-[#170f4a]/90 flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex text-amber-400 gap-1 text-base">
                  {[...Array(rev.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                {rev.isSample && (
                  <span className="font-mono-code text-[10px] text-[#aaa8dc] border border-dashed border-[#302a7c] px-2 py-0.5 rounded-full">
                    Sample Review
                  </span>
                )}
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => onDeleteTestimonial(rev.id)}
                    title="Delete review"
                    className="text-rose-400 hover:text-rose-200 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="text-white text-sm sm:text-base leading-relaxed italic mb-6">
                {isEditing ? (
                  <textarea
                    value={rev.quote}
                    onChange={(e) => onUpdateTestimonial(rev.id, { quote: e.target.value })}
                    rows={4}
                    className="w-full bg-[#110c33] border border-[#302a7c] rounded-xl p-2.5 text-xs text-white"
                  />
                ) : (
                  <p>"{rev.quote}"</p>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#302a7c]/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#38bdf8] flex items-center justify-center font-display font-extrabold text-white text-base shadow-sm">
                {rev.avatarLetter}
              </div>
              <div className="min-w-0 flex-1">
                <b className="font-display font-bold text-sm text-white block truncate">
                  {isEditing ? (
                    <input
                      type="text"
                      value={rev.clientName}
                      onChange={(e) => onUpdateTestimonial(rev.id, { clientName: e.target.value })}
                      className="bg-[#110c33] border border-[#302a7c] px-2 py-0.5 rounded text-xs text-white"
                    />
                  ) : (
                    rev.clientName
                  )}
                </b>
                <small className="font-mono-code text-xs text-[#aaa8dc] block truncate">
                  {rev.roleOrRestaurant}, {rev.location}
                </small>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

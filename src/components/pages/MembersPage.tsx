import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Instagram, Youtube } from 'lucide-react';

const MembersPage = () => {
  const members = [
    {
      id: 1,
      name: "ARJIE",
      role: "Founder / Choreographer",
      image: "/arjie.jpg",
      bio: "The visionary behind Honeydew Crew. Arjie founded the group in 2020 with a dream of bringing K-pop dance culture to Perth. With over 8 years of dance experience spanning hip-hop, contemporary, and street styles, she leads choreography sessions and coordinates all major performances.",
      specialty: "Hip-hop, Choreography, K-pop",
      favArtists: "BLACKPINK, Stray Kids, TWICE",
      funFact: "Can learn a full choreography in under 2 hours",
      socials: { instagram: "#", youtube: "#" }
    },
    {
      id: 2,
      name: "DECHEN",
      role: "Performance Director",
      image: "/decchan.jpg",
      bio: "The energy powerhouse of the crew. Dechen brings an infectious stage presence that captivates every audience. She handles performance direction, ensuring every formation and transition is polished to perfection. Her background in contemporary dance adds a unique fluidity to the group's style.",
      specialty: "Contemporary, Stage Performance, Formations",
      favArtists: "aespa, NewJeans, IVE",
      funFact: "Never misses a beat — literally has perfect rhythm",
      socials: { instagram: "#", youtube: "#" }
    },
    {
      id: 3,
      name: "LEA",
      role: "Lead Dancer / Creative Director",
      image: "/lea.jpg",
      bio: "The creative force that elevates every performance. Lea combines technical precision with artistic expression, bringing a dynamic edge to the crew's choreography. Her versatility across multiple dance styles makes her an invaluable asset to every routine. She also manages the crew's visual content and social media presence.",
      specialty: "Jazz, Waacking, Content Creation",
      favArtists: "BTS, SEVENTEEN, TXT",
      funFact: "Has attended over 20 K-pop concerts across Asia and Australia",
      socials: { instagram: "#", youtube: "#" }
    },
    {
      id: 4,
      name: "ZHENMEI",
      role: "Lead Dancer / Stylist",
      image: "/zhenmei.png",
      bio: "The aesthetic queen who brings visual magic to every performance. Zhenmei handles both lead dance positions and costume coordination for the crew. Her attention to detail ensures Honeydew Crew always looks as good as they dance. She specializes in sharp, precise movements that hit every beat.",
      specialty: "J-pop, Voguing, Costume Design",
      favArtists: "LE SSERAFIM, ITZY, XG",
      funFact: "Has a collection of over 50 K-pop concert lightsticks",
      socials: { instagram: "#", youtube: "#" }
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f]">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="px-4 md:px-8 lg:px-16 mb-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white uppercase tracking-tight mb-4">
              MEMBER PROFILE
            </h1>
            <p className="text-xl text-[#e0e0e0] max-w-2xl">
              Meet the talented dancers behind Honeydew Crew
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#9dff00] py-8 px-4 md:px-8 lg:px-16 mb-0">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-black">4</div>
              <div className="text-lg font-bold text-black/70 uppercase tracking-wider">MEMBERS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-black">25+</div>
              <div className="text-lg font-bold text-black/70 uppercase tracking-wider">EVENTS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-black">∞</div>
              <div className="text-lg font-bold text-black/70 uppercase tracking-wider">PASSION</div>
            </div>
          </div>
        </section>

        {/* Member Profiles */}
        <section className="px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto space-y-0">
            {members.map((member, index) => (
              <article
                key={member.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Image */}
                <div className="relative aspect-square lg:aspect-auto lg:min-h-[600px] bg-[#1a1a1a] border border-[#9dff00]/10 overflow-hidden group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="text-8xl md:text-9xl font-extrabold text-white/10 uppercase tracking-tighter">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-[#0f0f0f] border border-[#9dff00]/10 p-8 lg:p-12 flex flex-col justify-center">
                  {/* Header */}
                  <div className="mb-8">
                    <span className="text-[#9dff00] font-bold uppercase tracking-[0.2em] text-sm mb-2 block">
                      {member.role}
                    </span>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white uppercase tracking-tight">
                      {member.name}
                    </h2>
                  </div>

                  {/* Bio */}
                  <p className="text-lg text-[#e0e0e0] leading-relaxed mb-8">
                    {member.bio}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-[#9dff00] font-bold uppercase tracking-wider text-sm mb-2">
                        SPECIALTY
                      </h4>
                      <p className="text-white font-semibold">
                        {member.specialty}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#9dff00] font-bold uppercase tracking-wider text-sm mb-2">
                        FAV ARTISTS
                      </h4>
                      <p className="text-white font-semibold">
                        {member.favArtists}
                      </p>
                    </div>
                  </div>

                  {/* Fun Fact */}
                  <div className="bg-[#1a1a1a] border-l-4 border-[#9dff00] p-4 mb-8">
                    <h4 className="text-[#9dff00] font-bold uppercase tracking-wider text-xs mb-1">
                      FUN FACT
                    </h4>
                    <p className="text-[#e0e0e0] italic">
                      "{member.funFact}"
                    </p>
                  </div>

                  {/* Socials */}
                  <div className="flex gap-4">
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Instagram`}
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#9dff00]/20 flex items-center justify-center hover:bg-[#9dff00] hover:border-[#9dff00] transition-all duration-300 group/social"
                    >
                      <Instagram className="w-5 h-5 text-[#e0e0e0] group-hover/social:text-black transition-colors" />
                    </a>
                    <a
                      href={member.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s YouTube`}
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#9dff00]/20 flex items-center justify-center hover:bg-[#9dff00] hover:border-[#9dff00] transition-all duration-300 group/social"
                    >
                      <Youtube className="w-5 h-5 text-[#e0e0e0] group-hover/social:text-black transition-colors" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="bg-[#1a1a1a] border-t border-[#9dff00]/10 py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
              WANT TO JOIN THE CREW?
            </h2>
            <p className="text-xl text-[#e0e0e0] mb-8 max-w-2xl mx-auto">
              We're always looking for passionate dancers to join our family
            </p>
            <button className="bg-[#9dff00] text-black px-10 py-4 text-xl font-extrabold uppercase tracking-wider hover:bg-[#8aef00] transition-colors duration-300">
              APPLY NOW
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MembersPage;

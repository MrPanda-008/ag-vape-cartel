export default function AGVapeCartelWebsite() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Age Verification */}
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div className="bg-zinc-900 border border-green-700 rounded-3xl p-8 max-w-md text-center shadow-2xl m-4">
          <h1 className="text-3xl font-bold text-green-500 mb-3">AG Vape Cartel</h1>
          <h2 className="text-xl font-semibold mb-3">18+ Age Verification</h2>
          <p className="text-zinc-300 mb-5">
            This website is intended for adults 18+ only. By entering, you confirm that you are of legal age in your area.
          </p>
          <button className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-2xl font-semibold">
            I am 18+
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          AG <span className="text-green-500">Vape Cartel</span>
        </h1>
        <p className="text-zinc-300 max-w-xl text-lg">
          Premium atmosphere. Modern flavors. Visit and explore your next favorite vibe.
        </p>
      </section>

      {/* Products & Flavors */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-500">Products & Flavors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Fruity Collection', 'Cool Mint Series', 'Premium Blend'].map((item) => (
            <div key={item} className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-lg hover:border-green-600 transition">
              <h3 className="text-2xl font-semibold mb-2">{item}</h3>
              <p className="text-zinc-400">Explore flavor options crafted for a premium experience.</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-zinc-900 text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto text-zinc-300 text-lg">
          AG Vape Cartel offers a premium and modern shop atmosphere with carefully selected products and flavors.
        </p>
      </section>

      {/* Socials */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-6">Follow Us</h2>
        <div className="flex justify-center gap-4">
          <button className="bg-zinc-800 px-6 py-3 rounded-2xl hover:bg-zinc-700">Facebook</button>
          <button className="bg-zinc-800 px-6 py-3 rounded-2xl hover:bg-zinc-700">Instagram</button>
        </div>
      </section>

      {/* Store Hours */}
      <section className="py-20 px-6 bg-zinc-900 text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Store Hours</h2>
        <p className="text-2xl text-zinc-300">11:00 AM – 11:00 PM</p>
        <p className="text-zinc-500 mt-2">Open Everyday</p>
      </section>
    </div>
  )
}

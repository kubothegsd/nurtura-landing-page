export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              Welcome to Our Platform
            </h1>

            <h1 className="font-primary font-bold">Headline Text</h1>

            <p className="font-secondary font-normal">Body text goes here</p>

            <blockquote className="font-accent font-medium">
              Quote text here
            </blockquote>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

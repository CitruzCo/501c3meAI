import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart,
  ChartBar,
  ChevronRight,
  FileText,
  Layout,
  Mail,
  Phone,
  Rocket,
  Search,
  Users,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-fuchsia-600" />
            <span className="text-xl font-bold">501cemeAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-fuchsia-600 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-fuchsia-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-fuchsia-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-fuchsia-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-md border border-fuchsia-600 px-4 py-2 text-sm font-medium text-fuchsia-600 transition-colors hover:bg-fuchsia-50"
            >
              Sign In
            </Link>
            <Button className="bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-b from-white to-fuchsia-50 py-20 md:py-32"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-fuchsia-100 px-3 py-1 text-sm font-medium text-fuchsia-800">
                  <span className="flex h-2 w-2 rounded-full bg-fuchsia-600 mr-2"></span>
                  Introducing Our AI Platform
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-fuchsia-700 via-purple-600 to-violet-700 bg-clip-text text-transparent">
                  Empower Your Non-profit with AI-Driven Solutions
                </h1>
                <p className="max-w-lg text-lg text-gray-600 md:text-xl">
                  Harness the power of AI to maximize your impact, streamline operations, and better serve your community with our comprehensive non-profit focused platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50"
                  >
                    Book a Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-br from-fuchsia-${i * 100} to-violet-${i * 100}`}
                      ></div>
                    ))}
                  </div>
                  <p>
                    Trusted by <span className="font-medium text-gray-900">2,000+</span> companies
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 opacity-30 blur-xl"></div>
                <div className="relative rounded-2xl bg-white p-2 shadow-xl">
                  <Image
                    src="/images/ai-dashboard.svg"
                    width={800}
                    height={600}
                    alt="AI Dashboard Preview"
                    priority
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Features Section */}
        <section id="features" className="bg-white py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-fuchsia-700 to-violet-700 bg-clip-text text-transparent">
                Powerful Features for Modern Businesses
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to take your business to the next level, all in one platform.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <ChartBar className="h-6 w-6 text-fuchsia-600" />,
                  title: "Donor Analytics",
                  description: "Identify giving patterns and optimize donor communications with predictive AI models that increase retention and conversion.",
                },
                {
                  icon: <Search className="h-6 w-6 text-emerald-600" />,
                  title: "Grant Matching",
                  description: "Our AI scans thousands of grant opportunities to find perfect matches for your mission, saving you countless research hours.",
                },
                {
                  icon: <BarChart className="h-6 w-6 text-blue-600" />,
                  title: "Impact Reporting",
                  description: "Translate your program data into compelling impact stories with customized visualizations and narratives for stakeholders.",
                },
                {
                  icon: <FileText className="h-6 w-6 text-amber-600" />,
                  title: "Document Processing",
                  description: "Streamline intake forms, applications, and program documentation with AI-powered OCR and form processing.",
                },
                {
                  icon: <Layout className="h-6 w-6 text-purple-600" />,
                  title: "Program Management",
                  description: "Track outcomes, manage participants, and measure progress with customizable dashboards built for nonprofit programs.",
                },
                {
                  icon: <Users className="h-6 w-6 text-teal-600" />,
                  title: "Volunteer Coordination",
                  description: "Optimize volunteer scheduling, skills matching, and engagement through our intelligent volunteer management system.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border p-6 hover:border-fuchsia-200 hover:shadow-lg transition-all"
                >
                  <div className="mb-4 rounded-lg bg-gray-50 p-3 inline-block group-hover:bg-fuchsia-50 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center text-sm font-medium text-fuchsia-600 hover:text-fuchsia-800"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gradient-to-b from-white to-fuchsia-50 py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-fuchsia-700 to-violet-700 bg-clip-text text-transparent">
                About 501cemeAI
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded in 2020, 501cemeAI has been at the forefront of AI innovation, helping businesses of all sizes
                harness the power of artificial intelligence to drive growth and efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/mission.svg"
                  width={600}
                  height={400}
                  alt="Our Mission Visualization"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-gray-600">
                  At 501cemeAI, our mission is to democratize artificial intelligence and make it accessible to
                  businesses of all sizes. We believe that AI should be a tool for everyone, not just tech giants with
                  unlimited resources.
                </p>
                <p className="text-gray-600">
                  Our team of experts is dedicated to creating AI solutions that are powerful yet easy to use, helping
                  our clients stay ahead in an increasingly competitive landscape.
                </p>
                <Button className="bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-white py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-fuchsia-700 to-violet-700 bg-clip-text text-transparent">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Don't just take our word for it. See what our customers have to say.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Emily Rodriguez",
                  title: "CTO, Nexus Innovations",
                  testimonial:
                    "501cemeAI's platform has completely transformed how we approach our AI initiatives. The results have been nothing short of amazing.",
                },
                {
                  name: "Michael Chen",
                  title: "Director of Data Science, TechForward",
                  testimonial:
                    "We've tried several AI solutions, but 501cemeAI stands out with its intuitive interface and powerful capabilities. It's been a game-changer for our business.",
                },
                {
                  name: "Sophia Williams",
                  title: "VP of Marketing, GlobalReach",
                  testimonial:
                    "The customer support team at 501cemeAI is exceptional. They've been with us every step of the way, ensuring we get the most out of their platform.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-2xl bg-white p-6 shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600">"{testimonial.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-b from-fuchsia-50 to-white py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-fuchsia-700 to-violet-700 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Have questions or ready to get started? Our team is here to help you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-fuchsia-100 p-3">
                    <Mail className="h-6 w-6 text-fuchsia-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">Our friendly team is here to help.</p>
                    <a
                      href="mailto:hello@501cemeai.com"
                      className="text-fuchsia-600 hover:text-fuchsia-800 font-medium"
                    >
                      hello@501cemeai.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-fuchsia-100 p-3">
                    <Phone className="h-6 w-6 text-fuchsia-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+1-555-501-CEME" className="text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                      +1-555-501-CEME
                    </a>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Office Locations</h3>
                  <div className="grid gap-4">
                    <div>
                      <h4 className="font-medium">San Francisco</h4>
                      <p className="text-gray-600">100 Technology Drive, Suite 200</p>
                    </div>
                    <div>
                      <h4 className="font-medium">New York</h4>
                      <p className="text-gray-600">350 Innovation Avenue, 15th Floor</p>
                    </div>
                    <div>
                      <h4 className="font-medium">London</h4>
                      <p className="text-gray-600">25 AI Square, Canary Wharf</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-fuchsia-600 to-violet-600 py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
                <p className="mt-4 text-lg text-fuchsia-100">
                  Join thousands of satisfied customers and take your business to new heights with 501cemeAI.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-fuchsia-600 hover:bg-fuchsia-50">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Rocket className="h-6 w-6 text-fuchsia-400" />
                <span className="text-xl font-bold text-white">501cemeAI</span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">
                Empowering businesses with vibrant, innovative AI solutions since 2020.
              </p>
            </div>
            {["Product", "Company", "Resources"].map((category) => (
              <div key={category}>
                <h3 className="font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>
                      <Link href="#" className="text-sm hover:text-fuchsia-400 transition-colors">
                        {category} Link {i}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} 501cemeAI. All rights reserved.</p>
            <div className="flex gap-6">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <Link key={item} href="#" className="text-sm text-gray-500 hover:text-fuchsia-400 transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TimerReset,
  ShieldCheck,
  Rocket,
  HandCoins,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  TrendingUpIcon,
  ZapIcon,
  RocketIcon,
  LinkedinIcon,
} from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { SignUpButton } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const { userId } = auth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c5d8f6] 0% to-[#e1feff] 100% text-gray-100 overflow-hidden pt-20">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-40 right-20 animate-float animation-delay-2000">
          <ZapIcon className="w-10 h-10 text-[#031b20] opacity-50 animate-bounce" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animation-delay-4000">
          <TrendingUpIcon className="w-12 h-12 text-green-400 opacity-50" />
        </div>

        {/* Hero Section */}
        <div className="text-left py-20 lg:py-32 block lg:flex justify-between">
          <div>
            <LinkedinIcon className="w-16 h-16 text-purple-500 mb-6 animate-bounce" />
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Create Powerful LinkedIn Content in Seconds
            </h1>
            <p className="text-xl mb-10 bg-gradient-to-r from-neutral-800 to-sky-900 bg-clip-text text-transparent">
              LinkedCraft AI is your ultimate tool to craft professional,
              engaging, and tailored LinkedIn posts effortlessly.
            </p>
            <div className="flex space-x-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/generate">Start Creating</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out"
            >
              <Link href="#features">Learn More</Link>
            </Button>
            </div>
          </div>
          <div className="flex">
            <Image
              src="/hero.png"
              className="hidden lg:block"
              width={900}
              height={100}
              alt="Illustration of a person working on a computer"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20" id="features">
          <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-neutral-800 to-sky-900 bg-clip-text text-transparent">
            Why LinkedCraft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Save Time",
                icon: <TimerReset className="w-10 h-10 mb-4 text-[#f21c1c]" />,
                description:
                  "Let AI handle the heavy lifting of content creation.",
              },
              {
                title: "Professional Quality",
                icon: <ShieldCheck className="w-10 h-10 mb-4 text-[#1c47f2]" />,
                description: "Generate posts that resonate with your audience.",
              },
              {
                title: "Tailored to Your Needs",
                icon: <HandCoins className="w-10 h-10 mb-4 text-[#ee1cf2]" />,
                description:
                  "Customize content for your industry, tone, and goals.",
              },
              {
                title: "Boost Engagement",
                icon: <Rocket className="w-10 h-10 mb-4 text-[#1ccef2]" />,
                description:
                  "Create posts that drive conversations and connections.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-10 bg-gradient-to-r from-[#0c182d] 0% to-[#124a4c] 100% rounded-3xl my-20 relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L100,0 L100,100 L0,100 Z"
                fill="url(#grid-pattern)"
              />
            </svg>
            <defs>
              <pattern
                id="grid-pattern"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              How It Works?
            </h2>
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto px-6">
              {[
                "Input Your Idea: Share a topic or a few key points.",
                "Let AI Create: Watch as LinkedCraft AI crafts a polished LinkedIn post.",
                "Review & Share: Edit (if needed) and publish directly to LinkedIn.",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-20 relative">
          <div className="absolute top-10 right-10 animate-spin-slow">
            <svg
              className="w-20 h-20 text-blue-500 opacity-20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6V12L16 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mb-8 space-y-4 bg-gradient-to-r from-neutral-800 to-sky-900 bg-clip-text text-transparent">
            <h2 className="text-4xl font-bold">
              Ready to Level Up Your LinkedIn Game?
            </h2>
            <p>
              Join thousands of professionals using LinkedCraft AI to grow their
              LinkedIn presence effortlessly.
            </p>
          </div>
          {userId ? (
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/generate">
                Get Started Today <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          ) : (
            <SignUpButton mode="modal">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Get Started Free <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </SignUpButton>
          )}
          <p className="mt-10 text-gray-400">
            (c) Ari & Rio AI ENgineer Batch 30
          </p>
        </div>
      </main>
    </div>
  );
}

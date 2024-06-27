/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/J04jQByu81d
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export default function Landing() {
  return (
    <div>
      <header className="bg-[#7d5fff] py-2 px-4 md:px-6 lg:py-3 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-[#d0c6ff] hover:underline hover:underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm text-[#d0c6ff] hover:underline hover:underline-offset-4" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm text-[#d0c6ff] hover:underline hover:underline-offset-4" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="text-sm text-[#d0c6ff] hover:underline hover:underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <header className="bg-white py-8 px-4 md:px-6 lg:py-12 lg:px-8">
        <div className="container mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <AppWindowIcon className="h-5 w-5" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Ice Cubes</h1>
            </div>
            <p className="max-w-md text-lg text-muted-foreground">
              The open-source Mastodon client app for iOS, designed to keep you connected to your favorite social
              network.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Download for iOS
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="300"
            height="600"
            alt="Ice Cubes App"
            className="mx-auto rounded-xl shadow-xl sm:mx-0"
          />
        </div>
      </header>
      <section className="bg-[#7d5fff] text-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#d0c6ff] px-3 py-1 text-sm text-[#7d5fff]">
                Mastodon Integration
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Seamless Mastodon Experience</h2>
              <p className="text-[#d0c6ff]">
                Ice Cubes provides a native iOS experience for interacting with your Mastodon account, including
                posting, browsing, and managing your timeline.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#d0c6ff] px-3 py-1 text-sm text-[#7d5fff]">Customization</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Personalize Your Experience</h2>
              <p className="text-[#d0c6ff]">
                Customize the app's appearance, notification settings, and other preferences to suit your needs and
                preferences.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#d0c6ff] px-3 py-1 text-sm text-[#7d5fff]">
                Offline Support
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay Connected Offline</h2>
              <p className="text-[#d0c6ff]">
                Ice Cubes allows you to read and interact with your Mastodon timeline even when you're offline, ensuring
                you never miss a beat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <img
              src="/placeholder.svg"
              width="300"
              height="600"
              alt="Ice Cubes App Screenshot"
              className="rounded-xl shadow-xl"
            />
            <img
              src="/placeholder.svg"
              width="300"
              height="600"
              alt="Ice Cubes App Screenshot"
              className="rounded-xl shadow-xl"
            />
            <img
              src="/placeholder.svg"
              width="300"
              height="600"
              alt="Ice Cubes App Screenshot"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-[#7d5fff] px-3 py-1 text-sm text-white">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Ice Cubes?</h2>
            <p className="max-w-md text-muted-foreground">
              Ice Cubes offers a range of features to enhance your Mastodon experience.
            </p>
          </div>
          <div className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <FlagIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Seamless Mastodon Integration</h3>
                <p className="text-muted-foreground">
                  Easily connect your Mastodon account and enjoy a native iOS experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Link2Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Customizable Appearance</h3>
                <p className="text-muted-foreground">Personalize the app's look and feel to match your preferences.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Disc3Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Offline Functionality</h3>
                <p className="text-muted-foreground">
                  Stay connected to your Mastodon timeline even when you're offline.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Columns4Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Powerful Notification System</h3>
                <p className="text-muted-foreground">
                  Stay on top of your Mastodon activity with customizable notifications.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Heading5Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Advanced Media Handling</h3>
                <p className="text-muted-foreground">
                  Enjoy a seamless experience with images, videos, and other media.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Heading6Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Secure and Private</h3>
                <p className="text-muted-foreground">
                  Your data is protected with end-to-end encryption and privacy-focused features.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <SectionIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Intuitive User Interface</h3>
                <p className="text-muted-foreground">
                  Enjoy a clean and user-friendly interface that makes navigating your Mastodon experience a breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-[#7d5fff] px-3 py-1 text-sm text-white">App Alternate Icons</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Customize Your App Icon</h2>
            <p className="max-w-md text-muted-foreground">
              Choose from a variety of alternate app icons to personalize your Ice Cubes experience.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 py-8 sm:grid-cols-4 md:grid-cols-6">
            <div className="flex flex-col items-center gap-2">
              <img src="/placeholder.svg" width="64" height="64" alt="App Icon" className="rounded-lg" />
              <span className="text-sm text-muted-foreground">Icon 1</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/placeholder.svg" width="64" height="64" alt="App Icon" className="rounded-lg" />
              <span className="text-sm text-muted-foreground">Icon 2</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/placeholder.svg" width="64" height="64" alt="App Icon" className="rounded-lg" />
              <span className="text-sm text-muted-foreground">Icon 3</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/placeholder.svg" width="64" height="64" alt="App Icon" className="rounded-lg" />
              <span className="text-sm text-muted-foreground">Icon 4</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/placeholder.svg" width="64" height="64" alt="App Icon" className="rounded-lg" />
              <span className="text-sm text-muted-foreground">Icon 5</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/placeholder.svg" width="64" height="64" alt="App Icon" className="rounded-lg" />
              <span className="text-sm text-muted-foreground">Icon 6</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <img
              src="/placeholder.svg"
              width="300"
              height="600"
              alt="Ice Cubes App Screenshot"
              className="rounded-xl shadow-xl"
            />
            <img
              src="/placeholder.svg"
              width="300"
              height="600"
              alt="Ice Cubes App Screenshot"
              className="rounded-xl shadow-xl"
            />
            <img
              src="/placeholder.svg"
              width="300"
              height="600"
              alt="Ice Cubes App Screenshot"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>
      <footer className="bg-[#6a4dff] py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[#d0c" />
        </div>
      </footer>
    </div>
  )
}

function AppWindowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  )
}


function Columns4Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7.5 3v18" />
      <path d="M12 3v18" />
      <path d="M16.5 3v18" />
    </svg>
  )
}


function Disc3Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function Heading5Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17 13v-3h4" />
      <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
    </svg>
  )
}


function Heading6Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <circle cx="19" cy="16" r="2" />
      <path d="M20 10c-2 2-3 3.5-3 6" />
    </svg>
  )
}


function Link2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  )
}


function SectionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" />
      <path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" />
    </svg>
  )
}

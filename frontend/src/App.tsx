import { useState } from 'react'

export default function App() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('curtischang@proton.me')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <div className="max-w-4xl px-[10%] pt-30 pb-24">
        <h1 className="text-5xl font-[Brawler] text-blue-950 tracking-tight">Curtis Chang</h1>

        <div className="flex flex-wrap items-center gap-5 mt-6 text-sm font-[Urbanist]">
          <a
            href="https://github.com/Courtesi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800/70 hover:text-blue-950 transition-colors "
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/changcurtis/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800/70 hover:text-blue-950 transition-colors "
          >
            LinkedIn
          </a>
          <button
            onClick={copyEmail}
            className="text-blue-800/70 hover:text-blue-950 transition-colors  cursor-pointer"
          >
            {copied ? 'curtischang@proton.me (copied)' : 'curtischang@proton.me'}
          </button>
        </div>

        <div className="mt-20 space-y-8 font-[Urbanist] text-xl text-blue-950/80 leading-relaxed">
          <p>
            I'm currently working on my startup <a href="https://trueshotodds.com" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-medium hover:underline">TrueShotOdds</a>,
			a web app that helps smart bettors find profitable bets across prediction markets and sportsbooks.
			I'm documenting my journey as a founder through <a href="https://www.youtube.com/@TrueShotOdds" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-medium hover:underline">YouTube</a>,
			a weekly series that takes you through my founding process. As of now, I am based in California.
          </p>
          <p>
            I have a few years of experience as a software engineer, having worked across full-stack
            development, automation, and data tooling in a variety of industries. I graduated from
            UC Irvine with a B.S. in Computer Science and also hold a CompTIA Security+ certification.
			I'm an avid homelabber, where I mainly dive into self-hosting useful QoL services that I would
			otherwise have to pay a subscription for.
          </p>
          <p>
            Apart from my startup and homelabbing, I'm interested in poker, working out, running, and snowboarding (catch me at Mammoth and Big Bear during the season). I also enjoy learning Chinese
			and Japanese through media, songs, and studying.
          </p>
        </div>

      </div>
    </div>
  )
}

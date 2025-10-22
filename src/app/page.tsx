"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import type { CSSProperties } from 'react';

export default function Home() {
  const cssVars: CSSProperties & Record<string, string> = {
    '--video-opacity': '0.5',
    '--overlay-opacity': '0.25',
  };
  return (
    <div>
      <Header />
      <main>
        <section
          id="hero"
          className="relative flex items-start pt-16 md:pt-32 md:justify-center w-full h-screen overflow-hidden"
          // Edit these variables to change opacity (values between 0 and 1)
          style={cssVars}
        >
          {/* Background video (autoplay, muted, loop) */}
          <video
            className="absolute inset-0 w-full h-full object-cover -z-20"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            style={{ opacity: 'var(--video-opacity)' }}
          >
            <source src="/videos/orbit-02.mp4" type="video/mp4" />
            {/* No image fallback here so the video URL remains the primary resource. If you want a poster image, add an image file to /public/images and set poster="/images/your-poster.jpg" */}
          </video>

          {/* Overlay to control tint/brightness over the video */}
          <div className="absolute inset-0 -z-10" style={{ backgroundColor: 'rgba(0,0,0,var(--overlay-opacity))' }} aria-hidden="true" />

          {/* Content above the background */}
          <div className="relative z-10 text-center px-4" id="about">
            <div className="flex flex-col gap-4">
              <motion.h1
                className="text-6xl md:text-8xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                ORBITAL
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                The orbital embodies the journey of life itself, an endless orbit of growth, connection and discovery.
              </motion.p>

              <div className="flex gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="https://pancakeswap.finance/swap?chain=bsc&chainOut=bsc&inputCurrency=BNB&outputCurrency=0x218ce180C6B21A355a55CDbb5B3B3BF7AAd5C8A5&exactAmount=&exactField=INPUT" className="font-bold bg-green-700 rounded-2xl text-white px-6 py-3 block">ACQUIRE $ORB</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 260 }}>
                  <Link href="https://www.firescreener.com/bsc/0x218ce180c6b21a355a55cdbb5b3b3bf7aad5c8a5" className="font-semibold border-b rounded-2xl px-6 py-3 block border-t border-green-500">$ORB CHART</Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center px-6 py-32 md:px-16" id="tokenomics">
          <h1 className="mb-8 text-5xl md:text-7xl text-green-500">TOKENOMICS</h1>
          <div className="flex flex-col md:flex-row md:gap-12 w-full max-w-4xl items-center md:items-start">
            <motion.div
              className="w-full md:w-1/3 border-green-700 border-t-2 border-b-2 rounded-2xl px-6 md:px-8 py-6 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl">TOTAL SUPPLY</p>
              <p className="text-3xl md:text-4xl font-bold">100M</p>
            </motion.div>

            <div className="w-full md:flex-1 flex flex-col gap-3 text-lg md:text-xl mt-4 md:mt-0 px-4 md:px-0">
              <motion.div className="flex justify-between w-full" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
                <p>Initial LP</p>
                <h1>65%</h1>
              </motion.div>

              <motion.div className="flex justify-between w-full" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
                <p>Utilities/Partnerships</p>
                <h1>10%</h1>
              </motion.div>

              <motion.div className="flex justify-between w-full" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
                <p>Initial Burn</p>
                <h1>10%</h1>
              </motion.div>

              <motion.div className="flex justify-between w-full" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }}>
                <p>Marketing</p>
                <h1>15%</h1>
              </motion.div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl text-green-500">TAXES</h1>
            <div className="flex flex-col md:flex-row md:gap-12 w-full max-w-4xl items-center md:items-start">
              <div className="w-full md:flex-1 flex flex-col gap-3 text-lg md:text-xl mt-4 md:mt-0 px-4 md:px-0">
                <motion.div className="flex justify-between gap-8" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
                  <p>Marketing</p>
                  <h1>2%</h1>
                </motion.div>

                <motion.div className="flex justify-between gap-8" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
                  <p>$TWC Reflection</p>
                  <h1>2%</h1>
                </motion.div>

                <motion.div className="flex justify-between gap-8" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
                  <p>Auto Burn</p>
                  <h1>1%</h1>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-row gap-8 items-center">
            <Link href="https://www.firescreener.com/bsc/0x218ce180c6b21a355a55cdbb5b3b3bf7aad5c8a5" className=" w-20 h-20 flex items-center justify-center border-2 border-neutral-300 p-4 rounded-xl">
            <Image src="/images/firescreener-logo.png" alt="firescreener" width={50} height={50} />
            </Link>

            <Link href="https://dexscreener.com/bsc/0x53e23f393559057a8c6191b0da09ff065ed85a6a" className="border-2 border-neutral-300 p-4 rounded-xl w-20 h-20 flex items-center justify-center">
            <Image src="/images/dexscreener-b.png" alt="dexscreener" width={50} height={50} />
            </Link>
          </div>

        </section>

        <section className="px-6 md:px-16 py-32 flex flex-col items-center" id="howtobuy">
          <h1 className="text-green-500 text-5xl md:text-7xl mb-4">HOW TO BUY</h1>

          <div className="grid grid-cols-1 gap-8">
            <div className="border-t border-b p-4 md:p-8 rounded-2xl border-green-500">
              <h1 className="text-xl pb-2">GET SOME BNB</h1>
              <p className="md:text-lg">Buy or send some $BNB into your wallet (e.g. MetaMask, TrustWallet) </p>
            </div>

            <div className="border-t border-b p-4 md:p-8 rounded-2xl border-green-500">
              <h1 className="text-xl pb-2">ENTER PANCAKESWAP</h1>
              <p className="md:text-lg">Go to the PancakeSwap DEX in the browser. Paste the $ORB contract address in the output field </p>
            </div>

            <div className="border-t border-b p-4 md:p-8 rounded-2xl border-green-500">
              <h1 className="text-xl pb-2">ACQUIRE $ORB</h1>
              <p className="md:text-lg">Enter the amount of BNB you wish to swap for $ORB and confirm the transaction in your wallet. </p>
            </div>
          </div>
        </section>

        <section className="w-full px-6 md:px-16 py-24" id="faqs">
          <h1 className="text-4xl md:text-5xl text-green-500 text-center mb-8">FAQs</h1>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <details className="group border border-neutral-700 rounded-2xl p-4 bg-neutral-900/50">
              <summary className="cursor-pointer list-none text-lg md:text-xl font-medium leading-6 [&::-webkit-details-marker]:hidden">
                What is this project all about?
              </summary>
              <div className="mt-3 text-sm md:text-base text-neutral-300">
                : Orbital is a community-driven meme token built around the idea that life and crypto both move in cycles. We rise, fall, and keep orbiting toward new discoveries.
              </div>
            </details>

            <details className="group border border-neutral-700 rounded-2xl p-4 bg-neutral-900/50">
              <summary className="cursor-pointer list-none text-lg md:text-xl font-medium leading-6 [&::-webkit-details-marker]:hidden">
                What is the total supply?
              </summary>
              <div className="mt-3 text-sm md:text-base text-neutral-300">
                100,000,000
              </div>
            </details>

            <details className="group border border-neutral-700 rounded-2xl p-4 bg-neutral-900/50">
              <summary className="cursor-pointer list-none text-lg md:text-xl font-medium leading-6 [&::-webkit-details-marker]:hidden">
                Is there any taxes buys and sells
              </summary>
              <div className="mt-3 text-sm md:text-base text-neutral-300">
               5% Buy and 5% Sell tax
              </div>
            </details>

            <details className="group border border-neutral-700 rounded-2xl p-4 bg-neutral-900/50">
              <summary className="cursor-pointer list-none text-lg md:text-xl font-medium leading-6 [&::-webkit-details-marker]:hidden">
                Is there a roadmap or a future plan for the project?
              </summary>
              <div className="mt-3 text-sm md:text-base text-neutral-300">
               : The project is a meme project. Utilities may be developed around it in the near future. Right now, we enjoy the orbit.
              </div>
            </details>

             <details className="group border border-neutral-700 rounded-2xl p-4 bg-neutral-900/50">
              <summary className="cursor-pointer list-none text-lg md:text-xl font-medium leading-6 [&::-webkit-details-marker]:hidden">
                What Chain is Orbital built on?
              </summary>
              <div className="mt-3 text-sm md:text-base text-neutral-300">
               Binance Smart Chain (BSC)
              </div>
            </details>

            <details className="group border border-neutral-700 rounded-2xl p-4 bg-neutral-900/50">
              <summary className="cursor-pointer list-none text-lg md:text-xl font-medium leading-6 [&::-webkit-details-marker]:hidden">
                Where can I buy Orbital tokens?
              </summary>
              <div className="mt-3 text-sm md:text-base text-neutral-300">
               : You can grab Orbital on decentralized exchanges right after launch. Links will be shared on our official channels. Make sure you’re following the right orbit!
              </div>
            </details>
          </div>
        </section>

        <section className="w-full px-6 md:px-16 py-24 bg-neutral-900/30" id="community">
          <h1 className="text-4xl md:text-5xl text-green-500 font-bold text-center mb-8">JOIN THE COMMUNITY</h1>

          <p className="max-w-3xl mx-auto text-center text-neutral-300 mb-8">Join our community on social platforms to stay updated, ask questions, and participate in discussions about the project, tokenomics, and roadmap.</p>

          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <a href="https://x.com/OrbitalBsc" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition">
              <FaTwitter className="text-2xl text-blue-400" />
              <span className="text-sm">Twitter</span>
            </a>

            <a href="https://t.me/Orbitalbsc" aria-label="Telegram" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition">
              <FaTelegramPlane className="text-2xl text-cyan-400" />
              <span className="text-sm">Telegram</span>
            </a>
            {/* 
            <a href="#" aria-label="Discord" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition">
              <FaDiscord className="text-2xl text-violet-400" />
              <span className="text-sm">Discord</span>
            </a>

            <a href="#" aria-label="Medium" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition">
              <FaMedium className="text-2xl text-neutral-200" />
              <span className="text-sm">Medium</span>
            </a> */}
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-700 mt-8">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.jpg" alt="orbital logo" width={48} height={48} />
            <span className="text-lg font-semibold">ORBITALS</span>
          </div>

          <div className="text-sm text-neutral-400">© {new Date().getFullYear()} ORBITALS. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

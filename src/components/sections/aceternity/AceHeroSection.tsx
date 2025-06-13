"use client";

import { motion } from "motion/react";
import image from "../../../assets/pexels-anastasia-shuraeva-8470886.jpg";
import {
  CheckCircle,
  Clock,
  Star,
  Calendar,
  Wrench,
  Phone,
} from "lucide-react";

export function AceHeroSection() {
  const features = [
    { icon: CheckCircle, text: "Certifierade Mekaniker" },
    { icon: Clock, text: "Snabb Service" },
    { icon: Star, text: "5-Stjärnigt Betyg" },
  ];

  const badges = [
    {
      icon: Calendar,
      text: "Boka Tid",
      href: "#contact",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: Wrench,
      text: "Våra Tjänster",
      href: "#features",
      gradient: "from-chart-1 to-chart-3",
    },
    {
      icon: Phone,
      text: "Kontakta Oss",
      href: "#contact",
      gradient: "from-chart-2 to-chart-4",
    },
  ];

  return (
    <section
      id="start"
      className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 lg:py-24"
    >
      {/* Decorative borders */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-border">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-border">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-border">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="text-center space-y-8 max-w-4xl">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="inline bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              Professionell
            </span>{" "}
            <span className="text-foreground">Bilservice</span>
            <br />
            <span className="text-foreground">för</span>{" "}
            <span className="inline bg-gradient-to-r from-chart-1 via-chart-3 to-chart-1 text-transparent bg-clip-text">
              Alla Fordon
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Expert bilservice med certifierade mekaniker, modern utrustning och
          engagemang för kvalitet som håller ditt fordon i toppskick.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8 py-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm md:text-base"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{feature.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Interactive Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {badges.map((badge, index) => (
            <motion.a
              key={badge.text}
              href={badge.href}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden rounded-full bg-gradient-to-r ${badge.gradient} p-[2px] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                <badge.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{badge.text}</span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20 ${badge.gradient}" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Hero Image with CardSpotlight */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 mt-16 w-full max-w-5xl"
      >
        <div className="w-full overflow-hidden rounded-xl border border-border">
          <img
            src={image}
            alt="Professionell bilverkstad med moderna verktyg och utrustning"
            className="aspect-[16/9] h-auto w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted-foreground mb-4">
          Över 1000+ nöjda kunder
        </p>
        <div className="flex justify-center items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-sm font-medium">4.9/5 betyg</span>
        </div>
      </motion.div>
    </section>
  );
}

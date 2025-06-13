import { motion } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        {/* Main Headline */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              Professionell
            </span>{" "}
            Bilservice
          </h1>{" "}
          för{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-chart-1 via-chart-3 to-chart-1 text-transparent bg-clip-text">
              Alla
            </span>{" "}
            Fordon
          </h2>
        </motion.main>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
        >
          Expert bilservice med certifierade mekaniker, modern utrustning och
          engagemang för kvalitet som håller ditt fordon i toppskick.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 md:space-y-0 md:space-x-4"
        >
          <Button className="w-full md:w-1/3">Boka Service</Button>

          <a
            href="tel:+46123456789"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Ring Nu
            <PhoneIcon className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Hero cards sections */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="z-10"
      >
        <HeroCards />
      </motion.div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

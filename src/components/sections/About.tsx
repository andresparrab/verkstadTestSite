import { Statistics } from "./Statistics";
import mechanicImage from "../../assets/Media (1).jpg";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={mechanicImage}
            alt="Professionell mekaniker som arbetar på en bil"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Om{" "}
                </span>
                Företaget
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Sedan 2003 har Stäket Mek & Däck levererat exceptionell
                bilreparation och underhållsservice med precision och omsorg.
                Vårt team av certifierade mekaniker kombinerar decennier av
                erfarenhet med toppmodern diagnostisk utrustning för att lösa
                alla fordonsproblem effektivt. Vi prioriterar transparens,
                kvalitetsdelar och rättvisa priser för att säkerställa
                fullständig kundnöjdhet med varje service.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    Auktoriserad verkstad för alla bilmärken
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    Miljöcertifierade processer och återvinning
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    Omfattande garanti på alla reparationer
                  </span>
                </div>
              </div>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

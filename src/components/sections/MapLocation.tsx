export const MapLocation = () => {
  return (
    <section id="maps" className="container py-24 sm:py-32">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hitta Till{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Oss
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Besök vår moderna bilverkstad belägen i hjärtat av Järfälla. Vi är
            lättillgängliga med goda parkeringsmöjligheter.
          </p>
        </div>

        {/* Full Width Google Maps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-96 lg:h-[400px] rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.5697841644154!2d17.8234567!3d59.4234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCoDI1JzI0LjQiTiAxN8KwNDknMjQuNCJF!5e0!3m2!1sen!2sse!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stäket Mek & Däck Location"
            />
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Klicka på kartan för att öppna i Google Maps och få vägbeskrivning
          </p>
        </div>
      </div>
    </section>
  );
};

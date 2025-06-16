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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4054.1540952337386!2d17.814331778075115!3d59.465140574680326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fa2246c726c7d%3A0x864c111fd0fdba9!2zU2thcnByw6R0dGFydsOkZ2VuIDEsIDE3NiA3NyBKw6RyZsOkbGxh!5e0!3m2!1sen!2sse!4v1750061719107!5m2!1sen!2sse"
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

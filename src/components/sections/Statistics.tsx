interface StatsProps {
  quantity: string;
  description: string;
}

const stats: StatsProps[] = [
  {
    quantity: "21+",
    description: "Års erfarenhet",
  },
  {
    quantity: "1000+",
    description: "Nöjda kunder",
  },
  {
    quantity: "2000+",
    description: "Genomförda reparationer",
  },
  {
    quantity: "4.9/5",
    description: "Kundbetyg",
  },
];

export const Statistics = () => {
  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: StatsProps) => (
          <div key={description} className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              {quantity}
            </h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

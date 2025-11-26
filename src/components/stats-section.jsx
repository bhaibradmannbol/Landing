export default function StatsSection() {
  const stats = [
    { number: '9ms', label: 'Data Latency' },
    { number: '99.9%', label: 'Accuracy' },
    { number: '7+', label: 'Days Battery' },
    { number: '€500K', label: 'Raised' }
  ];

  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

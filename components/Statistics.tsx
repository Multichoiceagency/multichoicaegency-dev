interface Statistic {
    label: string;
    value: string;
    description: string;
  }
  
  interface StatisticsProps {
    statistics: Statistic[];
  }
  
  export default function Statistics({ statistics }: StatisticsProps) {
    return (
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  
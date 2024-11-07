import React from 'react';
import { ArrowRight, BookOpen, Target, Lightbulb,Calendar,Newspaper  } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("src/img/banner1.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <Link
            to="/labs"
            className="inline-flex items-center bg-[#00B4D8] text-white px-6 py-3 rounded-lg hover:bg-[#0096B4] transition-colors"
          >
            Explora Nuestros Laboratorios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-[#00B4D8] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Misión</h2>
                <p className="text-gray-600">
                  Formar profesionales en informática y sistemas capaces de solucionar problemas complejos aplicando el enfoque sistémico, dirigir funciones para el desarrollo de sistemas integrales
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Lightbulb className="h-8 w-8 text-[#00B4D8] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Visión</h2>
                <p className="text-gray-600">
                 FIIS, líder en el desarrollo de la Amazonía y la nación
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="src/img/frontis_fiis.png"
              alt=" "
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore nuestras instalaciones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nuestros laboratorios',
                description: 'Descubra nuestros laboratorios especializados equipados con tecnología punta',
                link: '/labs',
                icon: BookOpen,
              },
              {
                title: 'Programar una visita',
                description: 'Planifique su visita a nuestras instalaciones y experimente la innovación de primera mano',
                link: '/visit',
                icon: Calendar,
              },
              {
                title: 'Últimas noticias',
                description: 'Mantente al día de nuestros últimos logros y avances',
                link: '/news',
                icon: Newspaper,
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <item.icon className="h-8 w-8 text-[#00B4D8] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-[#00B4D8] inline-flex items-center">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
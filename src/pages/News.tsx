import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'Llega nuevo equipo al Laboratorio de Robótica',
    date: '2024-03-15',
    author: 'Dra. Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Nuestro laboratorio de robótica ha recibido equipos de última generación, incluyendo brazos robóticos avanzados y sistemas impulsados por IA.',
  },
  {
    id: 2,
    title: 'Éxito en la Exhibición de Investigación Estudiantil',
    date: '2024-03-10',
    author: 'Prof. Michael Chen',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Los estudiantes presentaron sus innovadores proyectos de investigación en el Simposio Anual de Tecnología, recibiendo elogios de expertos de la industria.',
  },
  {
    id: 3,
    title: 'Alianza con Líder de la Industria Tecnológica',
    date: '2024-03-05',
    author: 'Decano Robert Wilson',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop',
    excerpt: "Estamos emocionados de anunciar una nueva alianza que proporcionará a nuestros estudiantes equipos de estándar industrial y oportunidades de pasantías.",
  },
];

const News = () => {
  return (
    <div className="py-12">
      {/* Encabezado de Noticias */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Últimas Noticias</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Mantente actualizado con los últimos desarrollos, logros y eventos de nuestros laboratorios de la facultad.
          </p>
        </div>
      </section>

      {/* Cuadrícula de Noticias */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-[#00B4D8] hover:text-[#0096B4] transition-colors inline-flex items-center">
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;

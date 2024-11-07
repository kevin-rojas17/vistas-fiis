import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Cpu, Database } from 'lucide-react';

const labs = [
  {
    id: 1,
    name: 'Laboratorio de redes informáticas',
    description: 'Equipo de redes de última generación para adquirir experiencia práctica con protocolos de red y seguridad modernos',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
    icon: Monitor,
    equipment: ['Cisco Routers', 'Network Switches', 'Security Firewalls', 'Network Analyzers'],
    software: ['Wireshark', 'Packet Tracer', 'GNS3'],
  },
  {
    id: 2,
    name: 'Laboratorio de Sistemas Digitales',
    description: 'Instalación de diseño digital avanzado y desarrollo de sistemas embebidos',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop',
    icon: Cpu,
    equipment: ['FPGA Boards', 'Microcontrollers', 'Logic Analyzers', 'Oscilloscopes'],
    software: ['Xilinx Vivado', 'Arduino IDE', 'Quartus Prime'],
  },
  {
    id: 3,
    name: 'Laboratorio de Sistemas de Bases de Datos',
    description: 'Entorno moderno de gestión de bases de datos y procesamiento de big data',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    icon: Database,
    equipment: ['High-Performance Servers', 'Storage Arrays', 'Workstations'],
    software: ['Oracle', 'MongoDB', 'PostgreSQL', 'Hadoop'],
  },
];

const Labs = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Nuestros laboratorios</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore nuestras vanguardistas instalaciones equipadas con la última tecnología para ofrecer experiencias prácticas de aprendizaje a nuestros estudiantes.
          </p>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <div key={lab.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                  <lab.icon className="h-6 w-6 text-[#00B4D8]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{lab.name}</h3>
                <p className="text-gray-600 mb-4">{lab.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Equipamiento</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {lab.equipment.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Software</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {lab.software.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/visit"
                  className="inline-flex items-center text-[#00B4D8] hover:text-[#0096B4] transition-colors"
                >
                  Programar una visita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Labs;
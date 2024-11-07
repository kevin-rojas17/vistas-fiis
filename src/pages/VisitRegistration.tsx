import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

const VisitRegistration = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle the form submission
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Registro efectuado con éxito</h2>
          <p className="text-gray-600 mb-4">
           Gracias por registrarse. En breve le enviaremos un correo electrónico de confirmación.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-[#00B4D8] hover:text-[#0096B4] transition-colors"
          >
            Registrar otra visita
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Visit Registration Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Programar una visita</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
           Conozca de primera mano nuestros laboratorios de última generación. Regístrese para una visita y explore nuestras instalaciones.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Información Personal</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
                  Institución/Organización
                </label>
                <input
                  type="text"
                  id="institution"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                />
              </div>
            </div>

            {/* Visit Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Detalles de la Visita</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha Preferida
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="date"
                      id="date"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Hora Preferida
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select
                      id="time"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                    >
                      <option value="">Selecciona una hora</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-1">
                  Tamaño del Grupo
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    id="groupSize"
                    min="1"
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                    placeholder="Número de visitantes"
                  />
                </div>
              </div>
              <div>{/*
                <label htmlFor="labs" className="block text-sm font-medium text-gray-700 mb-1">
                  Laboratorios de Interés
                </label>
                <select
                  id="labs"
                  multiple
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                  size={4}
                >
                  <option value="network">Laboratorio de Redes de Computadoras</option>
                  <option value="digital">Laboratorio de Sistemas Digitales</option>
                  <option value="database">Laboratorio de Sistemas de Bases de Datos</option>
                  <option value="robotics">Laboratorio de Robótica</option>
                  <option value="ai">Laboratorio de Inteligencia Artificial</option>
                  <option value="security">Laboratorio de Ciberseguridad</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Mantén presionada Ctrl/Cmd para seleccionar varios laboratorios</p>
                */}
              </div>
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                  Propósito de la Visita
                </label>
                <textarea
                  id="purpose"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00B4D8] focus:border-[#00B4D8]"
                  placeholder="Por favor describe el propósito de tu visita..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#00B4D8] text-white py-3 px-4 rounded-md hover:bg-[#0096B4] transition-colors"
            >
              Enviar Registro
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VisitRegistration;
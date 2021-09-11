"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "productos",
      [
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Licuadora Aliada + Vaso picatodo",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Batidora de 5 Velocidades",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Tetera eléctrica vidrio",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Olla Arrocera 3 Tazas 0.9 Libras",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Licuadora acero inox 400w",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Válvula de seguridad para ollas a presión",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Válvula de seguridad para ollas a presión",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Válvula de seguridad para ollas a presión",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Válvula de seguridad para ollas a presión",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lonchera eléctrica verde",
          precio: 44030,
          descripcion: `¡Evita las filas en los microondas y come como si estuvieras en casa con nuestra lonchera eléctrica!
          Conecta tu lonchera a un tomacorriente y en minutos podrás disfrutar tus preparaciones frescas y saludables.
          
          • La lonchera tiene una capacidad de 1.05 litros.
          •Tiene una potencia de 40W y su voltaje de operación es de 110 -120 Vac.
          • Su frecuencia de operación es de 60 Hz.
          • El cable de alimentación se puede retirar de la lonchera para facilitar su transporte.
          • Incluye 1 recipiente interno con tapa para que guardes tu ensalada u otro alimento de forma independiente.
          •Incluye una cuchara plástica.
          `,
          materiales: `• Plástico PP: 80%.
          • Partes eléctricas. 20%.`,
          garantia: "Garantía de 2 años.",
          recomendaciones: "No lavar con elementos corrosivos.",
          tamaño: null,
          categoria_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("productos", null, {});
  },
};

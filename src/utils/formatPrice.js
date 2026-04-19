/**
 * Formatea un número como precio en pesos chilenos
 * @param {number} value - Valor numérico a formatear
 * @returns {string} - Precio formateado ej: 25.000
 */
export const formatPrice = (value) => {
  return value.toLocaleString("es-CL");
};

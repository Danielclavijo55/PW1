import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RobotDetail = ({ robotId }) => {
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRobotDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/robots/${robotId}`);
        setRobot(response.data);
      } catch (err) {
        setError('Error al cargar los detalles del robot.');
        console.error('Error fetching robot details:', err);
      }
    };

    if (robotId) {
      fetchRobotDetail();
    }
  }, [robotId]);

  if (!robot) return null;

  // Función para reemplazar 'blob' por 'raw' en la URL de la imagen
  const getImageUrl = (url) => {
    return url ? url.replace('blob', 'raw') : null;
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{robot.nombre}</h2>
      <img 
        src={getImageUrl(robot.imagen)}
        alt={robot.nombre} 
        className="w-full rounded-lg mb-4"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/150?text=Robot+Image';
        }}
      />
      <p className="mb-2"><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
      <p className="mb-2"><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
      <p className="mb-2"><strong>Humor:</strong> {robot.humor}</p>
    </div>
  );
};

export default RobotDetail;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const RobotDetail = ({ robotId }) => {
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState('');
  const { t } = useTranslation();

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
      <p className="mb-2"><strong>{t('details.manufacturingYear')}:</strong> {robot.añoFabricacion}</p>
      <p className="mb-2"><strong>{t('details.processingCapacity')}:</strong> {robot.capacidadProcesamiento}</p>
      <p className="mb-2"><strong>{t('details.humor')}:</strong> {robot.humor}</p>
    </div>
  );
};

export default RobotDetail;
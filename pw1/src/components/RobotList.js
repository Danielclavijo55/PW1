import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import robotBanner from '../assets/robot-banner.png';
import RobotDetail from './RobotDetail';

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState('');
  const [selectedRobotId, setSelectedRobotId] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await axios.get('http://localhost:3001/robots');
        setRobots(response.data);
      } catch (err) {
        setError('Error al cargar los robots. Por favor, intente de nuevo más tarde.');
        console.error('Error fetching robots:', err);
      }
    };

    fetchRobots();
  }, []);

  const handleRobotClick = (id) => {
    setSelectedRobotId(id);
  };

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">{t('header')}</h1>
      <div className="mb-6 flex justify-center">
        <img src={robotBanner} alt="Robot Lovers Banner" className="w-full max-w-4xl rounded-lg" />
      </div>
      <div className="flex">
        <div className="w-2/3 pr-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">{t('table.id')}</th>
                  <th className="py-3 px-4 text-left">{t('table.name')}</th>
                  <th className="py-3 px-4 text-left">{t('table.model')}</th>
                  <th className="py-3 px-4 text-left">{t('table.manufacturer')}</th>
                </tr>
              </thead>
              <tbody>
                {robots.map((robot, index) => (
                  <tr 
                    key={robot.id} 
                    className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} cursor-pointer hover:bg-gray-200`}
                    onClick={() => handleRobotClick(robot.id)}
                  >
                    <td className="py-3 px-4 border-b">{robot.id}</td>
                    <td className="py-3 px-4 border-b">{robot.nombre}</td>
                    <td className="py-3 px-4 border-b">{robot.modelo}</td>
                    <td className="py-3 px-4 border-b">{robot.empresaFabricante}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/3 pl-4">
          {selectedRobotId && <RobotDetail robotId={selectedRobotId} />}
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-gray-600">
        {t('contact')}
      </p>
    </div>
  );
};

export default RobotList;
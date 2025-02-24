import React from 'react';
import { Cuboid as Cube, Cherry as Sphere, Cylinder, Move, Paintbrush, Download, Trash2 } from 'lucide-react';
import { useModelStore } from '../store/modelStore';
import * as THREE from 'three';

export const Toolbar: React.FC = () => {
  const addObject = useModelStore((state) => state.addObject);

  const createCube = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x44aa88 });
    const cube = new THREE.Mesh(geometry, material);
    addObject(cube);
  };

  const createSphere = () => {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x44aa88 });
    const sphere = new THREE.Mesh(geometry, material);
    addObject(sphere);
  };

  const createCylinder = () => {
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x44aa88 });
    const cylinder = new THREE.Mesh(geometry, material);
    addObject(cylinder);
  };

  return (
    <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-2">
      <div className="flex flex-col gap-2">
        <button
          onClick={createCube}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Add Cube"
        >
          <Cube className="w-6 h-6" />
        </button>
        <button
          onClick={createSphere}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Add Sphere"
        >
          <Sphere className="w-6 h-6" />
        </button>
        <button
          onClick={createCylinder}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Add Cylinder"
        >
          <Cylinder className="w-6 h-6" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Move Tool"
        >
          <Move className="w-6 h-6" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Material Editor"
        >
          <Paintbrush className="w-6 h-6" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Export Model"
        >
          <Download className="w-6 h-6" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Delete Selected"
        >
          <Trash2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
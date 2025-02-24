import { create } from 'zustand';
import * as THREE from 'three';

interface ModelState {
  objects: THREE.Mesh[];
  selectedObject: THREE.Mesh | null;
  addObject: (object: THREE.Mesh) => void;
  setSelectedObject: (object: THREE.Mesh | null) => void;
  removeObject: (object: THREE.Mesh) => void;
}

export const useModelStore = create<ModelState>((set) => ({
  objects: [],
  selectedObject: null,
  addObject: (object) => set((state) => ({ objects: [...state.objects, object] })),
  setSelectedObject: (object) => set({ selectedObject: object }),
  removeObject: (object) =>
    set((state) => ({
      objects: state.objects.filter((obj) => obj !== object),
      selectedObject: state.selectedObject === object ? null : state.selectedObject,
    })),
}));
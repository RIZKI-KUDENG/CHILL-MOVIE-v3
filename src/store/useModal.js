import { create } from 'zustand';

export const useModal = create((set) => ({
  activeModal: {
    name: null,
    data: null
  }, 
  onOpenModal: (ModalName, movieData = null) => 
    set({
        activeModal: {
            name: ModalName,
            data: movieData
        }
    }),
    onClose: () => set({ activeModal: { name: null, data: null } }),
}));
// stores/modalStore.js
import { create } from 'zustand'

interface ModalState {
  // isOpen: boolean
  component: JSX.Element | null
  openModal: (component: JSX.Element) => void
  closeModal: () => void
}

const useModalStore = create<ModalState>((set) => {
  return {
    // isOpen: false,
    component: null,
    openModal: (component: JSX.Element) => set({ component }),
    closeModal: () => set({ component: null }),
  }
})

export default useModalStore

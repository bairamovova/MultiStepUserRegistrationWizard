import { persist } from 'zustand/middleware';
import { create } from 'zustand';

export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  username: string;
  activeStep: number;
  setFormData: (newData: Partial<FormState>) => void;
  setActiveStep: (step: number) => void;
  resetForm: () => void;
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      username: '',
      activeStep: 0,
      setFormData: (newData) => set((state) => ({ ...state, ...newData })),
      setActiveStep: (step) => set({ activeStep: step }),
      resetForm: () =>
        set({
          firstName: '',
          lastName: '',
          email: '',
          street: '',
          city: '',
          state: '',
          zipCode: '',
          username: '',
          activeStep: 0,
        }),
    }),
    {
      name: 'form-storage',
    }
  )
);

import create from 'zustand';

const useStore = create((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  },
}));

export default useStore;

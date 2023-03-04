import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCounterStore = create((set) => ({
  countPoke: 0,
  todos: [],
  increasePoke: () => set((state) => ({ countPoke: state.countPoke + 1 })),
  decreasePoke: () => set((state) => ({ countPoke: state.countPoke - 1 })),
  setCountPoke: async () => {
    //set({countPoke: 5})
    try {
      const countPokee = await AsyncStorage.getItem('countPoke')
      if (countPokee !== null) {
        set((state) => ({ countPoke: countPokee }))
      }
    } catch (e) {
      console.log("---------------------");
      console.log(e);
      console.log("---------------------");
      // error reading value
    }

  },
  addTodo: (id) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          identificador:id
        } 
      ],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.identificador !== id),
    }));
  },
}))

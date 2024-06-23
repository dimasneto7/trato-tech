import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const carrinhoSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some((item) => item.id === payload)
      // Adiciona
      if (!temItem)
        return [
          ...state,
          {
            id: payload,
            quantidade: 1,
          },
        ]
      // Remove
      return state.filter((item) => item.id !== payload)
    },
  },
})

export const { mudarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer

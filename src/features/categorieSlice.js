import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchcategories,
  fetchcategoriesPagination,
} from "../services/categorieservice";

export const getCategories = createAsyncThunk(
  "categorie/getCategories", //Type Action
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchcategories(); // call frontend service
      return res.data; //payload
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCategoriesPagination = createAsyncThunk(
  "categorie/getCategoriesPagination",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { page, limit, searchTerm } = getState().storecategories;
    try {
      const res = await fetchcategoriesPagination(page, limit, searchTerm);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const categorieSlice = createSlice({
  name: "categorie",
  initialState: {
    categories: [],
    categorie: {},
    isLoading: false,
    success: null,
    error: null,
    page: 1,
    limit: 10,
    tot: 0,
    searchTerm: "",
  },

  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },

  extraReducers: (builder) => {
    //get categories
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur");
      })

      //Paginate
      .addCase(getCategoriesPagination.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategoriesPagination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload.products;
        state.tot = action.payload.totalPages;
      })
      .addCase(getCategoriesPagination.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur");
      });
  },
});
export default categorieSlice.reducer;
export const { setPage, setLimit, setSearchTerm } = categorieSlice.actions;

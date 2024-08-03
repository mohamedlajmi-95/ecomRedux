import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchscategories,
  fetchscategoriesPagination,
} from "../services/scategorieservice";

export const getScategories = createAsyncThunk(
  "scategorie/getScategories", //Type Action
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchscategories(); // call frontend service
      return res.data; //payload
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getScategoriesPagination = createAsyncThunk(
  "scategorie/getScategoriesPagination",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { page, limit, searchTerm } = getState().storescategories;
    try {
      const res = await fetchscategoriesPagination(page, limit, searchTerm);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const scategorieSlice = createSlice({
  name: "scategorie",
  initialState: {
    scategories: [],
    scategorie: {},
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
    //get scategories
    builder
      .addCase(getScategories.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getScategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.articles = action.payload;
      })
      .addCase(getScategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur");
      })

      //Paginate
      .addCase(getScategoriesPagination.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getScategoriesPagination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.articles = action.payload.products;
        state.tot = action.payload.totalPages;
      })
      .addCase(getScategoriesPagination.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur");
      });
  },
});
export default scategorieSlice.reducer;
export const { setPage, setLimit, setSearchTerm } = scategorieSlice.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetcharticles,
  fetcharticlesPagination,
} from "../services/articleservice";

export const getArticles = createAsyncThunk(
  "article/getArticles", //Type Action
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetcharticles(); // call frontend service
      return res.data; //payload
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getArticlesPagination = createAsyncThunk(
  "article/getArticlesPagination",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { page, limit, searchTerm } = getState().storearticles;
    try {
      const res = await fetcharticlesPagination(page, limit, searchTerm);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    articles: [],
    article: {},
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
    //get articles
    builder
      .addCase(getArticles.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.articles = action.payload;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur");
      })

      //Paginate
      .addCase(getArticlesPagination.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getArticlesPagination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.articles = action.payload.products;
        state.tot = action.payload.totalPages;
      })
      .addCase(getArticlesPagination.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur");
      });
  },
});
export default articleSlice.reducer;
export const { setPage, setLimit, setSearchTerm } = articleSlice.actions;

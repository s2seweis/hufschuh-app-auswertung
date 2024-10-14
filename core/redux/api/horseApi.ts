import { baseApi } from "./baseApi";
import { Horse, ListResultBase } from "../types";

export const horseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    horse: builder.query({
      query: ( horseId : string ) => {
        return {
          url: `horses/${horseId}`,
          method: "GET",
        };
      },
      providesTags: (result) => {
        return [{ type: "Horse", id: result?.id }];
      },
    }),
    horses: builder.query<ListResultBase & { results: Horse[] }, string>({
      query: (userId) => {
        return {
          url: `/horses`,
          method: "GET",
        };
      },
      providesTags: () => {
        return [{ type: "Horse", id: "LIST" }];
      },
    }),

    updateHorse: builder.mutation<
      Partial<Horse>,
      {
        horseId: string;
        data: Partial<Horse>;
      }
    >({
      query: (options) => {
        return {
          url: `horses/${options.horseId}`,
          method: "PATCH",
          body: options.data,
        };
      },
      invalidatesTags: (result) => [
        // @ts-ignore
        { type: "Horse", id: result.id },
        { type: "Horse", id: "LIST" },
      ],
    }),
    deleteHorse: builder.mutation({
      query: (options) => {
        return {
          url: `horses/${options.horseId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Horse", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useHorsesQuery,
  useHorseQuery,
  useUpdateHorseMutation,
  useDeleteHorseMutation,
} = horseApi;

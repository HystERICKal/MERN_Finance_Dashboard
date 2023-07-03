//Boilerplate for redux toolkit query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//"createApi" will allow one to make endpoints to call the backend
//So data can be grabbed from the backend using this particular setup
export const api = createApi({
  //"fetchBaseQuery" is a function from Redux toolkit query
  //In the baseURL, the http url in env.local is passed in
  //That is the url that will be called everytime an API call is made
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),

  //So "main" is the name of the reducer and the slice in redux
  //It is just the name for this whole particular API call
  reducerPath: "main",

  //"tagTypes are used to keep information and it represents the name of each API data"
  //Grabbed info is saved in this "Kpis" tag...
  tagTypes: ["Kpis"],

  //In the "endpoint" is where the API calls are actually created
  endpoints: (build) => ({
    //So basically what is happening is, the endpoint (getKpis) is used,
    //... and a call is made, using the baseURL above, so in this case, the api call is made to;
    //... (baseurlname)/kpi/kpis/

    //"getKpis" is the first endpoint
    //This sets up a function that grabs the Key Perfomance Indicators (Kpis)
    //All this information that has been grabbed will be saved in the "Kpis" tag
    //If one needs to create another API call, just copy and paste the getKpis call below and use it to create the other API call
    //The "<void, void>" makes it so that we can use the endpoint without any errors, if we have no arguments yet
    //If one uses the endpoint without the "<void, void>" it throws an error asking for arguments
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/",
      //Grabbed info is saved in this "Kpis" tag...
      providesTags: ["Kpis"],
    }),
  }),
});

//"useGetKpisQuery" is derived from the "getKpis" call above
//...and just has a suffix of "use" and a prefix of "Query"
//That is how you grab the API hook
export const { useGetKpisQuery } = api;

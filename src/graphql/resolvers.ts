import axios from 'axios';

import { IPeopleResponse } from '../interfaces/IPeopleResponse';

export const resolvers = {
  Query: {
    getPeople: async (_: void, args: { page: string }) => {
      try {
        const { page } = args;

        const peopleResponse: IPeopleResponse = await (
          await axios.get(`${process.env.STAR_WARS_API_URL}/people/?page=${page}`)
        ).data;

        const { next, results } = peopleResponse;

        const people = results.map(({ name, height, mass, gender, homeworld }) => {
          return { name, height, mass, gender, homeworld };
        });

        return { next, people };
      } catch (err: unknown) {
        console.error(`Get people error: ${err}`);
        const { message } = err as Error;
        throw new Error(message);
      }
    },
    searchPeople: async (_: void, args: { personsName: string }) => {
      try {
        const { personsName } = args;

        const peopleResponse: IPeopleResponse = await (
          await axios.get(`${process.env.STAR_WARS_API_URL}/people/?search=${personsName}`)
        ).data;

        const { next, results } = peopleResponse;

        const people = results.map(({ name, height, mass, gender, homeworld }) => {
          return { name, height, mass, gender, homeworld };
        });

        return { next, people };
      } catch (err: unknown) {
        console.error(`Get person error: ${err}`);
        const { message } = err as Error;
        throw new Error(message);
      }
    },
  },
};

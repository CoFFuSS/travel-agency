import { gql } from '@apollo/client';

import createApolloClient from '@/apollo-client';
import { Country, Data } from '@/types/countriesResponses';

export async function getData(): Promise<Country[]> {
  const client = createApolloClient();
  const { data }: { data: Data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return data.countries.slice(0, 4);
}

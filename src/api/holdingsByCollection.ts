import { gql } from "@apollo/client";
import ApolloClient from "./ApolloClient";

const GET_HOLDINGS_BY_COLLECTION = (collection: string) => {
  const queryString = `
    query holdingsByCollection {     
        collections(where: {id: "${collection}"}) {
            id
            name
            tokens {
                id
                holdings {
                    timeHolded
                    from
                    owner {
                        id
                    }
                }
            }
        }
    }`;
  return queryString;
};

export const getTopHolders = async (chain_id, collection: string, percentage: number) => {
  const source = "orbitSubGraph";
  const result = (
    await ApolloClient(chain_id, source).query({
      query: gql(GET_HOLDINGS_BY_COLLECTION(collection)),
    })
  ).data;

  // results where timeHolded is null should be changed to have timeHolded = currentTimestamp - from field
  const currentTimestamp = new Date().getTime();
  const holdings = result.collections[0].tokens.map((token) => {
    const holding = token.holdings[0];
    if (holding.timeHolded === null) {
      holding.timeHolded = currentTimestamp - holding.from;
    }
    return holding;
  });

  // results where timeHolded is 0 should be deleted
  const holdingsWithTimeHolded = holdings.filter((holding) => holding.timeHolded > 0);

  // should make mean of time holded grouped by owner id
  const meanTimeHoldedByOwner = holdingsWithTimeHolded.reduce((acc, holding) => {
    const ownerId = holding.owner.id;
    if (acc[ownerId]) {
      acc[ownerId] += holding.timeHolded;
    } else {
      acc[ownerId] = holding.timeHolded;
    }
    return acc;
  }, {});

  // sort owners by time holded
  const sortedOwners = Object.keys(meanTimeHoldedByOwner)
    .map((ownerId) => {
      return {
        ownerId,
        timeHolded: meanTimeHoldedByOwner[ownerId],
      };
    })
    .sort((a, b) => {
      return b.timeHolded - a.timeHolded;
    });

  // get top percentage of owners
  const topOwners = sortedOwners.slice(0, Math.floor(sortedOwners.length * percentage));

  return topOwners;
};

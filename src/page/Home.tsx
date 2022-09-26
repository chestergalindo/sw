import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query Query($after: String) {
    allPeople(first: 10, after: $after) {
      totalCount
      pageInfo {
        endCursor
      }
      people {
        name
        filmConnection {
          films {
            title
            director
            producers
            releaseDate
            planetConnection {
              totalCount
              planets {
                name
                population
              }
            }
          }
        }
      }
    }
  }
`;

export const Home = () =>
{
  const { loading, error, data, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { after: null },
  } );
  console.log({data})

  if (error) return <div>errors</div>;
  if ( loading || !data ) return <div>loading</div>;

  return (
      <>
        {data?.allPeople.people.map((person: { name: string }) => {
          return <p style={{ color: 'red' }}>{person.name}</p>;
        })}
        <button
          onClick={() => {
            const { endCursor } = data.allPeople.pageInfo;
            fetchMore({
              variables: { after: endCursor },
              updateQuery: ( prevResult, { fetchMoreResult } ) =>
              {
                // console.log({prevResult, fetchMoreResult})
                fetchMoreResult.allPeople.people = [
                  ...prevResult.allPeople.people,
                  ...fetchMoreResult.allPeople.people,
                ];
                return fetchMoreResult;
              },
            });
          }}
        >
          more
        </button>
      </>
    );
};

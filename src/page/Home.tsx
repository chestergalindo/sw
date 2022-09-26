import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '../utils/query/get_locations.gql';
import {ModalInformation} from '../components/Modal'

export const Home = () =>
{
  const { loading, error, data, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { after: null },
  } );

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
            updateQuery: (prevResult, { fetchMoreResult }) => {
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
      <ModalInformation />
    </>
  );
};

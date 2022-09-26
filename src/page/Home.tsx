import { useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ModalInformation } from '../components/Modal';
import { GET_LOCATIONS } from '../utils/query/get_locations.gql';
import logo from '../utils/assets/Star_Wars.png';
import { Key } from 'react';

export const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { after: null },
  } );

  const LoadButton = () => {
    return data?.allPeople.people.length >= data?.allPeople.totalCount ? (
      <div style={{ marginTop: '16px'}}> cargada la totalidad de personajes </div>
    ) : (
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
        style={{ backgroundColor: '#000000', border: '1px solid #ffe81f', color: '#fff', cursor: 'pointer', borderRadius: '5px', marginTop: '16px' }}
      >
        Mas personajes ....
      </button>
    );
  }

  if (error) return <div>errors</div>;

  return (
    <div
      style={{
        backgroundColor: '#000000',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <img src={logo} alt="logo" style={{ maxWidth: '70%' }} />
      {(loading || !data) && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color="success" size="50" />
        </Box>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: data ? 'repeat(3, 250px)' : '',
          maxWidth: '800px',
          justifyItems: 'center',
          alignContent: 'center',
          margin: 'auto',
        }}
      >
        {data?.allPeople.people.map((person: { name: string }, index: Key | null | undefined) => (
            <div key={index}>
              <ModalInformation name={person.name} />
            </div>
          )
        )}
      </div>
      <LoadButton />
    </div>
  );
};

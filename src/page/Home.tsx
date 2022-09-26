import { useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ModalInformation } from '../components/Modal';
import { GET_LOCATIONS } from '../utils/query/get_locations.gql';
import logo from '../utils/assets/Star_Wars.png';
import { Key } from 'react';
import { People } from '../utils/types';
import { LoadButton } from '../components/LoadButton';

export const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_LOCATIONS, { variables: { after: null }, } );

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
        {data?.allPeople.people.map((person: People, index: Key) => (
          <div key={index}>
            <ModalInformation person={person} />
          </div>
        ))}
      </div>
      <LoadButton data={data} fetchMore={fetchMore} />
    </div>
  );
};

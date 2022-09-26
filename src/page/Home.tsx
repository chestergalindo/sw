import { Key } from 'react';
import { useQuery } from '@apollo/client';
import styles from './style.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ModalInformation } from '../components/Modal';
import { GET_LOCATIONS } from '../utils/query/get_locations.gql';
import logo from '../utils/assets/Star_Wars.png';
import { People } from '../utils/types';
import { LoadButton } from '../components/LoadButton';

export const Home = () =>
{
  const { loading, error, data, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { after: null },
  });

  if (error) return <div>errors</div>;

  return (
    <div className={styles.bodyInformation}>
      <img src={logo} alt="logo" style={{ maxWidth: '70%' }} />
      {(loading || !data) && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color="success" size="50" />
        </Box>
      )}
      <div className={styles.listCharacter}>
        {data?.allPeople.people.map((person: People, index: Key) => (
          <div key={index}>
            <ModalInformation person={ person } />
          </div>
        ))}
      </div>
      <LoadButton data={data} fetchMore={fetchMore} />
    </div>
  );
};

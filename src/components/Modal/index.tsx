import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { People, Film } from '../../utils/types';
import { style, ButtonLink } from './style'

export const ModalInformation = (props: People) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const titleNames: string[] = [];
  const directorNames: string[] = [];
  let producersNames: string[] = [];
  let planetNames: any[] = [];

  props.person.filmConnection.films.forEach(
    (film: Film) => {
      const valuePlanet: string[] = [];
      const valueProducerNames: string[] = [];
      titleNames.push(film.title);
      directorNames.push(film.director);
      planetNames = valuePlanet.concat(film.planetConnection.planets);
      producersNames = valueProducerNames.concat(film.producers);
    },
  );

  return (
    <div>
      <ButtonLink onClick={handleOpen}>{props.person.name}</ButtonLink>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {props.person.name}
          </Typography>

          <Typography id="modal-modal-title" variant="h6" sx={{ mt: 2 }} component="h2">
            Peliculas
          </Typography>
          {titleNames.map((title, index) => (
            <div key={index}>
              <button  style={{ cursor: 'pointer', display: 'flex', placeItems: "center" }} onClick={() => console.log('click')}>
                <Typography id="modal-modal-description">
                  {title}
                </Typography>
              </button>
            </div>
          ))}

          <Typography id="modal-modal-title" variant="h6" sx={{ mt: 2 }} component="h2">
            Director
          </Typography>
          {directorNames.map((directorName, index) => (
            <div key={index}>
              <Typography id="modal-modal-description" sx={{ ml: 2 }}>
                {directorName}
              </Typography>
            </div>
          ))}

          <Typography id="modal-modal-title" variant="h6" sx={{ mt: 2 }} component="h2">
            Planetas
          </Typography>
          {planetNames.map((planet, index) => (
            <div key={index}>
              <Typography id="modal-modal-description" sx={{ ml: 2 }}>
                {planet.name}
              </Typography>
            </div>
          ))}

          <Typography id="modal-modal-title" variant="h6" sx={{ mt: 2 }} component="h2">
            Productores
          </Typography>
          {producersNames.map((producerName, index) => (
            <div key={index}>
              <Typography id="modal-modal-description" sx={{ ml: 2 }}>
                {producerName}
              </Typography>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
};
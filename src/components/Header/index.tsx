import './style.css';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Header = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://swapi-graphql.netlify.app" />
    </Helmet>
  </>
);

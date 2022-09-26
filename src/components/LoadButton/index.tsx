import { Root } from '../../utils/types';
import style from './style.module.css';

export const LoadButton = (props: Root ) =>
{
    return props?.data?.allPeople.people.length >= props?.data?.allPeople.totalCount ? (
      <div className={style.loadButtonAll}>
        cargada la totalidad de personajes
      </div>
    ) : (
      <button
        onClick={() => {
          const { endCursor } = props.data.allPeople.pageInfo;
          props.fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult: { allPeople: { people: any }; }, { fetchMoreResult }) => {
              fetchMoreResult.allPeople.people = [
                ...prevResult.allPeople.people,
                ...fetchMoreResult.allPeople.people,
              ];
              return fetchMoreResult;
            },
          });
          } }
        className={style.loadButton}
      >
        Mas personajes ....
      </button>
    );
  }


export const LoadButton = (props: { data: { allPeople: { people: string | any[]; totalCount: number; pageInfo: { endCursor: any; }; }; }; fetchMore: ( arg0: { variables: { after: any; }; updateQuery: ( prevResult: any, { fetchMoreResult }: { fetchMoreResult: any; } ) => any; } ) => void; }) =>
{
    return props?.data?.allPeople.people.length >= props?.data?.allPeople.totalCount ? (
      <div style={{ marginTop: '16px'}}> cargada la totalidad de personajes </div>
    ) : (
      <button
        onClick={() => {
          const { endCursor } = props.data.allPeople.pageInfo;
          props.fetchMore({
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
import Keyword from './Keyword';

const KeywordsList = ({ keywords, onClick }) => {
  const words = keywords.map((keyword, count) => {
    return <Keyword word={keyword} onClick={onClick} key={'a' + count} />;
  });
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      }}
    >
      {words}
    </div>
  );
};

export default KeywordsList;

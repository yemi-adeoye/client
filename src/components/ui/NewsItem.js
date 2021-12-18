import Badge from 'react-bootstrap/Badge';

const NewsItem = ({ story, key, id }) => {
  const { headline, author, paragraphs, date, url } = story;
  const keyHeadline = headline.split(':')[0];
  return (
    <div className='story shadow' id={id} key={key}>
      <div className='head'>
        <h1>
          <a href={url}>{headline}</a>
        </h1>
        {author && (
          <span>
            {' '}
            <i className='fas fa-user'></i> {author}
          </span>
        )}
        {date && (
          <span>
            {' '}
            <i className='fas fa-clock'></i> {date}
          </span>
        )}
        <span>
          {' '}
          <Badge variant='secondary'> {keyHeadline}</Badge>
        </span>
      </div>
      <div className='body'>
        {paragraphs.map((paragraph, count) => {
          const keyParagraphs = `p-${count}`;
          return <p key={keyParagraphs}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};

export default NewsItem;

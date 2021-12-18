import NewsItem from './NewsItem';

const News = ({ stories }) => {
  return stories.map((story, count) => {
    const { headline } = story;
    const key = headline.split(':')[0];
    return (
      <NewsItem key={`${key}-${count}`} id={`${key}-${count}`} story={story} />
    );
  });
};

export default News;

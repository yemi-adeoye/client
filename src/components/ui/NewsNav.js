import Nav from 'react-bootstrap/Nav';

const NewsNav = ({ stories, count }) => {
  const navItems = stories.map((story, count) => {
    const { headline } = story;
    const keyHeadline = headline.split(':')[0];
    return (
      <Nav.Link
        key={'a' + count}
        href={`#${keyHeadline}-${count}`}
        style={{ color: '#999' }}
      >
        {headline}
      </Nav.Link>
    );
  });
  return <Nav className='flex-column'>{navItems}</Nav>;
};

export default NewsNav;

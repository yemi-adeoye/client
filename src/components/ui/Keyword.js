const Keyword = ({ word, onClick }) => {
  return (
    <span
      className='m-4'
      style={{
        border: '1px solid #333',
        borderRadius: '5px',
        width: 'auto',
        padding: '5px',
        float: 'none',
        marginTop: '50px',
        backgroundColor: '#ddd',
        fontSize: '1.2em',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          float: 'left',
        }}
      >
        {word}
      </span>
      <button
        onClick={onClick}
        style={{
          backgroundColor: '#ddd',
          border: 'none',
          fontSize: '0.9em',
          float: 'right',
        }}
      >
        <i data-word={word} className='fas fa-times-circle'></i>
      </button>
    </span>
  );
};

export default Keyword;

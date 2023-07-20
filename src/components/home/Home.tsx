import './home.css';
import Badge from 'react-bootstrap/Badge';

const Home = () => {
  return (
    <div>
      <img
        src="https://media.licdn.com/dms/image/C5612AQHYwkuDRyXecQ/article-cover_image-shrink_600_2000/0/1625738082076?e=1695254400&v=beta&t=mkNm_JG3IV6uZ3ROkjj9XHPHFIy5N9goJ_OE7cEZqYE"
        alt="Imagen de muestra"
        className="full-width-image"
      />
      <div>
      <h1 className="text-start">
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      </div>
    </div>
  );
};

export default Home;

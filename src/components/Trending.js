import { useEffect, useState } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        console.log("datas => ", response.data.results);
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} id="trending" key={index}>
                <Card className="bg-dark text-white p-2 m-1">
                  <Card.Img
                    src={`${process.env.REACT_APP_IMG_URL}${result.poster_path}`}
                    alt="Batman image"
                  />
                  <Card.Title className="text-center">
                    {result.title}
                  </Card.Title>
                  <Card.Text className="text-left">{result.overview}</Card.Text>
                  <Card.Text className="text-left">
                    {result.release_date}
                  </Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;

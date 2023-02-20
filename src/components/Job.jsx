import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_JOB } from "./redux/action";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={4}>
        <Button
          className="mx-2  bg-light"
          onClick={() => {
            dispatch({ type: ADD_JOB, payload: data });
          }}
        >
          ❤
        </Button>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

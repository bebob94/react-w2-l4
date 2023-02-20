import { Col, Row, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { REMOVE_JOB } from "./redux/action";

const FavouriteJobs = () => {
  const cartContent = useSelector((state) => state.jobOfferts);

  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {cartContent.map((job, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: REMOVE_JOB,
                    payload: i,
                  });
                }}
              >
                🗑
              </Button>

              <span>
                <strong> {job.company_name} </strong>

                <span> {job.title}</span>
              </span>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default FavouriteJobs;

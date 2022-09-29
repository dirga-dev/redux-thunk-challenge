import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { fetchComments } from "./slicer";
import Loader from "./loader";


const Comments = () => {
  const allComments = useSelector((state) => state.comments.entities);
  const loading = useSelector((state) => state.comments.loading);
  const dispatch = useDispatch();
  const doFetchComments = () => {
    dispatch(fetchComments());
  };

  return (
    <Container>

      {/* HEADER */}
      <ToastContainer  />
      <h1 className="mt-4 text-center font-weight-bold">Redux-Thunk Challenge (Session 11)</h1>
      <div className="mt-4 text-center">
        <Button
          onClick={doFetchComments}
          className="btn btn-success mx-auto"
        >
          Fetch Data
        </Button>
      </div>
      {loading && <Loader />}

      {/* TABLE */}
      <Table striped className="text-start mt-4">
        <thead>
          <tr align="center" className="table-success">
            <th>No</th>
            <th>Nama Akun</th>
            <th>Email</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {allComments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Comments;

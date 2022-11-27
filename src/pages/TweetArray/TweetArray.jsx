function TweetArray({ onClickDelete, onClickEdit, content }) {
  return (
    <div className="d-flex justify-content-between border border-top-0 ">
      <div className="text-Secondary">
        <p className="m-0 text-start text-wrap word-break ">{content}</p>
      </div>
      <div className="d-flex gap-3 p-3 align-items-center ">
        <div>
          <button onClick={onClickEdit} className="btn btn-outline-primary">
            Edit
          </button>
        </div>
        <div>
          <button onClick={onClickDelete} className="btn btn-outline-info">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TweetArray;

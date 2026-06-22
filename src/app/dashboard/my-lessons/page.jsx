const MyLessonsPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">My Lessons</h1>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>Title</th>

              <th>Status</th>

              <th>Access</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>My Lesson</td>

              <td>Public</td>

              <td>Premium</td>

              <td>
                <button>Edit</button>

                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLessonsPage;

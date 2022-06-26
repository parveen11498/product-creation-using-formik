import UserRow from "../components/UserRow";

function Homee({ users, userList, setUserList }) {
  console.log(users);
  return (
    <>
      <div className="row">
        <h2>Manage Users</h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium pl-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Manage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      console.log(user);
                      return (
                        <UserRow
                          key={user.id}
                          userdata={user}
                          userList={userList}
                          setUserList={setUserList}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homee;
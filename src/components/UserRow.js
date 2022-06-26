import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function UserRow({ userdata, userList, setUserList }) {
  const navigate = useNavigate();
  return (
    <tr>
      <td className="pl-4">{userdata.id}</td>
      <td>
        <h5 className="font-medium mb-0">{userdata.name}</h5>
      </td>
      <td>
        <span className="text-muted">{userdata.email}</span>
      </td>
      <td className="crud-ops">
        <button
          type="button"
          className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
          onClick={(e) => {
            let updatedList = userList.filter(function (obj) {
              return obj.id !== userdata.id;
            });
            console.log(updatedList);
            setUserList(updatedList);
            navigate.push("/");
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
          onClick={(e) => {
            navigate.push("/edit/" + userdata.id);
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
          onClick={(e) => {
            navigate.push("/profile/" + userdata.id);
          }}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
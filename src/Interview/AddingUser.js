import { useState } from "react";
function AddingUser() {
  const [formData, setFormData] = useState({ user: [], value: "" });

  const addUser = () => {
    setFormData({
      user: [...formData.user, formData.value],
      value: "",
    });
  };

  const deleteUser = (index) => {
    const result = formData.user.filter((_, ind) => ind !== index);
    setFormData({ ...formData, user: result });
  };
  return (
    <div>
      <input
        type="text"
        value={formData.value}
        onChange={(e) => {
          setFormData((prev) => ({ ...prev, value: e.target.value }));
        }}
      />
      <button
        onClick={() => {
          addUser();
        }}
      >
        Add User{" "}
      </button>
      <p>User list</p>
      {formData.user.map((ulist, index) => {
        return (
          <div className="delete">
            <ul key={index}>
              <li>{ulist}</li>
            </ul>
            <button className="button" onClick={() => deleteUser(index)}>
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default AddingUser;

import { useState } from "react";
const DeleteUserPage = ({userId}) => {

  const [password, setPassword] = useState('');

  //funksioni qe egzekutohet kur klikojme butoinin DELETE
  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5001/api/users/delete/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
      body: JSON.stringify({
        password,
      }),
    })
      
  };

  return (
    <div>
      <p>Please enter your password to continue</p>

      <form onSubmit={handleDelete}>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="very_danger">DELETE</button>
      </form>
    </div>
  );
};
export const getServerProps = (req) =>{
  console.log(req.params.id)
   const userId = req.params.userId
return {
props:{
  userId
}
  
}
}

export default DeleteUserPage;
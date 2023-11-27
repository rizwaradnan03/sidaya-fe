import { Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode"; 
import { loginUser } from "../../api/auth/AuthApi";
import SweetAlert from "../../components/SweetAlert";
import { useNavigate } from "react-router";

interface DecodedToken extends JwtPayload {
  sub: string;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate()

  const handleCheckToken = () => {
    try {
      const token = localStorage.getItem("AccessToken")
      const role = localStorage.getItem("Role")

      if(token){
        if(role == "ADMIN"){
          return navigate('/admin/dashboard')
        }else if(role == "USER"){
          return navigate('/client/dashboard')
        }
      }

    } catch (error) {
      console.log('Errror While Checking Token ', error)
    }
  }

  useEffect(() => {
    handleCheckToken()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const login = await loginUser(username, password);

      if (login?.token == null) {
        SweetAlert({
          icon: "error",
          title: "Gagal Login",
          text: "Cek Kembali Username / Password Anda!",
        });

        setTimeout(() => {
          location.reload();
        }, 2000);
        
      } else {
        const decodedToken: DecodedToken = jwtDecode(login.token);

        localStorage.setItem("AccessToken", login.token)
        localStorage.setItem("Username", decodedToken.username)
        localStorage.setItem("Role", decodedToken.role)

        SweetAlert({
          icon: "success",
          title: "Berhasil Login",
          text: "Selamat Anda Berhasil Melakukan Login!",
        });

        if(decodedToken.role === "ADMIN"){
          navigate('/admin/dashboard')
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username">Username</Label>
            </div>
            <TextInput
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Password</Label>
            </div>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password "
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

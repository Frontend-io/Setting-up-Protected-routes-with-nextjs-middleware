import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();

  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const setLogin = async () => {
    setLoading(true);
    await Cookies.set('nextToken', pass);
    router.push('/');
  };

  return (
    <div>
      <h1>Welcome to login</h1>
      <br />
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={e => setPass(e.target.value)} />
      <br />
      <button disabled={!pass} onClick={setLogin}>
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  )
}
export default Login;
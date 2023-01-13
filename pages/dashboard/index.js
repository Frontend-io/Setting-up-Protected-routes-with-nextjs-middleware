import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from 'next/router';

function Overview() {
  const router = useRouter();

  const logout = () => {
    Cookies.remove('nextToken');
    router.push('/login')
  }

  return (
    <div>
      <h1>Dashboard - this page and forward (eg dashboard/users) pages are protected</h1>
      <br />

      <div>
        <Link href="#" onClick={logout}>
          <h2>Logout</h2>
        </Link>
        <br />
        <Link href="/dashboard/users">
          <h2>Users</h2>
        </Link>
      </div>
    </div>
  )
}
export default Overview;
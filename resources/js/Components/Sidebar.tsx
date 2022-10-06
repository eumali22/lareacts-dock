import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Sidebar(props) {
  return (<>
    <nav className="flex flex-col w-56 bg-gradient-to-b from-green-510 to-green-520 font-bold min-h-screen">
      <ul>
        <li>
          <Link className="block p-4 text-white" href="/home">Dashboard</Link>
        </li>
        <li>
          <Link className="block p-4 text-white" href="/home">Administration</Link>
        </li>
        <li>
          <span className="block p-4 text-white">Employees</span>
          <ul className="bg-white rounded-md font-normal px-4 py-1 mx-4 mb-4">
            <li>
              <Link href="/employees">201 Files</Link>
            </li>
            <li>
              <Link href="#">Locker Assignments</Link>
            </li>
            <li>
              <Link href="#">Print ID</Link>
            </li>
            <li>
              <Link href="#">Employee Queries</Link>
            </li>
            <li>
              <Link href="#">Generate HR Reports</Link>
            </li>
          </ul>
        </li>
        <li>
          <span className="block p-4 text-white">Timekeeping</span>
        </li>
        <li>
          <span className="block p-4 text-white">Payroll</span>
        </li>
      </ul>
    </nav>
  </>);
}
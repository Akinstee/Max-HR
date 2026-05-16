import Link from "next/link";

export default function LeaveDashboardPage() {
  const mockLeaves = [
    { id: 1, type: "Vacation", start_date: "2026-06-01", end_date: "2026-06-05", status: "approved" },
    { id: 2, type: "Sick Leave", start_date: "2026-05-10", end_date: "2026-05-12", status: "pending" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Leave Management</h1>
        <div className="flex gap-4">
          <Link href="/leaves/approvals" className="text-zinc-600 hover:underline pt-2 font-medium">
            Manager Approvals
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Request Leave
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-zinc-500 font-medium">Annual Leave Balance</h3>
          <p className="text-4xl font-bold mt-2">15 <span className="text-xl text-zinc-400 font-normal">days</span></p>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-zinc-500 font-medium">Sick Leave Balance</h3>
          <p className="text-4xl font-bold mt-2">8 <span className="text-xl text-zinc-400 font-normal">days</span></p>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-zinc-500 font-medium">Pending Requests</h3>
          <p className="text-4xl font-bold mt-2">1</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">My Leave History</h2>
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow overflow-hidden border border-zinc-200 dark:border-zinc-800">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
          <thead className="bg-zinc-50 dark:bg-zinc-950">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Dates</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {mockLeaves.map((leave) => (
              <tr key={leave.id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium">{leave.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-zinc-500">{leave.start_date} to {leave.end_date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    leave.status === 'approved' ? 'bg-green-100 text-green-800' :
                    leave.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

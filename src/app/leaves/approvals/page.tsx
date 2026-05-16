import Link from "next/link";

export default function LeaveApprovalsPage() {
  const mockApprovals = [
    { id: 1, user: "Alice Johnson", type: "Vacation", start_date: "2026-07-10", end_date: "2026-07-20", reason: "Family trip", status: "pending" },
    { id: 2, user: "Charlie Davis", type: "Sick Leave", start_date: "2026-05-15", end_date: "2026-05-16", reason: "Fever", status: "pending" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <Link href="/leaves" className="text-blue-600 hover:underline">
          &larr; Back to My Leaves
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">Manager Approvals</h1>

      <div className="space-y-6">
        {mockApprovals.map((req) => (
          <div key={req.id} className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold">{req.user} <span className="text-sm font-normal text-zinc-500 ml-2">requested {req.type}</span></h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">{req.start_date} to {req.end_date}</p>
              <p className="text-sm mt-2"><span className="font-semibold">Reason:</span> {req.reason}</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 font-medium">
                Approve
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 font-medium">
                Reject
              </button>
            </div>
          </div>
        ))}
        {mockApprovals.length === 0 && (
          <p className="text-zinc-500 text-center py-8">No pending leave requests to approve.</p>
        )}
      </div>
    </div>
  );
}

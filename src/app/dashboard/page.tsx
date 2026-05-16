import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">HR Dashboard</h1>
        <div className="text-zinc-500 font-medium">May 15, 2026</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-zinc-500 font-medium">Total Employees</h3>
          <p className="text-4xl font-bold mt-2">142</p>
          <div className="mt-2 text-sm text-green-600 font-medium">+3 this month</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-zinc-500 font-medium">Departments</h3>
          <p className="text-4xl font-bold mt-2">8</p>
          <div className="mt-2 text-sm text-zinc-400 font-medium">Across 3 locations</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-zinc-500 font-medium">On Leave Today</h3>
          <p className="text-4xl font-bold mt-2">5</p>
          <div className="mt-2 text-sm text-zinc-400 font-medium">3 Vacation, 2 Sick</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-zinc-500 font-medium">Pending Requests</h3>
          <p className="text-4xl font-bold mt-2 text-amber-600">12</p>
          <div className="mt-2 text-sm text-amber-600 font-medium">Action required</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-zinc-200 dark:border-zinc-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Activities</h2>
            <Link href="/activities" className="text-blue-600 text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0 last:pb-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">A{i}</span>
                </div>
                <div>
                  <p className="text-zinc-900 dark:text-zinc-100 font-medium">New employee onboarded</p>
                  <p className="text-zinc-500 text-sm mt-1">Alice Johnson joined the Engineering team as a Software Engineer.</p>
                  <span className="text-xs text-zinc-400 mt-1 block">2 hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-bold mb-6">Quick Links</h2>
          <div className="flex flex-col gap-3">
            <Link href="/employees" className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
              <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded text-indigo-600 dark:text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <span className="font-medium">Employee Directory</span>
            </Link>
            <Link href="/leaves" className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded text-green-600 dark:text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <span className="font-medium">Leave Management</span>
            </Link>
            <Link href="/leaves/approvals" className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
              <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded text-amber-600 dark:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M10 2v4"/><path d="M14 2v4"/><path d="M18 2v4"/><path d="M4 10h16"/><path d="m9 16 2 2 4-4"/></svg>
              </div>
              <span className="font-medium">Pending Approvals</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

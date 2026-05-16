import Link from "next/link";

export default async function EmployeesPage() {
  // In a real app, this would fetch from the Laravel API
  const mockEmployees = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", department: "Engineering", role: "Software Engineer" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", department: "HR", role: "HR Manager" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com", department: "Sales", role: "Sales Rep" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employee Directory</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add Employee
        </button>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow overflow-hidden border border-zinc-200 dark:border-zinc-800">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
          <thead className="bg-zinc-50 dark:bg-zinc-950">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {mockEmployees.map((emp) => (
              <tr key={emp.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">{emp.name}</div>
                  <div className="text-zinc-500 text-sm">{emp.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-zinc-700 dark:text-zinc-300">
                  {emp.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-zinc-700 dark:text-zinc-300">
                  {emp.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href={`/employees/${emp.id}`} className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

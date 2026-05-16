import Link from "next/link";

export default async function EmployeeProfilePage({ params }: { params: { id: string } }) {
  // In a real app, fetch employee data by ID from Laravel API
  const empId = params.id;
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/employees" className="text-blue-600 hover:underline">
          &larr; Back to Directory
        </Link>
      </div>
      
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-6 mb-6">
          <div className="h-24 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-3xl text-zinc-500">
            {empId}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Employee Name</h1>
            <p className="text-zinc-500 text-lg">Software Engineer &bull; Engineering</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 border-b pb-2 mb-4">Contact Information</h3>
            <p className="mb-2"><span className="text-zinc-500">Email:</span> employee@example.com</p>
            <p className="mb-2"><span className="text-zinc-500">Phone:</span> +1 234 567 890</p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 border-b pb-2 mb-4">Employment Details</h3>
            <p className="mb-2"><span className="text-zinc-500">Employee ID:</span> EMP-{empId}</p>
            <p className="mb-2"><span className="text-zinc-500">Start Date:</span> Jan 15, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

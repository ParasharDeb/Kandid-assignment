'use client'

const linkedinAccounts = [
  { name: "Pulkit Garg", email: "1999pulkitgarg@gmail.com", requests: 17, total: 30, status: "Connected" },
  { name: "Jivesh Lakhani", email: "jivesh@gmail.com", requests: 19, total: 30, status: "Connected" },
  { name: "Indrajit Sahani", email: "indrajit38mig@gmail.com", requests: 18, total: 30, status: "Connected" },
  { name: "Bhavya Arora", email: "bhavyaarora199.ba@gmail.com", requests: 18, total: 100, status: "Connected" }
];

export default function LinkedinAccs() {
  return (
    <section className="bg-white shadow rounded-lg p-4">
      <h2 className="font-bold text-lg mb-3">LinkedIn Accounts</h2>
      <ul>
        {linkedinAccounts.map((acc, idx) => (
          <li key={idx} className="flex items-center gap-3 py-2 border-b last:border-b-0 text-sm">
            <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="font-bold text-blue-700 text-xs">in</span>
            </div>
            <span className="font-bold">{acc.name}</span>
            <span className="text-gray-400">{acc.email}</span>
            <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600 text-xs">{acc.status}</span>
            <div className="flex-1 ml-4">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(acc.requests / acc.total) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 ml-2">{acc.requests}/{acc.total}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

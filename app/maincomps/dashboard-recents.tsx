'use client'

type Activity = {
  name: string;
  role: string;
  status: string;
  image: string;
};

const activities: Activity[] = [
  { name: "Om Satyarthy", role: "Regional Head", status: "Pending Approval", image: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg" },
  { name: "Dr. Bhuvaneshwari", role: "Fertility & Women's Health + A...", status: "Sent 7 mins ago", image: "https://xsgames.co/randomusers/assets/avatars/female/12.jpg" },
  { name: "Surdeep Singh", role: "Building Product-led SEO Growt...", status: "Sent 7 mins ago", image: "https://xsgames.co/randomusers/assets/avatars/male/30.jpg" },
  { name: "Dilbag Singh", role: "Manager Marketing & Communicat...", status: "Sent 7 mins ago", image: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg" },
  { name: "Vanshy Jain", role: "Ayurvedal|primary infertility|...", status: "Sent 7 mins ago", image: "https://xsgames.co/randomusers/assets/avatars/male/15.jpg" },
  { name: "Sunil Pal", role: "Helping Fashion & Lifestyle Br...", status: "Pending Approval", image: "https://xsgames.co/randomusers/assets/avatars/male/17.jpg" },
  { name: "Utkarsh K.", role: "Airbnb Host | Ex-The Skin Story", status: "Do Not Contact", image: "https://xsgames.co/randomusers/assets/avatars/male/25.jpg" },
];

export default function RecentDashboard() {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Recent Activity</h2>
        <button className="border px-2 py-1 text-xs rounded text-gray-600">Most Recent</button>
      </div>
      <ul>
        {activities.map((a, idx) => (
          <li key={idx} className="flex items-center py-3 border-b last:border-b-0 gap-4">
            <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src={a.image} alt={`${a.name} avatar`} className="w-7 h-7 object-cover rounded-full" />
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-medium text-gray-700">{a.name}</span>
              <span className="text-xs text-gray-400">{a.role}</span>
            </div>

            {a.status === "Pending Approval" ? (
              <span className="px-3 py-1 rounded-md bg-purple-100 text-purple-600 text-xs flex items-center gap-1">
                <svg width="12" height="12" fill="currentColor" className="mr-1">
                  <circle cx="6" cy="6" r="5" />
                </svg>
                Pending Approval
              </span>
            ) : a.status.startsWith("Sent") ? (
              <span className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-600 text-xs flex items-center gap-1">
                <svg width="12" height="12" fill="currentColor" className="mr-1">
                  <circle cx="6" cy="6" r="5" />
                </svg>
                {a.status}
              </span>
            ) : a.status === "Do Not Contact" ? (
              <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs">Do Not Contact</span>
            ) : a.status.startsWith("Followup") ? (
              <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-600 text-xs">{a.status}</span>
            ) : (
              <span className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-600 text-xs">{a.status}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

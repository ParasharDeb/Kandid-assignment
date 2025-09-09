'use client';
import LeftNavigation from '../maincomps/Leftnav';
import { useEffect, useMemo, useState } from 'react';
import ProfileIcon from '../icons/profile';
const STATUS_OPTIONS = ['All Campaigns', 'Active', 'Inactive', 'Draft', 'Paused', 'Completed'];

type Campaign = {
  id: number;
  campaignName: string;
  status: 'Draft' | 'Active' | 'Paused' | 'Completed' | string;
  totalLeads: number;
  successfulLeads: number;
  responseRate: number;
  progress: number;
  createdAt: string | null;
};

export default function CampaignsPage() {
  // Fetch campaigns
  // For SSR, use an async server component, or API route + useSWR for CSR
  const [status, setStatus] = useState('All Campaigns');
  const [search, setSearch] = useState('');
  const [campaignsList, setCampaignsList] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCampaigns = async (opts?: { status?: string; search?: string }) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (opts?.status) params.set('status', opts.status);
      if (opts?.search) params.set('search', opts.search);
      const res = await fetch(`/api/campaigns${params.toString() ? `?${params.toString()}` : ''}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to load campaigns');
      setCampaignsList(data.campaigns || []);
    } catch (e) {
      console.error(e);
      setCampaignsList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns({ status, search });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, search]);

  // Filtered & searched list (replace with dynamic data as per your setup)
  const visibleCampaigns = useMemo(() => campaignsList
    .filter(c => status === 'All Campaigns' || c.status === status)
    .filter(c => c.campaignName.toLowerCase().includes(search.toLowerCase()))
  , [campaignsList, status, search]);

  const handlePauseResume = async (campaign: Campaign) => {
    const nextStatus = campaign.status === 'Active' ? 'Paused' : 'Active';
    try {
      await fetch(`/api/campaigns/${campaign.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      });
      fetchCampaigns({ status, search });
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (campaign: Campaign) => {
    try {
      await fetch(`/api/campaigns/${campaign.id}`, { method: 'DELETE' });
      fetchCampaigns({ status, search });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden md:block md:w-64 md:shrink-0 bg-white border-r">
        <LeftNavigation />
      </div>
      <main className="flex-1 overflow-x-auto">
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between px-8 py-6 border-b">
            <h1 className="text-2xl font-bold">Campaigns</h1>
            <button className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded hover:bg-blue-700">
              + Create Campaign
            </button>
          </header>
          <section className="px-8 py-4">
            <p className="mb-4 text-gray-600">
              Manage your campaigns and track their performance.
            </p>
            {/* Filters */}
            <div className="mb-4 flex gap-2">
              {STATUS_OPTIONS.map(opt => (
                <button
                  key={opt}
                  className={`px-4 py-1 text-sm rounded-full border ${status === opt ? "bg-blue-100 text-blue-700 border-blue-300 font-semibold" : "bg-white text-gray-600 border-gray-300"}`}
                  onClick={() => setStatus(opt)}
                >
                  {opt}
                </button>
              ))}
              <input
                type="text"
                placeholder="Search campaigns..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="ml-auto px-3 py-1 border rounded bg-gray-50 text-sm focus:outline-none"
              />
            </div>
            {/* Campaigns Table */}
            <div className="bg-white rounded-lg shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Campaign Name</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-center">Total Leads</th>
                    <th className="px-4 py-2 text-center">Request Status</th>
                    <th className="px-4 py-2 text-center">Connection Status</th>
                    <th className="px-4 py-2 text-left">Progress</th>
                    <th className="px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-gray-400">Loading...</td>
                    </tr>
                  )}
                  {!loading && visibleCampaigns.map(campaign => (
                    <tr key={campaign.id} className="border-b hover:bg-gray-50">
                      {/* Campaign Name */}
                      <td className="px-4 py-2 font-medium">{campaign.campaignName}</td>
                      {/* Status Badge */}
                      <td className="px-4 py-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          campaign.status === 'Active' ? "bg-green-100 text-green-700"
                          : campaign.status === 'Inactive' ? "bg-red-100 text-red-700"
                          : campaign.status === 'Paused' ? "bg-yellow-100 text-yellow-700"
                          : campaign.status === 'Draft' ? "bg-gray-100 text-gray-700"
                          : "bg-blue-100 text-blue-700"
                        }`}>
                          {campaign.status}
                        </span>
                      </td>
                      {/* Total Leads */}
                      <td className="px-4 py-2 text-center flex items-center justify-center gap-1">
                        <div className="inline-block text-gray-600 flex items-center gap-1">
                          <div><ProfileIcon/></div>
                          <div>{campaign.totalLeads}</div>
                        </div>
                      </td>
                      {/* Request Status */}
                      <td className="px-4 py-2 text-center">
                        {/* Replace these with your own logic/icons */}
                        <div className="flex gap-3 justify-center">
                          <span className="flex items-center gap-1 text-green-600 text-xs"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="green" /><text x="12" y="16" textAnchor="middle" fontSize="11" fill="green">✓</text></svg>{campaign.successfulLeads}</span>
                          <span className="flex items-center gap-1 text-yellow-600 text-xs"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="yellow" /><text x="12" y="16" textAnchor="middle" fontSize="11" fill="yellow">?</text></svg>{campaign.totalLeads-campaign.successfulLeads}</span>
                          <span className="flex items-center gap-1 text-red-600 text-xs"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="red" /><text x="12" y="16" textAnchor="middle" fontSize="11" fill="red">✗</text></svg>0</span>
                        </div>
                      </td>
                      {/* Connection Status */}
                      <td className="px-4 py-2 text-center">
                        <div className="flex gap-3 justify-center">
                          <span className="text-blue-600 text-xs flex gap-1 items-center">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="blue" /></svg>0
                          </span>
                          <span className="text-purple-600 text-xs flex gap-1 items-center">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="purple"><circle cx="12" cy="12" r="10" stroke="purple" /></svg>0
                          </span>
                        </div>
                      </td>
                      {/* Progress Bar */}
                      <td className="px-4 py-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-xs font-medium text-blue-700">{campaign.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${campaign.progress}%` }} />
                          </div>
                        </div>
                      </td>
                      {/* Actions */}
                      <td className="px-4 py-2 text-center">
                        <div className="flex gap-2 justify-center">
                          {campaign.status === 'Active' ? (
                            <button onClick={() => handlePauseResume(campaign)} className="px-2 py-1 text-xs text-gray-500 bg-gray-50 border rounded hover:text-yellow-600 cursor-pointer">Pause</button>
                          ) : (
                            <button onClick={() => handlePauseResume(campaign)} className="px-2 py-1 text-xs text-gray-500 bg-gray-50 border rounded hover:text-green-600 cursor-pointer">Resume</button>
                          )}
                          <button onClick={() => handleDelete(campaign)} className="px-2 py-1 text-xs text-gray-500 bg-gray-50 border rounded hover:text-red-400 cursor-pointer">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {!loading && visibleCampaigns.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-gray-400">
                        No campaigns found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

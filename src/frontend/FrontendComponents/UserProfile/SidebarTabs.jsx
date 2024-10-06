import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Settings from './Setting';
import { useNavigate, useParams } from 'react-router-dom';
import Portfolio from './Portfolio';
import Followers from './Followers';

const SidebarTabs = () => {
  const navigate = useNavigate();
  const { tab } = useParams(); // Get the tab from the URL
  const [activeTab, setActiveTab] = useState(tab || 'portfolio'); // Default to 'portfolio' if no tab in URL
 
  const [showBankCard, setShowBankCard] = useState(false);

  // Update the URL when the active tab changes
  useEffect(() => {
    if (tab !== activeTab) {
      navigate(`/userprofile/${activeTab}`);
    }
  }, [activeTab, tab, navigate]);

  return (
    <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
      <TabsList className="flex justify-end my-5 bg-white mr-11">
  <TabsTrigger
    value="portfolio"
    className="px-4 py-2 relative hover:text-gray-900 hover:border-orange-500 focus:border-orange-500 transition-all duration-300"
    style={{ borderBottom: tab === 'portfolio' ? '' : 'none' }}
  >
    Portfolio
    <span
      className={`absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 transform ${tab === 'portfolio' ? 'scale-x-100' : 'scale-x-0'}`}
    />
  </TabsTrigger>

  <TabsTrigger
    value="followers"
    className="px-4 py-2 relative hover:text-gray-900 hover:border-orange-500 focus:border-orange-500 transition-all duration-300"
    style={{ borderBottom: tab === 'followers' ? '' : 'none' }}
  >
    Followers
    <span
      className={`absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 transform ${tab === 'followers' ? 'scale-x-100' : 'scale-x-0'}`}
    />
  </TabsTrigger>

  <TabsTrigger
    value="watchlist"
    className="px-4 py-2 relative hover:text-gray-900 hover:border-orange-500 focus:border-orange-500 transition-all duration-300"
    style={{ borderBottom: tab === 'watchlist' ? '' : 'none' }}
  >
    Watchlist
    <span
      className={`absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 transform ${tab === 'watchlist' ? 'scale-x-100' : 'scale-x-0'}`}
    />
  </TabsTrigger>

  <TabsTrigger
    value="cash"
    className="px-4 py-2 relative hover:text-gray-900 hover:border-orange-500 focus:border-orange-500 transition-all duration-300"
    style={{ borderBottom: tab === 'cash' ? '' : 'none' }}
  >
    Cash
    <span
      className={`absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 transform ${tab === 'cash' ? 'scale-x-100' : 'scale-x-0'}`}
    />
  </TabsTrigger>

  <TabsTrigger
    value="taxDocs"
    className="px-4 py-2 relative hover:text-gray-900 hover:border-orange-500 focus:border-orange-500 transition-all duration-300"
    style={{ borderBottom: tab === 'taxDocs' ? '' : 'none' }}
  >
    Tax Docs
    <span
      className={`absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 transform ${tab === 'taxDocs' ? 'scale-x-100' : 'scale-x-0'}`}
    />
  </TabsTrigger>

  <TabsTrigger
    value="account"
    className="px-4 py-2 relative hover:text-gray-900 hover:border-orange-500 focus:border-orange-500 transition-all duration-300"
    style={{ borderBottom: tab === 'account' ? '' : 'none' }}
  >
    Account
    <span
      className={`absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transition-all duration-300 transform ${tab === 'account' ? 'scale-x-100' : 'scale-x-0'}`}
    />
  </TabsTrigger>
</TabsList>
 


      <TabsContent value="portfolio">
          <Portfolio/>
      </TabsContent>
      
      <TabsContent value="followers">
        <Followers/>
      </TabsContent>

      <TabsContent value="watchlist">
      <div className="w-3/5 mx-auto right-card my-10">
        <div className="flex flex-col items-center justify-center h-full p-4">
  {/* Icon (You can use any icon library) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-12 h-12 text-gray-400 mb-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 14.25l-3.5-3.5m0 0l3.5-3.5M5.5 10.75h13M15 10.75l3.5 3.5m0 0l-3.5 3.5"
    />
  </svg>

  {/* Message */}
  <p className="text-gray-500 text-lg">No data available now</p>
</div>

        </div>
      </TabsContent>

      <TabsContent value="cash">
        <div className="w-3/5 right-card mx-auto my-10">
          <h2 className="text-xl font-semibold mb-4">Cash Management</h2>
          <div className="">
            <p className="text-gray-700 mb-4">
              Manage your cash and link your bank account.
            </p>
            <Button
              onClick={() => setShowBankCard(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Add Bank Account
            </Button>

            {showBankCard && (
              <Card className="mt-4 p-4">
                <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600">
                  Plaid and Stripe integration will be added soon.
                </p>
              </Card>
            )}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="taxDocs">
        <div className="w-3/5 mx-auto right-card my-10">
        <div className="flex flex-col items-center justify-center h-full p-4">
  {/* Icon (You can use any icon library) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-12 h-12 text-gray-400 mb-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 14.25l-3.5-3.5m0 0l3.5-3.5M5.5 10.75h13M15 10.75l3.5 3.5m0 0l-3.5 3.5"
    />
  </svg>

  {/* Message */}
  <p className="text-gray-500 text-lg">No data available now</p>
</div>

        </div>
      </TabsContent>

      <TabsContent value="account">
        <Settings/>
      </TabsContent>
    </Tabs>
  );
};

export default SidebarTabs;

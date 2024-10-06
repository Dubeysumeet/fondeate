import React, { useState } from 'react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('loginSecurity');

  const renderContent = () => {
    switch (activeSection) {
      case 'loginSecurity':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Login & Security</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">E-mail</h3>
              <p>Please verify</p>
              <p>dubeysumeet2019@gmail.com</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Update</button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Password</h3>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Reset</button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Telephone</h3>
              <p>Please verify</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Update</button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Multi-factor Authentication (MFA)</h3>
              <p>SMS/Text message</p>
              <p>Add your phone number above to set up SMS two-factor authentication</p>
              <h4 className="font-semibold mt-4">Authenticator App</h4>
              <p>Add</p>
              <p>Use an authentication app or browser extension to generate one-time codes</p>

              <h4 className="font-semibold mt-4">Security Key</h4>
              <p>Add</p>
              <p>Security keys are hardware devices that can be used as your second factor of authentication.</p>
            </div>

            <div className="mt-6">
              <button className="px-4 py-2 bg-red-500 text-white rounded">Delete account</button>
              <button className="ml-4 px-4 py-2 bg-gray-500 text-white rounded">Log out of all devices</button>
            </div>
          </div>
        );

        case 'investorInformation':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Investor Information</h2>
            {/* Personal Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Personal Information</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Legal Name:</span>
                <span>Sumeet Dubey</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Household:</span>
                <span>Single</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Preferred Language:</span>
                <span>Portuguese</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Birthday:</span>
                <span>01/01/1995</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Nationality:</span>
                <span>Indian</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Tax Identification:</span>
                <span>123-456-7890</span>
              </div>
            </div>

            {/* Entities Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Entities</h3>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
                Add Entity
              </button>
            </div>

            {/* Beneficiaries Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Beneficiaries</h3>
              <p>You can add up to 10 beneficiaries and change them at any time.</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Add Beneficiary
              </button>
            </div>
          </div>
        );

        case 'investorLimits':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Investor Limits</h2>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Legal Investment Limit:</span>
                <span>US$2,500/year</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Annual Income:</span>
                <span>US$ 0</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Net Worth:</span>
                <span>US$ 0</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Accreditation Status:</span>
                <span>None</span>
              </div>
              <p>Your account limit is $2,500 until your accreditation is verified.</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">To Check</button>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Sophisticated Status:</h3>
              <span>None</span>
            </div>
          </div>
        );

      case 'banksCards':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Banks & Cards</h2>
            <p>Add your first payment method</p>
            <div className="flex flex-col gap-4 mt-6">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Add New Bank Account</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Add New Credit Card</button>
            </div>
          </div>
        );

      case 'publicProfile':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Public Profile</h2>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Presentation Name:</span>
                <span>Sumeet Dubey</span>
              </div>
              <div className="mb-6">
                <span className="font-medium text-gray-700">Wefunder URL:</span>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="https://wefunder.com/"
                  defaultValue="https://wefunder.com/sumeetdubey"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Biography</h3>
              <textarea
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Write a short bio..."
              ></textarea>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Website</h3>
              <input
                type="url"
                className="w-full p-2 border rounded"
                placeholder="https://"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Investing Thesis</h3>
              <textarea
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Describe your investing thesis..."
              ></textarea>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Off Platform Investments</h3>
              <textarea
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Describe your off-platform investments..."
              ></textarea>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Investment Size</h3>
              <input
                type="number"
                className="w-full p-2 border rounded"
                placeholder="Enter investment size"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Interests</h3>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Add your interests"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Privacy</h3>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label>Hide badges</label>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <label>Hide investments</label>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <label>Hide from search engines</label>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Profile Picture</h3>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Upload Picture</button>
            </div>
          </div>
        );

        case 'notifications':
            return (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Email Notifications</h2>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span>Wefunder Activity Summary</span>
                    <span>Weekly</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span>Investments of people I follow</span>
                    <span>Weekly</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span>Startups that match my interests</span>
                    <span>Connected</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span>Venture Funds (Accredited only)</span>
                    <span>Connected</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span>VIP promotions and updates</span>
                    <span>Connected</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span>Wefunder announcements, product updates, and events</span>
                    <span>Connected</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <button className="px-4 py-2 bg-red-500 text-white rounded">Unsubscribe from all notifications</button>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span>Company Updates: Companies I've invested in or that are on my Watchlist</span>
                    <span>Connected</span>
                  </div>
                </div>
              </div>
            );
    
          case 'vip':
            return (
              <div>
                <h2 className="text-2xl font-semibold mb-4">VIP Membership</h2>
                <div className="flex justify-between items-center mb-6">
                  <span>Status</span>
                  <span>Non-VIP Member</span>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Upgrade to VIP
                </button>
              </div>
            );
      // Add other sections here
      default:
        return <p>Select a setting option from the left side.</p>;
    }
  };

  return (
<div className="min-h-screen flex flex-col bg-gray-100">
  {/* Main Content */}
  <div className="flex flex-grow p-4">
    {/* Left Sidebar */}
    <div className="w-1/5 bg-white rounded-lg shadow-lg p-4 mr-4">
      <ul className="space-y-4">
        <li
          className={`cursor-pointer p-2 rounded ${
            activeSection === 'loginSecurity' ? 'bg-blue-500 text-white' : 'text-gray-700'
          }`}
          onClick={() => setActiveSection('loginSecurity')}
        >
          Login & Security
        </li>
        <li
          className={`cursor-pointer p-2 rounded ${
            activeSection === 'investorInformation' ? 'bg-blue-500 text-white' : 'text-gray-700'
          }`}
          onClick={() => setActiveSection('investorInformation')}
        >
          Investor Information
        </li>
        <li
          className={`cursor-pointer p-2 rounded ${
            activeSection === 'investorLimits' ? 'bg-blue-500 text-white' : 'text-gray-700'
          }`}
          onClick={() => setActiveSection('investorLimits')}
        >
          Investor Limits
        </li>
        <li
          className={`cursor-pointer p-2 rounded ${
            activeSection === 'banksCards' ? 'bg-blue-500 text-white' : 'text-gray-700'
          }`}
          onClick={() => setActiveSection('banksCards')}
        >
          Banks & Cards
        </li>
        <li
          className={`cursor-pointer p-2 rounded ${
            activeSection === 'publicProfile' ? 'bg-blue-500 text-white' : 'text-gray-700'
          }`}
          onClick={() => setActiveSection('publicProfile')}
        >
          Public Profile
        </li>
        <li
          className={`cursor-pointer p-2 rounded ${
            activeSection === 'notifications' ? 'bg-blue-500 text-white' : 'text-gray-700'
          }`}
          onClick={() => setActiveSection('notifications')}
        >
          Notifications
        </li>
        <li
          className={`cursor-pointer p-2 rounded ${
            activeSection === 'vip' ? 'bg-blue-500 text-white' : 'text-gray-700'
          }`}
          onClick={() => setActiveSection('vip')}
        >
          VIP
        </li>
      </ul>
    </div>

    {/* Right Content Area */}
    <div className="w-4/5 right-card">
      {renderContent()}
    </div>
  </div>

</div>


  );
};

export default Settings;

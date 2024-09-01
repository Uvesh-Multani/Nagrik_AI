import React from 'react';
import { Heading } from '@/components/heading';
import { Settings } from 'lucide-react';
import { UserProfile } from '@clerk/nextjs';

const SettingsPage = () => {
    return (
        <div>
            <Heading 
                title="Settings" 
                description="Manage account settings" 
                icon={Settings} 
                iconColor="text-gray-700" 
                bgColor="bg-gray-700/10" 
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
                    <UserProfile routing="hash" />
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;

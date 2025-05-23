// src/views/UserView.tsx
import React, { useState, useEffect } from 'react';
import { User } from '../models/User';
import { UserViewModel } from '../viewmodels/UserViewModel';

interface UserViewProps {
  userId: number;
}

const UserView: React.FC<UserViewProps> = ({ userId }) => {
  const [viewModel, setViewModel] = useState<UserViewModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // In a real app, you would fetch data from an API
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        const userData: User = { id: userId, name: 'Test User', email: 'test@example.com' };
        setViewModel(new UserViewModel(userData));
        setError(null);
      } catch (err) {
        setError('Failed to load user data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!viewModel) {
    return <div>No user data found.</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {viewModel.id}</p>
      <p>Name: {viewModel.name}</p>
      <p>Email: {viewModel.email}</p>
      {/* Example of how you might interact with the ViewModel */}
      {/* <button onClick={() => viewModel.updateName('New Name')}>Update Name (Console)</button> */}
    </div>
  );
};

export default UserView;

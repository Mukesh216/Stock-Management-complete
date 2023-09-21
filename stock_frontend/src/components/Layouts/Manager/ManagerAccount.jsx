
export const ManagerAccount = () => {
  const managerData = {
    profilePicture: 'https://res.cloudinary.com/dfsvudyfv/image/upload/v1693830073/Screenshot_20230904_174405_lol4zx.png', // Replace with the actual image URL
    lastLogin: '2023-09-04 14:30:00',
  };

  const user = JSON.parse(localStorage.getItem('user'));


  const handleLogout = () => {

    localStorage.removeItem('authenthicated');
    window.location.href = '/';
    
  };

  const handleAccountDeletion = () => {
    // Handle account deletion logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="bg-cover text-center">
          <img

            src={managerData.profilePicture}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold">{user.username}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-400">Last Login: {managerData.lastLogin}</p>
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mb-4"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full"
            onClick={handleAccountDeletion}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

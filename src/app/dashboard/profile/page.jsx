const ProfilePage = () => {
  return (
    <div>
      <div className="border rounded-3xl p-10">
        <img
          className="w-32 h-32 rounded-full"
          src="https://i.pravatar.cc/200"
        />

        <h2 className="text-4xl font-bold mt-5">John Doe</h2>

        <p>john@gmail.com</p>

        <p>⭐ Premium User</p>
      </div>
    </div>
  );
};

export default ProfilePage;

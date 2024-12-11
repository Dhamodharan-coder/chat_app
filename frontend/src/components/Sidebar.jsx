import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-fit w-full lg:w-72 border-r border-base-300 flex items-center flex-row lg:flex-col transition-all duration-200">
      <div className="lg:border-b lg:border-base-300 p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
        {/* TODO: Online filter toggle */}
        <div className="mt-3 hidden lg:flex lg:flexitems-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Show online only</span>
          </label>
         
        </div>
      </div>

      <div className="overflow-x-auto lg:overflow-y-auto flex lg:flex lg:flex-col lg:w-60 w-fit py-3">
  {filteredUsers.map((user) => (
    <button
      key={user._id}
      onClick={() => setSelectedUser(user)}
      className={`w-full p-3 flex items-center gap-3 hover:bg-base-300 transition-colors ${
        selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""
      }`}
    >
    <div>
    <div className="relative mx-auto lg:mx-0 flex flex-col items-center gap-2">
        {/* Profile Picture */}
        <img
          src={user.profilePic || "/avatar.png"}
          alt={user.name}
          className="size-12 object-cover rounded-full"
        />

        {/* Online/Offline Badge */}
        <span
          className={`absolute bottom-0 right-0 size-3 rounded-full ring-2 ${
            onlineUsers.includes(user._id)
              ? "bg-green-500 ring-green-200" // Online: Green
              : "bg-gray-400 ring-gray-200" // Offline: Gray
          }`}
          title={onlineUsers.includes(user._id) ? "Online" : "Offline"} // Tooltip for clarity
        />
      </div>

       {/* User Name (Visible on Small Screens) */}
       <div className="font-medium block text-sm lg:hidden truncate">
          {user.fullName}
        </div>
    </div>

      {/* User Info - Visible on Larger Screens */}
      <div className="hidden lg:block text-left min-w-0">
        <div className="font-medium truncate">{user.fullName}</div>
        <div
          className={`text-sm ${
            onlineUsers.includes(user._id)
              ? "text-green-500" // Online text
              : "text-gray-500" // Offline text
          }`}
        >
          {onlineUsers.includes(user._id) ? "Online" : "Offline"}
        </div>
      </div>
    </button>
  ))}

  {filteredUsers.length === 0 && (
    <div className="text-center text-zinc-500 py-4">No online users</div>
  )}
</div>

    </aside>
  );
};
export default Sidebar;

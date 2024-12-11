import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center h-fit pt-12 lg:pt-20 lg:px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl lg:h-[calc(100vh-8rem)] h-[calc(100vh-3rem)]">
          <div className="flex flex-col lg:flex-row h-full rounded-lg overflow-hidden">
          <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

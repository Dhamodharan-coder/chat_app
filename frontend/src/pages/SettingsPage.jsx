import { X } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { useNavigate } from "react-router-dom";



const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
const navigate = useNavigate()
  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="flex justify-end my-6 cursor-pointer" onClick={()=>{navigate("/")}}><X /></div>
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">1. Theme</h2>
          <p className="text-sm text-base-content/70">Choose a theme for your chat interface</p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t.theme ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t.theme)}
            >
          
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.theme.charAt(0).toUpperCase() + t.theme.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
       
      </div>
    </div>
  );
};
export default SettingsPage;

import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Lightbulb, LogOut, Menu, MessageCircle, Moon, Settings, Sun, User, X } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { useState } from "react";
const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useThemeStore();
   const [menuOpen, setMenuOpen] = useState(false);
  const [mode,setmode] = useState(true);
  function handletheme(t){
    if(mode){
      setmode(false)
      setTheme(t[0].theme)
    }else{
      setmode(true)
      setTheme(t[1].theme)
    }
  }

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Dhru Chat App</h1>
            
            </Link>
          </div>

          <div className="relative">
      {/* Three-dot menu for small screens */}
      <button
        className="sm:hidden p-2 rounded-full hover:bg-gray-200 transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />} {/* Toggle icon */}
      </button>

      {/* Menu Items */}
      <div
        className={`absolute right-0 top-12 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center gap-4 p-4 transition-transform ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-[-20px] opacity-0 pointer-events-none"
        } sm:static sm:flex-row sm:items-center sm:gap-4 sm:bg-transparent sm:shadow-none sm:p-0 sm:opacity-100 sm:translate-y-0`}
      >
        {/* Theme Toggle */}
        <div className="flex">
          <button
            key={THEMES[0].theme}
            className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors duration-300 ease-in-out`}
            onClick={() => handletheme(THEMES)}
          >
            {mode ? (
              <div
                className="transition-transform duration-1000 ease-in-out transform translate-y-0 opacity-100"
                style={{
                  transform: mode ? "translateY(0)" : "translateY(-100%)",
                  opacity: mode ? 1 : 0,
                }}
              >
                <Sun /> {/* Render Sun if mode is true */}
              </div>
            ) : (
              <div
                className="transition-transform duration-1000 ease-in-out transform translate-y-0 opacity-100"
                style={{
                  transform: mode ? "translateY(100%)" : "translateY(0)",
                  opacity: mode ? 0 : 1,
                }}
              >
                <Moon /> {/* Render Moon if mode is false */}
              </div>
            )}
          </button>
        </div>

        {/* Links */}
        <Link to={"/settings"} className="btn btn-sm gap-2">
          <Settings className="w-4 h-4" />
          <span className="hidden sm:inline">Settings</span>
        </Link>

        
            <Link to={"/profile"} className="btn btn-sm gap-2">
              <User className="size-5" />
              <span className="hidden sm:inline">Profile</span>
            </Link>

            <button className="flex gap-2 items-center cursor-pointer" onClick={logout}>
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          
      </div>
    </div>


        </div>
      </div>
    </header>
  );
};
export default Navbar;


import useTheme from "../context/themePContext";

export default function ToggleButton() {
  const { theme, Light, Dark } = useTheme();

  const toggleTheme = () => {
    if (theme=== "light") {
      Dark();
    } else {
      Light();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg font-semibold bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white transition-colors duration-300"
    >
      {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
}

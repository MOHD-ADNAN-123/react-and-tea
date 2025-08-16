export default function InfoCard(props) {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out">
      <h2 className="text-2xl font-bold mb-2">React Theme Switcher</h2>
      <p className="text-sm">
        This is a simple card.Made by {props.username} Toggle between <b>Light</b> 🌞 and <b>Dark</b> 🌙
        mode using the button above.
      </p>
    </div>
  );
}
 
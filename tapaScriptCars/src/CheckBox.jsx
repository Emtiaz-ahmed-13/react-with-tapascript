

function CheckBox() {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="premiumOnly"
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor="premiumOnly" className="text-sm text-gray-700">
        Show Premium Only
      </label>
    </div>
  );
}

export default CheckBox;

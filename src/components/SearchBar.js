export default function SearchBar({ onCheckboxClick, onInputChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => onInputChange(event.target.value)}
      />
      <label>
        <input type="checkbox" onClick={onCheckboxClick} /> Only show products
        in stock
      </label>
    </form>
  );
}

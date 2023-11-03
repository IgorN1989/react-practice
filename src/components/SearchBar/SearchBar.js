export const SearchBar = ({ filters: { topic, level }, onChangeFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={topic}
        placeholder="Filter by topic..."
        onChange={evt => {
          onChangeFilter('topic', evt.target.value);
        }}
      />
      <select
        value={level}
        onChange={evt => {
          onChangeFilter('level', evt.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};

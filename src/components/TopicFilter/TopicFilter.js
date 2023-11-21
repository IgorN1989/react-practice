import { useFilters } from 'hooks/useFilters';

export const TopicFilter = () => {
  const { topic, changeTopic } = useFilters();

  return (
    <input
      type="text"
      value={topic}
      placeholder="Filter by topic..."
      onChange={changeTopic}
    />
  );
};

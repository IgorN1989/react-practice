import { LevelFilter } from 'components/LevelFilter/LevelFilter';
import { TopicFilter } from 'components/TopicFilter/TopicFilter';
import { useFilters } from 'hooks/useFilters';

export const SearchBar = () => {
  const { reset } = useFilters();

  return (
    <div>
      <TopicFilter />
      <LevelFilter />
      <button type="button" onClick={reset}>
        Reset filters
      </button>
    </div>
  );
};

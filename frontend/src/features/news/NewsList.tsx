import useNewsData from '../../hooks/useNewsData';
import useNewsFilter from '../../hooks/useNewsFilter';
import Pagination from '../../components/Pagination';
import NewsCard from '../../features/news/NewsCard';
import Error from '../../components/ErrorMessage';

import NewsModel from '../../models/News.model';
import LoadingSpinner from '../../components/loaders/LoadingSpinner';

function NewsList() {
  const { params, setters } = useNewsFilter();

  const { data, error, isLoading, isError } = useNewsData();
  const news = data?.data.news;
  const totalItems = data?.totalItems;

  if (isError) return <Error message={(error as Error).message} />;

  return (
    <div className="flex flex-col justify-center md:w-5/6">
      <div className="flex justify-center flex-wrap gap-2 md:gap-4">
        {news && news.map((newsItem: NewsModel) => <NewsCard key={newsItem._id} news={newsItem} />)}
        {isLoading && <LoadingSpinner />}
      </div>
      {totalItems && (
        <Pagination
          page={parseInt(params.page)}
          totalItems={totalItems}
          itemsPerPage={parseInt(params.pageSize)}
          onPageChange={setters.setPage}
        />
      )}
    </div>
  );
}

export default NewsList;

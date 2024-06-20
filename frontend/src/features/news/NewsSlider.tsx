import { useQuery } from '@tanstack/react-query';
import { sliderNews } from '../../services/apiNews';
import Slider from '../../components/parts/slider/Slider';
import NewsCard from './NewsCard';
import Error from '../../components/Error';
import Section from '../../components/Section';
import NewsModel from '../../models/News.model';
import ListSkeleton from '../../components/loaders/skeletons/ListSkeleton';
import ImageSkeleton from '../../components/loaders/skeletons/ImageSkeleton';

function NewsSlider({ sliderLabel }: { sliderLabel: string }) {
  const { data, error, isLoading, isError } = useQuery(['SliderNews'], sliderNews);

  const news = data?.data.news;

  return (
    <Section type="vertical">
      <h2>{sliderLabel}</h2>
      <Slider moreLabel={'Még több hír...'} morePath={'/news'}>
        {isLoading && <ListSkeleton Child={ImageSkeleton} />}
        {isError && <Error message={(error as Error).message} />}
        {news && news.map((news: NewsModel) => <NewsCard key={news._id} news={news} />)}
      </Slider>
    </Section>
  );
}

export default NewsSlider;

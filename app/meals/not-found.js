import NotFoundPage from '@/components/not-found-page/not-found-page.component';

const NotFound = () => {
  return (
    <NotFoundPage
      title={'Not found'}
      message={
        'Unfortunately, we could not find the Meal or resource you were looking for.'
      }
    />
  );
};

export default NotFound;

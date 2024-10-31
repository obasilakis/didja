import withFadeAnimation from '@/components/withFadeAnimations';

function Loading() {
  return (
    <div className="w-80 bg-gray-600 p-8 rounded-md text-center">
      <p>Loading...</p>
    </div>
  );
}

export default withFadeAnimation(Loading);

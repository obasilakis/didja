import withFadeAnimation from '@/components/withFadeAnimations';

function Questions({ questions }) {
  return (
    <div className="w-80 bg-gray-600 p-8 rounded-md text-center">
      {JSON.stringify(questions)}
    </div>
  );
}

export default withFadeAnimation(Questions);

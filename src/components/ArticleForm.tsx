import withFadeAnimations from '@/components/withFadeAnimations';

function ArticleForm({ submitAction }) {
  return (
    <div className="w-80 bg-gray-600 p-8 rounded-md transition-opacity duration-500">
      <h1>Test your focus</h1>
      <form className="flex flex-col m-1" action={submitAction}>
        <label>Paste Article URL</label>
        <input
          className="outline-none bg-gray-800 rounded"
          type="text"
          name="url"
        />
        <label>Or Paste Article Text</label>
        <textarea className="outline-none bg-gray-800 rounded" name="article" />
        <button type="submit">Test</button>
      </form>
    </div>
  );
}

export default withFadeAnimations(ArticleForm);

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  Textarea,
} from '@/components/ui';
import { Loader2 } from 'lucide-react';

function ArticleForm({
  submitAction,
  isPending,
}: {
  submitAction: (payload: FormData) => void;
  isPending: boolean;
}) {
  return (
    <Card className="mb-4 p-4 dark">
      <CardHeader className="mb-4 text-center text-xl">
        Didja Read It?
      </CardHeader>
      <CardContent>
        {/* TODO: remove type assertion when React 19 stable */}
        <form
          className="flex flex-col m-1"
          action={submitAction as unknown as string}
        >
          <label className="text-center">Paste the Article URL Here</label>
          <Input className="my-4 rounded" type="text" name="url" />
          <label className="mt-4 text-center">
            Or Drop the Article Text Below
          </label>
          <Textarea className="my-4 rounded" name="article" />
          <div className="flex justify-center">
            <Button className="my-4 rounded w-3/4" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Quiz
                </>
              ) : (
                'Generate Quiz'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ArticleForm;

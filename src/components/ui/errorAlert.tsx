import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { ErrorType } from '@/app/types';

export function ErrorAlert({
  error,
  className,
}: {
  error?: ErrorType;
  className?: string;
}) {
  console.log(error, className);
  return (
    <Alert className={`h-22 ${className}`} variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{error?.title ?? ''}</AlertTitle>
      <AlertDescription>{error?.description ?? ''}</AlertDescription>
    </Alert>
  );
}

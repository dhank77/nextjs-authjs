import { TriangleAlertIcon } from "lucide-react";

interface PropsMessages {
    messages? : string
}

export const FormError = ({ messages } : PropsMessages) => {
    if (!messages) return null;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
        <TriangleAlertIcon className="w-4 h-4" />
        {messages}
    </div>
  )
}

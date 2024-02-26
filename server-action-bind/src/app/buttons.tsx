import { myAction } from "./actions";

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = myAction.bind(null, id);

  return (
    <form action={myAction}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span>Delete</span>
      </button>
    </form>
  );
}

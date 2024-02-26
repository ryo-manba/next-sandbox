import { ClientComponent, MyForm } from "./client-component";
import { UserProfile } from "./user-profile";

export default function App() {
  return (
    <div>
      <UserProfile userId="userId-1" />
      <MyForm />
      <ClientComponent />
    </div>
  );
}

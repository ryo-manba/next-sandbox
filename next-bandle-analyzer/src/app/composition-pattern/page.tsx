import { ServerComponent } from "./server-component";
import { ClientComponent } from "./client-component";

export default function App() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
}

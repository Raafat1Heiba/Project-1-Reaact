import "./App.css";
import {
  CircleX,
  BellRing,
  NotebookPen,
  Check,
  TriangleAlert,
} from "lucide-react";
import Alert from "./components/ui/Alert";

function App() {
  return (
    <>
      <Alert
        type={"alert-default"}
        icon={<BellRing />}
        title="Upgrade your plan"
      >
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          sint tempore quas non facere ducimus voluptas, aperiam atque eius
          maiores quibusdam eum architecto rerum doloremque accusamus laboriosam
          recusandae dicta magnam."
        </p>
      </Alert>
      <Alert
        type="alert-warning"
        icon={<TriangleAlert />}
        title="Tips & Tricks"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint
        tempore quas non facere ducimus voluptas, aperiam atque eius maiores
        quibusdam eum architecto rerum doloremque accusamus laboriosam
        recusandae dicta magnam."
      />
      <Alert
        type="alert-info"
        icon={<NotebookPen />}
        title="Note"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint
        tempore quas non facere ducimus voluptas, aperiam atque eius maiores
        quibusdam eum architecto rerum doloremque accusamus laboriosam
        recusandae dicta magnam."
      />
      <Alert
        type="alert-success"
        icon={<Check />}
        title="Your order has been processed"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint
        tempore quas non facere ducimus voluptas, aperiam atque eius maiores
        quibusdam eum architecto rerum doloremque accusamus laboriosam
        recusandae dicta magnam."
      />
      <Alert
        type="alert-danger"
        icon={<CircleX />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint
        tempore quas non facere ducimus voluptas, aperiam atque eius maiores
        quibusdam eum architecto rerum doloremque accusamus laboriosam
        recusandae dicta magnam."
      />
    </>
  );
}

export default App;

import { useMemo, useState } from "react";
import { Editor, Aside } from "./components";
import { AppContext } from "./consts/contexts";

function App() {
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();
  const [file, setFile] = useState();
  const [isImageSelected, setIsImageSelected] = useState();
  const [image, setImage] = useState();
  const [pixels, setPixels] = useState([]);
  const [size, setSize] = useState(1);

  const appDep = useMemo(
    () => ({
      canvas: [canvas, setCanvas],
      ctx: [ctx, setCtx],
      file: [file, setFile],
      isImageSelected: [isImageSelected, setIsImageSelected],
      image: [image, setImage],
      pixels: [pixels, setPixels],
      size: [size, setSize],
    }),
    [canvas, ctx, file, isImageSelected, image, pixels, size]
  );

  return (
    <AppContext.Provider value={appDep}>
      <div className="app-container">
        <Aside />
        <Editor />
      </div>
    </AppContext.Provider>
  );
}

export default App;

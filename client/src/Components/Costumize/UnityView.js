import React, {useState} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import { UnityContainer } from '../../elements/screens/mainScreens/costumize/costumize'

const loader= './Build/Test2.loader.js'

const unityContext = new UnityContext({
  loaderUrl: loader,
  dataUrl: "./Build/Test2.data",
  frameworkUrl: "./Build/Test2.framework.js",
  codeUrl: "./Build/Test2.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "TinyHome",
  productVersion: "0.1"
});






function UnityView() {

  const [progression, setProgression] = useState(0);
  unityContext.on("progress", progress => {
    // Now we can use the progression to for example
    // display it on our React app.
    setProgression(progress);
  });
  
  return (
    <UnityContainer>
      { (progression<1)&& `Loading ${ Math.floor(progression * 100)} percent...`}
      
      
     <Unity unityContext={unityContext} width='100%' height='73vh' className="my-unity-app" />
     </UnityContainer>
  );
}

export default UnityView;
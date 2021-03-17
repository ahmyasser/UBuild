import React, {useState} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import { UnityContainer } from '../../elements/screens/mainScreens/costumize/costumize'

const loader= './Build/28FT.loader.js'

const unityContext = new UnityContext({
  loaderUrl: loader,
  dataUrl: "./Build/28FT.data",
  frameworkUrl: "./Build/28FT.framework.js",
  codeUrl: "./Build/28FT.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "TinyHome",
  productVersion: "0.1"
});




const onClick = ()=> {
  unityContext.send(
    'Canvas',
     'ChangeAppearance',
      '{"itemType":"Interior Walls","itemID":"123","material":"Timeless"}'
  );
}

function UnityView() {

  const [progression, setProgression] = useState(0);
  unityContext.on("progress", progress => {
    // Now we can use the progression to for example
    // display it on our React app.
    setProgression(progress);
  });
  
  return (
    <UnityContainer>
      <button onClick={()=>onClick()}>Interior Walls</button>
      { (progression<1)&& `Loading ${ Math.floor(progression * 100)} percent...`}
      
      
     <Unity unityContext={unityContext} width='100%' height='74vh' className="my-unity-app" />
     </UnityContainer>
  );
}

export default UnityView;
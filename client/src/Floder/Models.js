
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

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


function Models() {
  return (
    <>
    <h1>Models</h1>
     <Unity unityContext={unityContext} height="400px" width="800px"/>
     </>
  );
}

export default Models;

/* Dedicated, disposable browser Python worker. No account tokens are passed here. */
let ready = false;
self.onmessage = async ({data}) => {
 try {
  const base = new URL('../vendor/pyodide/', self.location.href).href;
  const checker = await (await fetch(new URL('checks.py?v=prep-nextgen-v5', self.location.href))).text();
  importScripts(base+'pyodide.js');
  const py = await loadPyodide({indexURL:base});
  await py.runPythonAsync(checker);
  // All required runtime/modules are now local. Student code gets only the lab facade.
  self.fetch=()=>Promise.reject(Error('Network access is disabled during lab execution.'));
  self.XMLHttpRequest=undefined;self.WebSocket=undefined;self.importScripts=()=>{throw Error('Imports are disabled.')};
  ready=true;self.postMessage({type:'ready'});
  py.globals.set('candidate_code',data.code);py.globals.set('candidate_lab',data.labId);py.globals.set('candidate_action',data.action);
  const encoded=await py.runPythonAsync('json.dumps(evaluate(candidate_code, candidate_lab, candidate_action))');
  self.postMessage({type:'result',result:JSON.parse(encoded)});
 } catch(e) {self.postMessage({type:'error',infrastructure:!ready,error:String(e.message||e)});}
};

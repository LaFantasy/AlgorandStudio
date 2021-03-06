const { IpcChannel } = require('@obsidians/ipc')
const KeypairManager = require('@obsidians/keypair')
const { AutoUpdate } = require('@obsidians/global')
const CompilerManager = require('@obsidians/algorand-compiler')
const { InstanceManager } = require('@obsidians/algorand-instances')
const ProjectChannel = require('@obsidians/algorand-project')

let ipcChannel, keypairManager, autoUpdate, compilerManager, instanceManager, projectChannel
module.exports = function () {
  ipcChannel = new IpcChannel()
  keypairManager = new KeypairManager(process.env.BUILD)
  autoUpdate = new AutoUpdate('https://app.eosstudio.io/api/v1/check-update-algorand/')
  compilerManager = new CompilerManager()
  instanceManager = new InstanceManager()
  projectChannel = new ProjectChannel()
}

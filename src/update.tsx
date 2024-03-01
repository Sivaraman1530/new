import { BundleInfo, CapacitorUpdater } from '@capgo/capacitor-updater'

const InitializeApp= ()=> {
  let data:any|BundleInfo
    console.log("stage 1")
    CapacitorUpdater.addListener('updateAvailable', async (res) => {
        try {
          data = await CapacitorUpdater.download({
            version: '0.0.1',
            url: 'https://github.com/Sivaraman1530/new/archive/refs/heads/master.zip',
            })
          CapacitorUpdater.set(data)
          console.log("our_bundle",res.bundle)
        }
        catch (error) {
          console.log(error)
        }
      })
      CapacitorUpdater.notifyAppReady();
 return null
}

export default InitializeApp
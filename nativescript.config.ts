import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.nativescriptpokedex',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  nsext: '.tns',
  webext: '',
  shared: true,
  useLegacyWorkflow: false,
} as NativeScriptConfig

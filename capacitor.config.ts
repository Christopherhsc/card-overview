import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'card-overview',
  appName: 'card-overview',
  webDir: 'www',
  "server": {
    "url": "http://192.168.1.149:8100",
    "cleartext": true
  },
};

export default config;

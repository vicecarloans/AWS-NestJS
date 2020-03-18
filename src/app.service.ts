import { Injectable } from '@nestjs/common';
import { Server } from './app.interface'
const os = require("os");


@Injectable()
export class AppService {
  getHello(): Server {
    const networks = os.networkInterfaces();
    const foundNetworkName : any = Object.keys(networks).find(networkName => {
      const networkInfos = networks[networkName];
      const found =  networkInfos.find(
        networkInfo => !networkInfo.internal && networkInfo.family === "IPv4"
      );
      if(found){
        return true
      }
    });

    const network : any = networks[foundNetworkName].find(
      net => net.family === "IPv4"
    );
    return {
      hostname: os.hostname(),
      ipv4: network.address,
      mac: network.mac,
      netmask: network.netmask,
      cidr: network.cidr,
      platform: os.platform()
    };
  }
}

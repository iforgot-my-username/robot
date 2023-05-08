import { useState } from 'react';
import './App.css';
import Controller from './Controller';
import { Button } from '@mui/material';

function App() {
  const [device, setDevice] =
    useState<BluetoothRemoteGATTCharacteristic | null>(null);
  const serviceUuid = '0000ffe0-0000-1000-8000-00805f9b34fb';
  const characteristicUuid = '0000ffe1-0000-1000-8000-00805f9b34fb';

  async function connectToDevice() {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [
          {
            name: 'JDY-33-BLE',
          },
        ],
        optionalServices: [serviceUuid],
      });

      // connect to the device
      const server = await device.gatt!.connect();

      // discover the service and characteristic
      const service = await server.getPrimaryService(serviceUuid);
      const characteristic = await service.getCharacteristic(
        characteristicUuid
      );
      setDevice(characteristic);

      console.log('Data sent successfully');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Button
        variant="contained"
        color={device !== null ? 'success' : 'error'}
        onClick={connectToDevice}
      >
        connect
      </Button>
      <Controller
        controlAction={(logic) => {
          console.log(logic);
          if (device !== null) {
            device.writeValue(
              new TextEncoder().encode('<' + logic.join('') + '>')
            );
          }
        }}
      ></Controller>
    </div>
  );
}

export default App;

import { Dispatch, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Controller from './Controller';
import { Button } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);
  const [chard, setDevice] = useState<BluetoothRemoteGATTCharacteristic | null>(
    null
  );
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

      // send data to the characteristic
      // const data = new Uint8Array([1, 2, 3]);
      const data = new TextEncoder().encode('j');

      await characteristic.writeValue(data);

      console.log('Data sent successfully');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Button variant="contained" onClick={connectToDevice}>
        connect
      </Button>
      <Controller
        upButton1Action={async () =>
          chard!.writeValue(new TextEncoder().encode('w'))
        }
        downButton1Action={async () =>
          chard!.writeValue(new TextEncoder().encode('s'))
        }
        upButton2Action={async () =>
          chard!.writeValue(new TextEncoder().encode('u'))
        }
        downButton2Action={async () =>
          chard!.writeValue(new TextEncoder().encode('d'))
        }
        func1={async () => chard!.writeValue(new TextEncoder().encode('1'))}
        func2={async () => chard!.writeValue(new TextEncoder().encode('2'))}
      ></Controller>
    </div>
  );
}

export default App;

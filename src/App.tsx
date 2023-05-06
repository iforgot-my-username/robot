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

  // return (
  //   <>
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>Hello Vite + React!</p>
  //         <p>
  //           {/* <button
  //           type="button"
  //           onClick={async () => {
  //             const device = await navigator.bluetooth.requestDevice({
  //               acceptAllDevices: true,
  //             });
  //             optionalServices: ['0000ffe0-0000-1000-8000-00805f9b34fb'];
  //             const server = await device.gatt!.connect();
  //             const service = await server.getPrimaryService(
  //               '0000ffe0-0000-1000-8000-00805f9b34fb'
  //             ); // SPP service UUID
  //             // const characteristic = await service.getCharacteristic(
  //             //   '0000ffe1-0000-1000-8000-00805f9b34fb'
  //             // ); // SPP characteristic UUID
  //             // const buffer = new TextEncoder().encode('j');
  //             // await characteristic.writeValue(buffer);
  //             // const value = await characteristic.readValue();
  //           }}
  //         >
  //           count is: {count}
  //         </button> */}
  //           <button onClick={connectToDevice}>connect</button>
  //           <button
  //             onClick={async () => {
  //               const data = new TextEncoder().encode('k');

  //               await chard!.writeValue(data);
  //             }}
  //           >
  //             kkk
  //           </button>
  //         </p>

  //         <p>
  //           Edit <code>App.tsx</code> and save to test HMR updates.
  //         </p>
  //         <p>
  //           <a
  //             className="App-link"
  //             href="https://reactjs.org"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Learn React
  //           </a>
  //           {' | '}
  //           <a
  //             className="App-link"
  //             href="https://vitejs.dev/guide/features.html"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Vite Docs
  //           </a>
  //         </p>
  //       </header>
  //     </div>
  //     <div>
  //       <Controller
  //         onDownClick1={() => {}}
  //         onDownClick2={() => {}}
  //         onUpClick1={() => {}}
  //         onUpClick2={() => {}}
  //       ></Controller>
  //     </div>
  //   </>
  // );
  return (
    <div className="App">
      <Button variant="contained" onClick={connectToDevice}>
        connect
      </Button>
      <Controller
        onDownClick1={async () =>
          chard!.writeValue(new TextEncoder().encode('w'))
        }
        onDownClick2={async () =>
          chard!.writeValue(new TextEncoder().encode('s'))
        }
        onUpClick1={async () =>
          chard!.writeValue(new TextEncoder().encode('u'))
        }
        onUpClick2={async () =>
          chard!.writeValue(new TextEncoder().encode('d'))
        }
        func1={async () => chard!.writeValue(new TextEncoder().encode('1'))}
        func2={async () => chard!.writeValue(new TextEncoder().encode('2'))}
      ></Controller>
    </div>
  );
}

export default App;

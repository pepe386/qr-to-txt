import React, { useState } from 'react';
import {
  IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonActionSheet
} from '@ionic/react';
import { set, get } from '../utils/Storage';
import { qrCodeOutline, close, trashOutline } from 'ionicons/icons';
import './Home.css';
import QrReader from 'react-qr-reader'


const Home: React.FC = () => {

  let [scanActive, updateScan] = useState(false);
  const [scanResult, updateScanResult] = useState<any>({ data: [] as any[] });
  const [loadedData, updateLoadedData] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);
  let [dataToTxt, updatedataToTxt] = useState("");

  if (!loadedData) {
    get("data")
      .then((result) => {
        if (result !== null) {
          let newDataToTxt: any = "";
          for (let i = 0; i < result.data.length; i++) {
            newDataToTxt += result.data[i] + "\r\n";
          }
          updateScanResult(result);
          updatedataToTxt(newDataToTxt);

        }
        updateLoadedData(true);
      })
      .catch(() => {
        console.log("Error attemtpting to read data.");
        updateLoadedData(true);
      })
  }

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const input: any = document.getElementById('dataToDownload');
    const file: any = new Blob([input.value], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "data.txt";
    document.body.appendChild(element);
    element.click();
  }

  async function startScan() {
    updateScan(true);
  }

  const handleScan = (data: any) => {
    if (data) {
      let newData: any = scanResult;
      let newDataToTxt: any = dataToTxt + data + "\r\n";
      updatedataToTxt(newDataToTxt);
      newData.data.push(data);
      set("data", newData);
      updateScanResult(newData);
      updateScan(false);
    }
  }

  const handleError = () => {
    //todo
  }

  const reset = () => {
    updateScanResult({ data: [] as any[] });
    set("data", { data: [] as any[] });
    updatedataToTxt("");
  }

  const stopScan = () => {
    updateScan(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>QR code to text file</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">QR code to text file</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br />

        <IonButton expand="full" onClick={() => startScan()}>
          <IonIcon slot="start" icon={qrCodeOutline}></IonIcon>
          Start scan
        </IonButton>

        {scanActive && (
          <QrReader
            delay={500}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        )}

        {scanActive && (
          <IonButton expand="full" onClick={() => stopScan()} color="danger" >
            <IonIcon slot="start" icon={close}></IonIcon>
            Stop scan
          </IonButton>
        )}

        {scanResult.data.length > 0 && (
          scanResult.data.map((result: any, index: number) => {
            return (
              <IonCard key={index} href={result} >
                <IonCardHeader>
                  <IonCardTitle>QR text</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  {result}
                </IonCardContent>
              </IonCard>
            )
          }))}

        {scanResult.data.length > 0 && (
          <div>
            <textarea id="dataToDownload" value={dataToTxt} style={{ color: "black" }} onChange={stopScan} hidden />
            <IonButton expand="full" color="success" onClick={downloadTxtFile}>Download txt file</IonButton>
            <IonButton onClick={() => setShowActionSheet(true)} color="warning" expand="full">
              <IonIcon slot="start" icon={trashOutline}></IonIcon>
            Delete data
          </IonButton>
          </div>
        )}

        {scanResult.data.length > 0 && (
          <IonActionSheet
            isOpen={showActionSheet}
            onDidDismiss={() => setShowActionSheet(false)}
            cssClass='my-custom-class'
            buttons={[{
              text: 'Confirm delete',
              role: 'destructive',
              icon: trashOutline,
              handler: () => {
                reset();
              }
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }]}
          >
          </IonActionSheet>
        )}

      </IonContent>
    </IonPage>
  );
};

export default Home;

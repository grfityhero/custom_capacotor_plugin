import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import { IonicNativePluginExample } from "../plugins/IonicNativePluginExample";
import { useEffect, useState } from "react";


import './Home.css';

const Home: React.FC = () => {
  const [title, setTitle] = useState<string>('');

  IonicNativePluginExample.addListener("EVENT_LISTENER_NAME", ({ message }) =>
    console.log(message)
  );

  const { NativeMethod, NotifyListeners } = IonicNativePluginExample;

  useEffect(() => {
    const getTitle = async () => {
      const { message } = await NativeMethod();
      setTitle(message);
    };
    getTitle();
  }, []);

  NotifyListeners();



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">some title</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <h1>hello world</h1>
      <div>now:  {title} </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

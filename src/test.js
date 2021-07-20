//import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const fbConfig = {
    apiKey: "AIzaSyAzXD6V0AdF27NVWIbxBJcmkE1mjfkIolU",
    authDomain: "cloud-d9f02.firebaseapp.com",
    databaseURL: "https://cloud-d9f02.appspot.com",
    projectId: "cloud-d9f02",
}

firebase.initializeApp(firebaseConfig);
var db = init.firestore();  //위 설정대로 저장소에 접속합니다.
let ref = db.collection('data');  //내가 사용할 컬렉션입니다.
  
let setSf = ref.doc().set( [{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097}] );
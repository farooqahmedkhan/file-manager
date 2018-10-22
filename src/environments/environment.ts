// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  component_events: {
    INIT_FILE_UPLOAD: 'init-file-upload',
    FILE_UPLOAD_COMPLETE: 'upload-complete'
  },
  firebase: {
    config: {
      apiKey: "AIzaSyCLVv73LEv5FftuH7P31XKQktT4WWYCF7Y",
      authDomain: "fileuploader-97e91.firebaseapp.com",
      databaseURL: "https://fileuploader-97e91.firebaseio.com",
      projectId: "fileuploader-97e91",
      storageBucket: "fileuploader-97e91.appspot.com",
      messagingSenderId: "936995345942"
    },
    project_storage_url: 'gs://fileuploader-97e91.appspot.com',
    base_folder: 'file-uploader-data/'    
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

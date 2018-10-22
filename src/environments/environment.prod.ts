export const environment = {
  production: true,
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

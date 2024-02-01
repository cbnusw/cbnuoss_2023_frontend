export class UploadAdapter {
  constructor(loader, uploadService) {
    this.loader = loader;
    this.uploadService = uploadService;
  }

  upload() {
    return this.loader.file
      .then((file) => this.uploadService.upload(file))
      .then((response) => {
        return { default: response.data.url };
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }
}

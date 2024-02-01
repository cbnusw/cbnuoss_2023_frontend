import axiosInstance from '@/app/utils/axiosInstance';

export class UploadService {
  async upload(file) {
    const formData = new FormData();
    formData.append('upload', file);

    try {
      const response = await axiosInstance({
        method: 'post',
        url: '/upload',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

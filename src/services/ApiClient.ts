import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  protected async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url);
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError<Error>);
    }
  }

  protected async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError<Error>);
    }
  }

  private handleError(error: AxiosError): Error {
    if (error.response) {
      return new Error(`Request failed with status code ${error.response.status}`);
    } else if (error.request) {
      return new Error('No response received from the server');
    } else {
      return new Error(`Error: ${error.message}`);
    }
  }
}

export default ApiClient;

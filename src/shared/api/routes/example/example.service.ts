import { apiInstance } from '@/shared/api';

// localhost:8080/api/example
const route = '/example';

export class ExampleService {
  public static fetchExample() {
    apiInstance.get(route);
  }
}

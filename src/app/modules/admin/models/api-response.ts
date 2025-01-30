export interface ApiResponse {
  timestamp: string;
  url: string;
  method: string;
  message: string;
  data: Map<string, any>;
}

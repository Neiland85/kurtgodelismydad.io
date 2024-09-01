import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.filtergenius.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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
', 
  },
});

export default {
  filterText(input) {
    return apiClient.post('/your-endpoint', { input });
  },
};


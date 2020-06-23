import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 4002,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/mobileStore',
  JWT_SECRET: process.env.JWT_SECRET || 'xpanxion',
};

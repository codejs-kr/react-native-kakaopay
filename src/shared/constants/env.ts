type EnvType = 'development' | 'production';

export const NODE_ENV = process.env.NODE_ENV as EnvType;

export const isDev = NODE_ENV === 'development';

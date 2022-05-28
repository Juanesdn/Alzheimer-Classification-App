export type User = {
  id?: string;
  name?: string;
  email: string;
  password: string;
  isEmailVerified?: boolean;
  role?: string;
  image?: string;
};

export type UserResponse = {
  user?: User;
  tokens?: {
    access: string;
    refresh: string;
  };
  code?: number;
  message?: string;
  stack?: string;
};

export type MRIResponse = {
  code?: number;
  message?: string;
  mri: MRI;
  createdAt: string;
};

export type MRI = {
  image: string;
  classification: string;
  age: number;
  user: string;
  id: string;
  genre: string;
  observations: string;
};

export type SessionProps = {
  user: {
    email: string;
    name: string;
    picture?: string;
    userId: string;
  };
  accessToken: string;
  refreshToken: string;
  expires: number;
};

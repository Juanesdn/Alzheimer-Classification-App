import { MRIResponse, User, UserResponse } from '@/types';

export const signUpUser = async (user: User): Promise<UserResponse> => {
  const res = await fetch(`${process.env.API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const loginUser = async (user: User): Promise<UserResponse> => {
  const res = await fetch(`${process.env.API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: user.email, password: user.password }),
  });
  return res.json();
};

export const getLastMRI = async (
  token: string,
  userId: string
): Promise<MRIResponse | null> => {
  const res = await fetch(`${process.env.API_URL}/users/${userId}/lastmri`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const getUserMRIS = async (
  token: string,
  userId: string
): Promise<MRIResponse[]> => {
  const res = await fetch(`${process.env.API_URL}/users/${userId}/mris`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const createMRI = async (
  token: string,
  userId: string,
  mri: MRIResponse
): Promise<MRIResponse> => {
  const res = await fetch(`${process.env.API_URL}/users/${userId}/mris`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(mri),
  });
  return res.json();
};

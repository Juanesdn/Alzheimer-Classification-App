import { MRI, MRIResponse, User, UserResponse } from '@/types';

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

export const getModelPrediction = async (image: any): Promise<any> => {
  try {
    const data = new FormData();
    data.append('file', image);
    const res = await fetch(`${process.env.MODEL_URL}/predict`, {
      method: 'POST',
      body: data,
    });
    return await res.text();
  } catch (error) {
    return {
      code: 400,
    };
  }
};

export const createMRI = async (
  token: string,
  userId: string,
  mri: MRI
): Promise<MRIResponse> => {
  const classification = await getModelPrediction(mri.image);
  if (classification.code === 400) {
    return {
      code: 400,
      message: 'La imagen no pudo ser clasificada',
    };
  }
  const data = new FormData();
  data.append('image', mri.image);
  data.append('age', mri.age as unknown as string);
  data.append('genre', mri.genre);
  data.append('user', userId);
  data.append('classification', classification);
  data.append('observations', mri.observations ?? '');

  const res = await fetch(`${process.env.API_URL}/mri`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return res.json();
};

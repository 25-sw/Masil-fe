import * as API from '@/services/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ accountId, password }: { accountId: string; password: string }) =>
      API.login(accountId, password),
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: ({
      accountId,
      password,
      name,
    }: {
      accountId: string;
      password: string;
      name: string;
    }) => API.signup(accountId, password, name),
  });
};
import { customAxios } from "@/lib/customAxios";

export async function login(accountId: string, password: string) {
  const response = await customAxios.post('/store-owner/login', {
    accountId,
    password,
  });
  return response.data;
}

export async function signup(accountId: string, password: string, name: string) {
  const response = await customAxios.post('/store-owner/sign-up', {
    accountId,
    password,
    name,
  });
  return response.data;
}
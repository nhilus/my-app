'use server';

import { log } from "console";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User= {
    id:string;
    firstName: string;
    lastName: string
};


export const createUser = async(prevState:any,formData:FormData) => {
    'use server'
    await new Promise((resolve) => setTimeout(resolve, 500));
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const newUser:User = {firstName, lastName, id:Date.now().toString()};
    await saveUser(newUser);

    try {
        await saveUser(newUser);
        revalidatePath('/actions');
        return 'User created successfully';
    }catch(error){
        return 'Error saving user';
    }
};

export const fetchUsers = async (): Promise<User[]> => {
    const result = await readFile('users.json', { encoding: 'utf8' });
    const users = result ? JSON.parse(result) : [];
    return users; // Return the parsed users instead of an empty array
};


export const saveUser = async (user: User) => {
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users));
}


export const deleteUser = async(formData:FormData) => {
    const id = formData.get('id') as string;
    const users = await fetchUsers();
    const updatedUsers = users.filter((user) => user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
};
export const removeUser = async (id:string, formData:FormData) => {
    const name = formData.get('name') as string;
    const users = await fetchUsers();
    const updatedUsers = users.filter((user) => user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
};
import { fetchUsers, saveUser } from "@/utils/actions";


export const GET= async (req:any, res:any) => {
    const users = await fetchUsers();
    return Response.json({users});
}
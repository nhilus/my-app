import { fetchUsers, saveUser } from "@/utils/actions";
import exp from "constants";
import { NextRequest, NextResponse } from "next/server";




export const GET = async (req:NextRequest, res:NextResponse) => {
    console.log(req.url);
    console.log(req.nextUrl.searchParams.get('id'));
    const users = await fetchUsers();
    return NextResponse.redirect(new URL('/', req.url));
}

export const POST = async (req:NextRequest, res:NextResponse) => {
    const user = await req.json();
    const newUser = {id:Date.now().toString(), ...user};
    await saveUser(newUser);
    return Response.json({message:'User created successfully'});
}
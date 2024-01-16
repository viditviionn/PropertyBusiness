import { NextResponse } from "next/server"

export function GET(){
    const data='snajdn'
    return NextResponse.json(data,{status:200})
}
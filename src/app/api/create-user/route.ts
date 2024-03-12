import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../db";
import createResponse from "@/app/utils/createResponse";
import hashPassword from "@/app/utils/hashPassword";

export async function POST(req: any, res: any) {
  try {
    if (req.method !== "POST") {
      return createResponse("method not allowed", 401, {}, {});
    }
    const { email, password, name } = await req.json();
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    return createResponse("user created successfully", 200, {}, { user });
  } catch (error) {
    console.error(error);
    return createResponse("internal server error", 500, {}, { error });
  }
}

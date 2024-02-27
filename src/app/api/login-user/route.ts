import createResponse from "@/app/utils/createResponse";
import prisma from "../../../../db";
import verifyPassword from "@/app/utils/verifyPassword";

export async function POST(req: any, res: any) {
  try {
    if (req.method !== "POST") {
      return createResponse("method not allowed", 401, {}, {});
    }
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      return createResponse("user not registered", 200, {}, {});
    }
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return createResponse("wrong password", 200, {}, {});
    }
    if (isPasswordValid) {
      return createResponse("user logged in successfully", 200, {}, { user });
    }
  } catch (error) {
    console.log(error);
    return createResponse("internal server error", 500, {}, { error });
  }
}
